# Graphael.io Node.js Client

> Note: Please keep in mind that the project is in an early stage of development
> and breaking changes might be introduced in future v0.x versions.

This repository hosts the source code for the official
[Graphael.io](https://graphael.io) API client for Node.js, with support for all
of its cloud and on-premise editions. The latest version of this library is used
by and developed along with [Graphael
Console](https://github.com/graphaelio/graphael-console-ce), a web application
providing a graphical user interface for the headless system.

## Getting Started

Install the package using your favourite package manager:

```sh
pnpm install @graphael.io/client
# or
npm install @graphael.io/client
# or
yarn install @graphael.io/client
```

Create a new instance of the `Client`:

```ts
import { Client } from "@graphael.io/client";

const { GRAPHAEL_CLIENT_ID, GRAPHAEL_CLIENT_SECRET } = process.env;

const client = new Client({
    id: GRAPHAEL_CLIENT_ID,
    secret: GRAPHAEL_CLIENT_SECRET,
});

const  { edition, version } = await client.getServerInfo();
console.log(`Using Graphael Server ${edition} edition version ${version}.`);
```

Running the script above should print something similar to the following:

```
Using Graphael Server cloud edition version 0.1.0-rc.3.
```

## Supported Node.js Versions

Latest two LTS releases will be supported officially.

## TypeScript Type Definitions

Type definitions are bundled with the Node.js client package and do not require
a separate installation.
