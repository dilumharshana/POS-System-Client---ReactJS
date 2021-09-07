//validate system name
export const validateName = (text) => {
  if (text && text.length === 0) return { state: false, text: "Required" };

  if (text && text.length < 2)
    return { state: false, text: "Name must contain atleast two characters" };

  if (text && text.length > 20)
    return { state: false, text: "Name must be less than 20 characters" };

  return { state: true };
};

//validate system password
export const validatePassword = (text) => {
  if (text && text.length === 0)
    return {
      state: false,
      text: "Required",
    };

  if (text && text.length > 20)
    return { state: false, text: "Password must be less than 20 characters" };

  if (text && !/(?=.*?[a-z])/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one lowercase character",
    };

  if (text && !/(?=.*?[A-Z])/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one uppercase character",
    };

  if (text && !/(?=.*\d)/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one number",
    };

  if (text && !/[?=.*?[#?!@$%^&*-/_(){}.=\:;|<>`]/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one special charater",
    };

  if (text && text.length < 6)
    return {
      state: false,
      text: "Password must contain atleast six characters",
    };

  return { state: true };
};
