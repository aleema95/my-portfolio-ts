import { Errors, userInput } from "../types/types";

export function validation(input: userInput): Errors {
  let errors: Errors = {};
  const onlyLetters: RegExp = /[^A-Za-z]/g;
  const emailValidator: RegExp = /[A-Za-z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)/g;

  if(!input.name) errors.name = 'Field is required';
  else if (onlyLetters.test(input.name)) errors.name = 'Must contain only letters';
  
  if(!input.last_name) errors.last_name = 'Field is required';
  else if (onlyLetters.test(input.last_name)) errors.last_name = 'Must contain only letters';

  if(!input.email) errors.email = 'Field is required';
  else if(emailValidator.test(input.email)) errors.email = 'Invalid e-mail address';

  if(!input.message) errors.message = 'Field is required';

  return errors
}