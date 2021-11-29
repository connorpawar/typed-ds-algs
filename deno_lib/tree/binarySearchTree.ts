import { BinaryTreeNode, NodeDirection } from './binaryTreeNode.ts';

export class BinarySearchTree<T> {
  private root: BinaryTreeNode<T> | null;
  private count: number;

  public constructor(rootValue: T) {
    this.root = new BinaryTreeNode(rootValue);
    this.count = 1;
  }

  public getCount = () => this.count;

  public getInOrderTraversal = (): T[] => this.inOrderTraversal(this.root, []);

  public getPreOrderTraversal = (): T[] =>
    this.preOrderTraversal(this.root, []);

  public getPostOrderTraversal = (): T[] =>
    this.postOrderTraversal(this.root, []);

  public addValue = (
    val: T,
    currentNode: BinaryTreeNode<T> | null = this.root
  ): this => {
    if (currentNode === null) throw new Error('Something went wrong!');
    const direction = currentNode.getDirection(val);

    if (currentNode.hasNoLeftChildren() && direction === NodeDirection.Left) {
      currentNode.setLeft(new BinaryTreeNode(val));
      this.count++;
      return this;
    } else if (
      currentNode.hasNoRightChildren() &&
      direction === NodeDirection.Right
    ) {
      currentNode.setRight(new BinaryTreeNode(val));
      this.count++;
      return this;
    }

    if (direction === NodeDirection.Left) {
      return this.addValue(val, currentNode.getLeft());
    }

    return this.addValue(val, currentNode.getRight());
  };

  private getMinimum = (root: BinaryTreeNode<T>) => {
    while (root.getLeft()) {
      root = root.getLeft() as BinaryTreeNode<T>;
    }
    return root.getValue();
  };

  public removeValue = (
    val: T,
    currentNode: BinaryTreeNode<T> | null = this.root
  ): BinaryTreeNode<T> | null => {
    if (!currentNode) return null;

    // single node tree
    if (
      currentNode === this.root &&
      currentNode.getValue() === val &&
      this.count === 1
    ) {
      this.root = null;
      this.count = 0;
      return null;
    }

    const leftNode = currentNode.getLeft();
    const rightNode = currentNode.getRight();

    const direction = currentNode.getDirection(val);

    if (direction === NodeDirection.Left) {
      currentNode.setLeft(this.removeValue(val, leftNode));
      return currentNode;
    } else if (direction === NodeDirection.Right) {
      currentNode.setRight(this.removeValue(val, rightNode));
      return currentNode;
    } else {
      // leaf node
      if (currentNode.hasNoChildren()) {
        currentNode = null;
        this.count--;
        return currentNode;
      }
      if (currentNode.hasNoLeftChildren()) {
        currentNode.setValue(rightNode?.getValue() as T);
        currentNode.setLeft(rightNode?.getLeft() ?? null);
        currentNode.setRight(rightNode?.getRight() ?? null);
        this.count--;
        return currentNode;
      }
      if (currentNode.hasNoRightChildren()) {
        currentNode.setValue(leftNode?.getValue() as T);
        currentNode.setLeft(leftNode?.getLeft() ?? null);
        currentNode.setRight(leftNode?.getRight() ?? null);
        this.count--;
        return currentNode;
      }

      // Find new pivot
      let newCurrentNode = rightNode;
      while (!newCurrentNode?.hasNoLeftChildren()) {
        newCurrentNode = newCurrentNode?.getLeft() ?? null;
      }
      currentNode.setValue(newCurrentNode.getValue());
      currentNode.setRight(
        this.removeValue(newCurrentNode.getValue(), rightNode)
      );
      return currentNode;
    }
  };

  public hasValue = (
    val: T,
    currentNode: BinaryTreeNode<T> | null = this.root
  ): boolean => {
    if (currentNode === null) throw new Error('Ran into a null node');

    if (currentNode.getValue() === val) return true;

    const direction = currentNode.getDirection(val);

    if (currentNode.hasNoLeftChildren() && direction === NodeDirection.Left) {
      return false;
    } else if (
      currentNode.hasNoRightChildren() &&
      direction === NodeDirection.Right
    ) {
      return false;
    }

    if (direction === NodeDirection.Left) {
      return this.hasValue(val, currentNode.getLeft());
    }

    return this.hasValue(val, currentNode.getRight());
  };

  public rebalanceTree = (
    val: T,
    currentNode: BinaryTreeNode<T> | null = this.root
  ): this => {
    throw new Error('Not implemented yet');
  };

  private inOrderTraversal = (
    node: BinaryTreeNode<T> | null,
    nodes: T[] = []
  ) => {
    if (node === null) return nodes;

    this.inOrderTraversal(node.getLeft(), nodes);
    nodes.push(node.getValue());
    this.inOrderTraversal(node.getRight(), nodes);

    return nodes;
  };

  private preOrderTraversal = (
    node: BinaryTreeNode<T> | null,
    nodes: T[] = []
  ) => {
    if (node === null) return nodes;

    nodes.push(node.getValue());
    this.preOrderTraversal(node.getLeft(), nodes);
    this.preOrderTraversal(node.getRight(), nodes);

    return nodes;
  };

  private postOrderTraversal = (
    node: BinaryTreeNode<T> | null,
    nodes: T[] = []
  ) => {
    if (node === null) return nodes;

    this.postOrderTraversal(node.getLeft(), nodes);
    this.postOrderTraversal(node.getRight(), nodes);

    nodes.push(node.getValue());

    return nodes;
  };
}
