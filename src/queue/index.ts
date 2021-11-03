export class Queue<T> {
  private queue: T[];
  private length: number;
  private readonly maxLength: number;

  public constructor(max?: number) {
    this.maxLength = max ?? 10;
    this.length = 0;
    this.queue = [];
  }

  public isEmpty = () => this.length === 0;

  public isFull = () => this.length === this.maxLength;

  public enqueue = (item: T) => {
    if (this.isFull()) throw new Error('Queue is already full!');

    this.length++;
    this.queue.unshift(item);
  };

  public dequeue = (): T => {
    if (this.isEmpty()) throw new Error('Queue is already empty!');

    this.length--;
    return this.queue.pop() as T;
  };

  public peek = (): T => {
    if (this.isEmpty()) throw new Error('Queue is empty');

    return this.queue[this.length - 1];
  };

  public getQueue = () => this.queue;
}
