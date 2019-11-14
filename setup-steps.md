Using NVM

Latest Node.js, React, Redux + deps:
* `$ nvm install node`
* `$ npm install -g create-react-app`
* `$ create-react-app pirum-react-test`
* `$ cd pirum-react-test/`
* `$ npm install typescript` Dependency of tsutils as part of create-react-app (Not using Typescript at this point)
* `$ npm install redux react-redux redux-thunk --save`


Linting:
* `$ npm install eslint`
* `$ ./node_modules/.bin/eslint --init`


```
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? N
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.14.3 eslint-config-airbnb@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^1.7.0
? Would you like to install them now with npm? Yes
```

N.B. The ESLint configuration process may change between versions

* Add rule to support JSX in ESLint

`eslint.rc`:
```
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
```

Unit testing:
* `$ npm install --save-dev jest enzyme enzyme-adapter-react-16 chai chai-enzyme sinon sinon-chai react-test-renderer redux-mock-store fetch-mock node-fetch json-loader`


Supporting React packages
* `$ npm install redux-logger prop-types`

Converting to Typescript

* `$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
* `$ npm install --save-dev @types/react-redux`