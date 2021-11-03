import { Queue } from '../src';

describe('queue', () => {
  it('can create empty queue', () => {
    let queue = new Queue();

    expect(queue.getQueue()).toEqual([]);
  });

  it('can add element to queue', () => {
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);

    expect(queue.getQueue()).toEqual([2, 3]);
  });

  it('can peek first element in a queue', () => {
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);

    const top = queue.peek();

    expect(top).toEqual(3);
  });

  it('can remove first element in a queue', () => {
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);
    queue.dequeue();

    const top = queue.peek();

    expect(top).toEqual(2);
  });

  it('can stop inserting at max length in a queue', () => {
    let queue = new Queue(2);
    queue.enqueue(3);
    queue.enqueue(2);
    try {
      queue.enqueue(4);
    } catch (e) {
      expect(e).toBeDefined();
    }

    const top = queue.peek();

    expect(top).toEqual(3);
  });

  it('can stop removing or peeking when empty', () => {
    let queue = new Queue(2);
    try {
      queue.dequeue();
    } catch (e) {
      expect(e).toBeDefined();
    }

    try {
      queue.peek();
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect(queue).toBeDefined();
  });
});
