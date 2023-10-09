const submitButton = document.createElement("div");
submitButton.className = "button-container";

const theButton = document.createElement("button");
theButton.id = "submitButton";
theButton.type = "button";
theButton.innerHTML = "Logga in";
theButton.addEventListener("click", matchPassword);
theButton.addEventListener("click", () => {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  localStorage.setItem("Namn", userName);
  localStorage.setItem("Email", userEmail);
  localStorage.setItem("Lösenord", userPassword);
});

submitButton.appendChild(theButton);

let confirmPw = (function () {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      const form = document.getElementById("form");
      const pwInput = document.getElementById("password");
      let pwValue;
      pwValue = pwInput.valueAsNumber;
      if (pwInput.value > "" || pwInput.lenght < 1) {
        const labelTag = document.createElement("label");
        labelTag.innerHTML = "Bekräfta Lösenord:";

        const confirmPwTag = document.createElement("input");
        confirmPwTag.type = "password";
        confirmPwTag.maxLength = "10";
        confirmPwTag.required = true;
        confirmPwTag.id = "password2";

        form.appendChild(submitButton);
        form.insertBefore(labelTag, submitButton);
        form.insertBefore(confirmPwTag, submitButton);
      }
    }
  };
})();

function matchPassword() {
  const pw1input = document.getElementById("password");
  const pw2input = document.getElementById("password2");

  if (pw1input.value != pw2input.value) {
    pw1input.style.borderColor = "red";
    pw2input.style.borderColor = "red";
  } else {
    pw1input.style.borderColor = "rgb(238,238,238)";
    pw2input.style.borderColor = "rgb(238,238,238)";

    theButton.type = "submit";
  }
}
