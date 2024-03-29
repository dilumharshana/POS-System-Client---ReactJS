//validate system name
export const validateName = (text, availableSystems) => {
  if (text.length === 0) return { state: false, text: "Required" };

  if (text.length < 2)
    return { state: false, text: "Name must contain atleast two characters" };

  if (text.length > 30)
    return { state: false, text: "Name must be less than 30 characters" };

  if (
    availableSystems.some(
      (system) => system.toLowerCase() === text.toLowerCase()
    )
  )
    return {
      state: false,
      text: "This name is not available",
      notAvailable: true,
    };

  return { state: true };
};

//validate system password
export const validatePassword = (text) => {
  if (text.length === 0)
    return {
      state: false,
      text: "Required",
    };

  if (text.length > 20)
    return { state: false, text: "Password must be less than 20 characters" };

  if (!/(?=.*?[a-z])/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one lowercase character",
    };

  if (!/(?=.*?[A-Z])/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one uppercase character",
    };

  if (!/(?=.*\d)/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one number",
    };

  if (!/[?=.*?[#?!@$%^&*-/_(){}.=\:;|<>`]/.test(text))
    return {
      state: false,
      text: "Password must contain atleast one special charater",
    };

  if (text.length < 6)
    return {
      state: false,
      text: "Password must contain atleast six characters",
    };

  return { state: true };
};
