import { Validator } from 'jsonschema';

const required = type => ({ type, required: true });
const schema = {
  ...required('object'),
  properties: {
    payload: {
      ...required('array'),
      items: {
        type: "object",
        properties: {
          address: {
            ...required('object'),
            properties: {
              buildingNumber: required('string'),
              street: required('string'),
              suburb: required('string'),
              state: required('string'),
              postcode: required('string'),
            }
          },
          type: required('string'),
          workflow: required('string'),
        }
      }
    }
  }
}

export const validate = (request) => {
  try {
    const v = new Validator();
    const validation = v.validate(request, schema);
    return validation.valid;
  } catch (err) {
    return false;
  }
};
