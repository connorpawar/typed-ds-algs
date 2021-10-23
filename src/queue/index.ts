export class Queue<T> {
  private queue: T[];
  private length: number;
  private readonly maxLength: number;

  public constructor(max?: number) {
    this.maxLength = max && max > 0 ? max : 10;
    this.length = 0;
    this.queue = new Array<T>(this.maxLength);
  }

  public isEmpty = () => this.length === 0;

  public isFull = () => this.length === this.maxLength;

  public enqueue = (item: T) => {
    if (this.isFull()) throw new Error('Queue is already full!');

    this.queue.unshift(item);
  };

  public dequeue = (): T => {
    if (this.isEmpty()) throw new Error('Queue is already empty!');

    return this.queue.pop() || this.queue[0];
  };

  public peek = (): T => {
    if (this.isEmpty()) throw new Error('Queue is empty');

    return this.queue[0];
  };
}
