export const ACTIONS = {
  NAME_CHANGE: "NAME_CHANGE",
  USERNAME_CHANGE: "USERNAME_CHANGE",
  EMAIL_CHANGE: "EMAIL_CHANGE",
  PASSWORD_CHANGE: "PASSWORD_CHANGE",
};

export const initialState = {
  name: { value: "", isValid: false },
  username: { value: "", isValid: false },
  email: { value: "", isValid: false },
  password: {
    value: "",
    validations: {
      hasLowercase: false,
      hasUppercase: false,
      hasNumber: false,
      hasSpecialChar: false,
      minLength: false,
    },
  },
};

const NAME_PATTERN = /^[a-zA-Z\s]{3,}$/;
const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,}$/;
const EMAIL_PATTERN =
  /^(?<username>[a-z]\w+\.?\w+)@(?<domain>[a-z]{2,15})\.(?<tld>[a-z]{2,3})$/;

export const signupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.NAME_CHANGE:
      const isNameValid = NAME_PATTERN.test(payload);
      const newState = {
        ...state,
        name: { value: payload, isValid: isNameValid },
      };
      return newState;

    case ACTIONS.PASSWORD_CHANGE:
      const password = payload;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+]/.test(password);
      const minLength = password.length >= 8;

      return {
        ...state,
        password: {
          value: password,
          validations: {
            hasLowercase,
            hasUppercase,
            hasNumber,
            hasSpecialChar,
            minLength,
          },
        },
      };
  }
};
