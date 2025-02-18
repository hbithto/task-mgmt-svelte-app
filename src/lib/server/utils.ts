import { randomBytes } from 'node:crypto';

export function generateRandomId(length = 16): string {
  // This returns a hex string; length 16 means 32 hex characters (128 bits)
  return randomBytes(length).toString('hex');
}
