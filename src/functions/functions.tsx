import { Errors, userInput } from "../types/types";

export function validation(input: userInput): Errors {
  let errors: Errors = {
    nameOnlyLetters: input.name ? null : true,
    last_nameOnlyLetters: input.last_name ? null : true,
    invalid_email: input.email ? null : true
  };
  const onlyLetters: RegExp = /[^A-Za-z]/g;
  const emailValidator: RegExp = /[A-Za-z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)$/g;

  if(!input.name) errors.name = true;
  else if (onlyLetters.test(input.name)) errors.nameOnlyLetters = true;
  
  if(!input.last_name) errors.last_name = true;
  else if (onlyLetters.test(input.last_name)) errors.last_nameOnlyLetters = true;

  if(!input.email) errors.email = true;
  else if(!emailValidator.test(input.email)) errors.invalid_email = true;
  console.log(emailValidator.test(input.email));

  if(!input.message) errors.message = true;

  return errors
}