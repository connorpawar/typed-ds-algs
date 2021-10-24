import { BinarySearchTree } from '../src';

describe('Binary Search Tree', () => {
  it('can create root bst', () => {
    let tree = new BinarySearchTree(4);

    expect(tree.getInOrderTraversal()).toEqual([4]);
  });

  it('can create balanced bst', () => {
    let tree = new BinarySearchTree(4);
    tree.addValue(3);
    tree.addValue(5);

    expect(tree.getInOrderTraversal()).toEqual([3, 4, 5]);
  });

  it('can create unbalanced bst', () => {
    let tree = new BinarySearchTree(4);
    tree.addValue(3);
    tree.addValue(2);

    expect(tree.getInOrderTraversal()).toEqual([2, 3, 4]);
  });

  it('can remove leaf from bst', () => {
    let tree = new BinarySearchTree(4);
    tree.addValue(3);
    tree.addValue(5);

    expect(tree.getInOrderTraversal()).toEqual([3, 4, 5]);
    tree.removeValue(3);

    expect(tree.getInOrderTraversal()).toEqual([4, 5]);
  });

  it('can remove node from middle of bst', () => {
    let tree = new BinarySearchTree(4);
    tree.addValue(3);
    tree.addValue(2);

    expect(tree.getInOrderTraversal()).toEqual([2, 3, 4]);
    tree.removeValue(3);

    expect(tree.getInOrderTraversal()).toEqual([2, 4]);
  });

  it('can remove root node from simple 3 - level bst', () => {
    let tree = new BinarySearchTree(4);
    tree.addValue(3);
    tree.addValue(2);

    expect(tree.getInOrderTraversal()).toEqual([2, 3, 4]);
    tree.removeValue(4);

    expect(tree.getInOrderTraversal()).toEqual([2, 3]);
  });

  it('can recursively remove node from bst - left', () => {
    let tree = new BinarySearchTree(4);
    tree.addValue(3);
    tree.addValue(2);
    tree.addValue(1);
    tree.addValue(0);

    expect(tree.getInOrderTraversal()).toEqual([0, 1, 2, 3, 4]);
    tree.removeValue(1);

    expect(tree.getInOrderTraversal()).toEqual([0, 2, 3, 4]);
  });

  it('can recursively remove node from bst - right', () => {
    let tree = new BinarySearchTree(0);
    tree.addValue(1);
    tree.addValue(2);
    tree.addValue(3);
    tree.addValue(4);

    expect(tree.getInOrderTraversal()).toEqual([0, 1, 2, 3, 4]);
    tree.removeValue(4);

    expect(tree.getInOrderTraversal()).toEqual([0, 1, 2, 3]);
  });

  it('can recursively remove root node from complicated bst', () => {
    let tree = new BinarySearchTree(5);
    tree.addValue(1);
    tree.addValue(2);
    tree.addValue(3);
    tree.addValue(4);
    tree.addValue(6);
    tree.addValue(7);
    tree.addValue(0);

    tree.removeValue(5);

    expect(tree.getInOrderTraversal()).toEqual([0, 1, 2, 3, 4, 6, 7]);
  });

  it('can remove root node from bst with just root', () => {
    let tree = new BinarySearchTree(5);
    tree.removeValue(5);

    expect(tree.getInOrderTraversal()).toEqual([]);
  });

  it('can recursively remove root node from more complicated bst', () => {
    let tree = new BinarySearchTree(5);
    tree.addValue(1);
    tree.addValue(2);
    tree.addValue(3);
    tree.addValue(4);
    tree.addValue(6);
    tree.addValue(7);
    tree.addValue(0);
    tree.addValue(5.5);

    tree.removeValue(5);

    expect(tree.getInOrderTraversal()).toEqual([0, 1, 2, 3, 4, 5.5, 6, 7]);
  });

  it('can remove left sided node from complicated bst', () => {
    let tree = new BinarySearchTree(5);
    tree.addValue(1);
    tree.addValue(2);
    tree.addValue(3);
    tree.addValue(4);
    tree.addValue(6);
    tree.addValue(7);
    tree.addValue(0);

    tree.removeValue(1);

    expect(tree.getInOrderTraversal()).toEqual([0, 2, 3, 4, 5, 6, 7]);
  });

  it('can find value in bst', () => {
    let tree = new BinarySearchTree(5);
    tree.addValue(1);
    tree.addValue(2);
    tree.addValue(3);
    tree.addValue(4);
    tree.addValue(6);
    tree.addValue(7);
    tree.addValue(0);

    expect(tree.hasValue(1)).toBeTruthy();
  });

  it('can tell if value not in bst', () => {
    let tree = new BinarySearchTree(5);
    tree.addValue(1);
    tree.addValue(2);
    tree.addValue(3);
    tree.addValue(4);
    tree.addValue(6);
    tree.addValue(7);
    tree.addValue(0);

    expect(tree.hasValue(45)).toBeFalsy();
  });
});
