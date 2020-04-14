# Svelte Document Title

[![npm version](https://badge.fury.io/js/svelte-document-title.svg)](https://www.npmjs.com/package/svelte-document-title) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-document-title/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-document-title.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-document-title)

A `document.title` manager for Svelte.

## Installation

```
npm i svelte-document-title
// OR
yarn add svelte-document-title
```

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Demo

Local demo:

```
git clone https://github.com/andrelmlins/svelte-document-title.git
cd svelte-document-title
yarn install && yarn start
```

## Examples

An example of how to use the library:

```js
<script>
  import DocumentTitle from "svelte-document-title";
</script>

<DocumentTitle title="XXX">
  <p>Hello World!!!</p>
</DocumentTitle>
```

## Properties

Component props:

| Prop  | Type   | Description               |
| ----- | ------ | ------------------------- |
| title | string | Title showing in document |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-document-title.png)](https://nodei.co/npm/svelte-document-title/)

## License

Svelte Document Title is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-document-title/blob/master/LICENSE).
