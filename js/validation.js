document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");


  function validatePass() {
    if (password.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      return false;
    } else {
      passwordError.textContent = "";
      return true;
    }
  }

  function validatePassMatch() {
    if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      return false;
    } else {
      confirmPasswordError.textContent = "";
      return true;
    }
  }

  password.addEventListener("input", () => {
    validatePass();
  });

  confirmPassword.addEventListener("input", () => {
    validatePassMatch();
  });

  form.addEventListener("submit", (e) => {
    const isPasswordValid = validatePass();
    const isMatch = validatePassMatch();

    if (!form.checkValidity() || !isPasswordValid || !isMatch) {
      e.preventDefault();
      e.stopPropagation();
    }

    form.classList.add("was-validated");
  });
});
