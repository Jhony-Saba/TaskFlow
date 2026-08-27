const { body, validationResult, check, checkSchema } = require('express-validator');

// Single middleware function
const userValidator = [
  check('username')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 6 }).withMessage('Name must be at least 6 characters')
    .notEmpty().withMessage('Empty user name')
    .toLowerCase()
    .trim(),

  check('email')
 .isString()
 .notEmpty()
 .trim()
 .isEmail().withMessage('Invalid email format'),


  // Final middleware to check results
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // ✅ continue if no errors
  }
];

module.exports = userValidator;




