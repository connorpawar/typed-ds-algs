import { Sha256 } from 'https://deno.land/std@0.65.0/hash/sha256.ts';

export const sha256 = (input: string): string => {
  return new Sha256().update(input).hex();
};
