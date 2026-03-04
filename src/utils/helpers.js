export const validateForm = (formData, isSignUp, setErrors, setError, setIsValid) => {
  const requiredFieldsSignUp = ['name', 'login', 'password'];
  const requiredFieldsSignIn = ['login', 'password'];
  const newErrors = { name: "", login: "", password: "" };
  let isValid = true;


  // ошибки при регистрации (пустые поля)
  let isSignUpValid = requiredFieldsSignUp.every((field) => !!formData[field]?.trim());

  if (isSignUp && !isSignUpValid) {
    requiredFieldsSignUp.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = true;
      }
    });
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
    setIsValid(false)
  }


  // ошибки при регистрации (меньше 3 символов)
  isSignUpValid = requiredFieldsSignUp.every((field) => formData[field]?.length > 3);

  if (isSignUp && !isSignUpValid) {
    requiredFieldsSignUp.forEach((field) => {
      if (formData[field]?.length < 3) {
        newErrors[field] = true;
      }
    });
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
    setIsValid(false)
  }


  // ошибки email при регистрации
    if (isSignUp && (formData.login).includes("@") === false) {
    newErrors.login = true;
    setError("Введенные вами данные не корректны. Не сожержит @. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
    setIsValid(false);
  }


  // ошибки при входе (пустые поля)
  let isSignInValid = requiredFieldsSignIn.every((field) => !!formData[field]?.trim());

  if (!isSignUp && !isSignInValid) {
    requiredFieldsSignIn.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = true;
      }
    })
    setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
    setIsValid(false)
  }


  setErrors(newErrors);
  return isValid
}