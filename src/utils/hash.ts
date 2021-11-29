import * as crypto from 'crypto';

export const sha256 = (input: string): string => {
  return crypto.createHash('sha256').update(input).digest('hex');
};
