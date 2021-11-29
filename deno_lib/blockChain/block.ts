import { createHash } from 'https://deno.land/std@0.85.0/node/crypto.ts';
import { sha256 } from '../utils/hash.ts';

export class Block<T> {
  private timestamp: Date;
  private data: T;
  private hash: string;
  private prevHash: string;
  private nonce: number;

  constructor(timestamp: Date, data?: T) {
    this.timestamp = timestamp;
    this.data = data ?? ({} as T);
    this.hash = this.computeHash();
    this.prevHash = '';
    this.nonce = 0;
  }

  public getHash = () => this.hash;
  public setHash = (hash: string) => (this.hash = hash);

  public getPrevHash = () => this.prevHash;
  public setPreviousHash = (hash: string) => (this.prevHash = hash);

  public getTimestamp = () => this.timestamp;

  public computeHash = () =>
    sha256(
      this.nonce + this.prevHash + this.timestamp + JSON.stringify(this.data)
    );

  public mine = (difficulty: number) => {
    // Loops until our hash starts with  0...0 of length <difficulty>.
    while (!this.hash.startsWith(Array(difficulty + 1).join('0'))) {
      // Change the nonce so we can get a different hash.
      this.nonce++;
      // Update to our new hash
      this.hash = this.getHash();
    }
  };
}
