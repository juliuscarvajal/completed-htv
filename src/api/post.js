import { parse, validate } from '../request';
import { formatErrors } from '../utils';

export default (ctx, next) => {
  const validation = validate(ctx.request.body);
  ctx.body = validation.valid
    ? parse(ctx.request.body)
    : formatErrors(validation.errors);
};
