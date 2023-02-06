const passwordValidator = require("password-validator");
const pwdSchema = new passwordValidator();

pwdSchema
  .is()
  .min(8) 
  .is()
  .max(20)
  .has()
  .uppercase(1) 
  .has()
  .lowercase(1)
  .has()
  .digits(2) 
  .has()
  .not()
  .spaces() 
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); 

module.exports = pwdSchema;
