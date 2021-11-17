# DataStructures in TypeScript!

[![npm version](https://badge.fury.io/js/typed-ds-algs.svg)](https://badge.fury.io/js/typed-ds-algs)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Typed-Ds-Algs

> Data Structures in TypeScript!

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Prerequisites](#prerequisites)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Data Structures](#data-structures)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Binary Search Tree](#binarysearchtree)
  - [BlockChain](#blockchain)
- [Contributing](#contributing)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install -S typed-ds-algs
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev typed-ds-algs
```

## Data Structures

### Stack

| Method   | Parameters | Return Type |
| -------- | ---------- | ----------- |
| isEmpty  | N/A        | boolean     |
| isFull   | N/A        | boolean     |
| push     | item : T   | void        |
| pop      | N/A        | T           |
| peek     | N/A        | T           |
| getStack | N/A        | T[]         |

```ts
const stack = new Stack<number>();
stack.push(3);
stack.push(2);
stack.pop();

const top = stack.peek();
```

### Queue

| Method   | Parameters | Return Type |
| -------- | ---------- | ----------- |
| isEmpty  | N/A        | boolean     |
| isFull   | N/A        | boolean     |
| enqueue  | item : T   | void        |
| dequeue  | N/A        | T           |
| peek     | N/A        | T           |
| getQueue | N/A        | T[]         |

Example:

```ts
const queue = new Queue<number>();
queue.enqueue(3);
queue.enqueue(2);
queue.dequeue();

const front = queue.peek();
```

### BinarySearchTree

| Type   | Default value |
| ------ | ------------- |
| string | ''            |

Example:

```ts

```

### BlockChain

| Type   | Default value |
| ------ | ------------- |
| string | ''            |

Example:

```ts

```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the process for submitting pull requests.

1.  Fork it!
2.  Create your feature branch: `git checkout -b feature/my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request!

## Built With

- TypeScript
- Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Connor Pawar** - _Initial work_ - [connorpawar](https://github.com/connorpawar)

See the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2021) © Connor Pawar
