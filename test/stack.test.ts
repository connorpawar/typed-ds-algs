import { Stack } from '../src';

describe('Stack', () => {
  it('can create empty stack', () => {
    let stack = new Stack();

    expect(stack.getStack()).toEqual([]);
  });

  it('can add element to stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);

    expect(stack.getStack()).toEqual([3, 2]);
  });

  it('can peek top element in a stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);

    const top = stack.peek();

    expect(top).toEqual(2);
  });

  it('can remove top element in a stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.pop();

    const top = stack.peek();

    expect(top).toEqual(3);
  });

  it('can stop inserting at max length in a stack', () => {
    let stack = new Stack(2);
    stack.push(3);
    stack.push(2);
    try {
      stack.push(4);
    } catch (e) {
      expect(e).toBeDefined();
    }

    const top = stack.peek();

    expect(top).toEqual(2);
  });

  it('can stop removing or peeking when empty', () => {
    let stack = new Stack(2);
    try {
      stack.pop();
    } catch (e) {
      expect(e).toBeDefined();
    }

    try {
      stack.peek();
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect(stack).toBeDefined();
  });
});
