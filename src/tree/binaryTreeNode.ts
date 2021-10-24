export enum NodeDirection {
  Left,
  Right,
  Current,
}

export class BinaryTreeNode<T> {
  private left: BinaryTreeNode<T> | null;
  private right: BinaryTreeNode<T> | null;
  private val: T;

  public constructor(
    value: T,
    leftNode: BinaryTreeNode<T> | null = null,
    rightNode: BinaryTreeNode<T> | null = null
  ) {
    this.val = value;
    this.left = leftNode;
    this.right = rightNode;
  }

  public setValue = (value: T) => (this.val = value);
  public getValue = () => this.val;

  public setLeft = (leftNode: BinaryTreeNode<T> | null) =>
    (this.left = leftNode);
  public getLeft = () => this.left;

  public setRight = (rightNode: BinaryTreeNode<T> | null) =>
    (this.right = rightNode);
  public getRight = () => this.right;

  public getDirection = (otherVal: T): NodeDirection => {
    if (otherVal < this.val) return NodeDirection.Left;
    else if (otherVal > this.val) return NodeDirection.Right;

    return NodeDirection.Current;
  };

  public hasNoLeftChildren = () =>
    this.left === undefined || this.left === null;

  public hasNoRightChildren = () =>
    this.right === undefined || this.right === null;

  public hasNoChildren = () =>
    this.hasNoLeftChildren() && this.hasNoRightChildren();
}
