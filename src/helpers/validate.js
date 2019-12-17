
// TODO validate signup: username should be unique
const validateSignup = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'This field is required.';
  }
  if (values.username && values.username.length < 5) {
    errors.username = 'Your username must be at least 5 characters long.';
  }
  if (!values.email) {
    errors.email = 'This field is required.';
  }
  if (!values.password) {
    errors.password = 'This field is required.';
  }
  if (values.password && (values.password.length < 8 || values.password.length > 14)) {
    errors.password = 'Your password must be between 8 and 15 characters long.';
  }

  return errors;
};

const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'This field is required.';
  }
  if (!values.password) {
    errors.password = 'This field is required.';
  }

  return errors;
};

const validateReset = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'This field is required.';
  }

  return errors;
};

export { validateSignup, validateLogin, validateReset };
