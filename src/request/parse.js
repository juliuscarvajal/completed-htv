import pick from 'lodash/pick';
import values from 'lodash/values';

export const parse = (request) => {
  const works = request.payload;
  const isHtv = work => work.type === 'htv';
  const isCompleted = work => work.workflow === 'completed';
  const completedHtvs = work => isHtv(work) && isCompleted(work);

  const addressFields = ['buildingNumber', 'street', 'suburb', 'state', 'postcode'];
  const combineAddressFields = address => values(pick(address, addressFields)).join(' ');
  const summary = work => ({
    type: work.type,
    workflow: work.workflow,
    concataddress: combineAddressFields(work.address)
  });

  const filtered = works
    .filter(completedHtvs)
    .map(summary);

  return { response: filtered };
};
