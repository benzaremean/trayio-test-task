# Tray.io test task

So for the task I decided to use [webdriverio version 7](https://webdriver.io/)

## Structure

```
├── README.md
├── features
│   ├── pages
│   │   ├── cart.page.ts
│   │   ├── components
│   │   │   ├── cartItem.component.ts
│   │   │   ├── inventoryItem.component.ts
│   │   │   └── primaryHeader.component.ts
│   │   ├── inventory.page.ts
│   │   └── login.page.ts
│   ├── step-definitions
│   │   └── steps.ts
│   └── task.feature
├── helpers
│   └── index.ts
├── package-lock.json
├── package.json
├── tsconfig.json
└── wdio.conf.ts
```

## Pre-requisites

```
Node JS 14
Java 11
Chrome browser
```

## To run the tests

```shell
npm install
npm test
```

## Approach

As mentioned earlier I am using webdriverio v7 with the cucumber framework. The configuration can be found in the `./wdio.conf.ts` file

I used typescript as you mentioned you use this and I wanted to demonstrate my experience

Feature file and step definitions can be found in [features](features)

Page and component objects are available in [features/pages](features/pages)

Helpers in [helpers/index.ts](helpers/index.ts)
