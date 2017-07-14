const required = type => ({ type, required: true });
export const schema = {
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
};
