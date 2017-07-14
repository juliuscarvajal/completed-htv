import { Validator } from 'jsonschema';
import { schema } from './schema';

export const validate = (request) => {
  try {
    const v = new Validator();
    const validation = v.validate(request, schema);
    const hasErrors = validation.errors.length > 0;
    const formatError = e => `${e.property} ${e.message}`;
    const errors = hasErrors && {
      errors: validation.errors.map(formatError)
    };

    return { valid: validation.valid, ...errors };
  } catch (err) {
    return { valid: false, errors: err.message };
  }
};
