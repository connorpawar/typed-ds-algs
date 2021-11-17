import { Block } from '.';

export class BlockChain<T> {
  private chain: Block<T>[];
  private difficulty: number;
  private blockTime: number;

  constructor() {
    this.difficulty = 1;
    this.blockTime = 30000;
    this.chain = [new Block(new Date())];
  }

  private getLatestBlock = () => {
    return this.chain[this.chain.length - 1];
  };

  public getCount = () => this.chain.length;

  public addBlock = (data: T) => {
    const block = new Block<T>(new Date(), data);
    block.setPreviousHash(this.getLatestBlock().getHash());
    block.setHash(block.computeHash());
    block.mine(this.difficulty);
    this.chain.push(block);

    // make it more or less difficult depending on if the time it took
    // to mine the last block took longer than the time since then
    this.difficulty +=
      Date.now() - this.getLatestBlock().getTimestamp().getMilliseconds() <
      this.blockTime
        ? 1
        : -1;
  };

  public validateChain = () => {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];

      // Check validation
      if (
        currentBlock.getHash() !== currentBlock.computeHash() ||
        prevBlock.getHash() !== currentBlock.getPrevHash()
      ) {
        return false;
      }
    }

    return true;
  };
}
