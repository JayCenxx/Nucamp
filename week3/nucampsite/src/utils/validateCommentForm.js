export const validateCommentForm = (values) => {
  const errors = {};
  if (!values.rating) {
    errors.rating = "Required";
  }

  if (values.author.length < 2) {
    errors.author = "must be at least two characters.";
  } else if (values.author.length > 15) {
    errors.author = "must be 15 characters or less.";
  }
  return errors;
};
