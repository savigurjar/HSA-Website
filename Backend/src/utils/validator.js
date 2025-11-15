const validator = require("validator");

 async function validUser(data) {
  const mandatoryFields = ["firstName", "emailId", "password"];

  // Check if all mandatory fields are present
  const allPresent = mandatoryFields.every((field) => field in data);
  if (!allPresent) {
    throw new Error("Fields are missing: firstName, emailId, password are required.");
  }

  const { firstName, emailId, password } = data;

  // Check firstName length
  if (firstName.length < 3 || firstName.length > 20) {
    throw new Error("Name should have at least 3 characters and at most 20 characters.");
  }

  // Validate email
  if (!validator.isEmail(emailId)) {
    throw new Error("Invalid email format.");
  }

  // Validate password strength
  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password is not strong enough. It should include uppercase, lowercase, number, and symbol."
    );
  }
}

module.exports = validUser;
