const sendForm = (formId) => {
  const form = document.querySelector(`form[name="${formId}"]`);

  const loadText = "Загрузка...";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер свяжется с Вами!";

  const checkName = (input) => {
    return /^[\u0400-\u04FF\- ]*$/i.test(input);
  };

  const checkPhone = (input) => {
    return /^\+?[0-9]+$/.test(input);
  };

  const validateInput = (input) => {
    const value = input.value;
    if (input.name === "fio" && !checkName(value)) {
      input.setCustomValidity("Пожалуйста, используйте только кириллицу");
    } else if (input.name === "tel" && !checkPhone(value)) {
      input.setCustomValidity(
        "Пожалуйста, используйте только цифры, возможно использование знака плюса в начале номера"
      );
    } else {
      input.setCustomValidity("");
    }
  };

  form.addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT") {
      validateInput(event.target);
    }
  });

  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (!input.checkValidity()) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    const statusBlock = document.createElement("div");
    statusBlock.classList.add("modal-content");

    if (validate(formElements)) {
      statusBlock.textContent = loadText;
      statusBlock.style.display = "block";

      const submitButton = form.querySelector('input[type="submit"]');
      submitButton.style.display = "none";

      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          form.reset();

          setTimeout(() => {
            statusBlock.style.display = "none";

            submitButton.style.display = "inline-block";
          }, 3000);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          setTimeout(() => {
            statusBlock.style.display = "none";

            submitButton.style.display = "inline-block";
          }, 3000);
        });
    } else {
      statusBlock.textContent = "Данные не валидны";
    }

    form.appendChild(statusBlock);
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
