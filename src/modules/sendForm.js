const sendForm = (formId) => {
  const form = document.querySelector(`form[name="${formId}"]`);
  const statusBlock = document
    .getElementById("responseMessage")
    .querySelector(".modal-content");
  const submitButton = form.querySelector(".button.feedback");

  const loadText = "    Загрузка...";
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

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
          setTimeout(() => {
            statusBlock.innerHTML = "";
          }, 3000);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          setTimeout(() => {
            statusBlock.innerHTML = "";
          }, 3000);
        });
    } else {
      alert("Данные не валидны");
      setTimeout(() => {
        statusBlock.innerHTML = "";
      }, 3000);
    }
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

  form.appendChild(statusBlock);
};

export default sendForm;
