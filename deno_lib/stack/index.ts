export class Stack<T> {
  private stack: T[];
  private length: number;
  private readonly maxLength: number;

  public constructor(max?: number) {
    this.maxLength = max ?? 10;
    this.length = 0;
    this.stack = [];
  }

  public isEmpty = () => this.length === 0;

  public isFull = () => this.length === this.maxLength;

  public push = (item: T) => {
    if (this.isFull()) throw new Error('Stack is already full!');

    this.length++;
    this.stack.push(item);
  };

  public pop = (): T => {
    if (this.isEmpty()) throw new Error('Stack is already empty!');

    this.length--;
    return this.stack.pop() as T;
  };

  public peek = (): T => {
    if (this.isEmpty()) throw new Error('Stack is empty');

    return this.stack[this.length - 1];
  };

  public getStack = () => this.stack;
}
