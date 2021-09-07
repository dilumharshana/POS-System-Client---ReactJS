//validate system name
export const validateName = (text) => {
  if (text.length < 2)
    return { state: false, text: "Name must contain atlest two characters" };

  if (text.length > 20)
    return { state: false, text: "Name must be less than 20 characters" };

  return { state: true };
};

//validate system password
export const validatePassword = (text) => {
  if (text.length < 6)
    return {
      state: false,
      text: "Password must contain atlest five characters",
    };

  if (text.length > 20)
    return { state: false, text: "Password must be less than 20 characters" };

  if (!/(?=.*?[a-zA-Z])/.test(text))
    return {
      state: false,
      text: "Password must contain atlest one lowercase character",
    };

  if (!/(?=.*?[A-Z])/.test(text))
    return {
      state: false,
      text: "Password must contain atlest one uppercase character",
    };

  if (!/(?=.*\d)/.test(text))
    return {
      state: false,
      text: "Password must contain atlest one number",
    };

  if (!/(?=.*?[!@#$%^&*()+/_=;,.<>{[\-`'"]}])/.test)
    return {
      state: false,
      text: "Password must contain atlest one number",
    };

  return { state: true };
};
