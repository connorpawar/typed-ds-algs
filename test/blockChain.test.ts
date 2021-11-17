import { BlockChain } from '../src';

describe('BlockChain', () => {
  it('can create initial block', () => {
    let chain = new BlockChain<number>();
    expect(chain.getCount()).toEqual(1);
  });
});
