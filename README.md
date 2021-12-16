# Typescript Tests

[![App CI](https://github.com/curtistimson/typescript-tests/actions/workflows/app-ci.yml/badge.svg)](https://github.com/curtistimson/typescript-tests/actions/workflows/app-ci.yml)

Simple typescript app with failing tests to fix

## Getting Started

 - Install [VS Code](https://code.visualstudio.com/)
 - Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
 - Open [VS Code Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
 - Clone this Repository to a particular folder
 - Go to the root of that folder (`cd typescript-tests`)
 - Install node modules: `npm install`
 - Run tests: `npm test`

## Unskipping Tests

To unskip a test, remove `.skip` from the `describe`:

```
describe.skip('test..') becomes describe('test..') 
```

## Tests

 - sum
 - multiply
 - getTotalPrice
 - orderList

