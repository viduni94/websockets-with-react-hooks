<div align="center">
  <h1>
    React Websocket App with Hooks
  </h1>
</div>

Client application which uses React Hooks to implement a websocket connection to the server.

[Node >= 10.16 and npm >= 5.6](https://nodejs.org/en/) are required on your environment, as specified by [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

&nbsp;
## How to use

1. `git@github.com:viduni94/websockets-with-react-hooks.git <YOUR_PROJECT_NAME>`
2. `cd <YOUR_PROJECT_NAME>/client`
3. `yarn` or `npm i`
4. `yarn start` or `npm start`

&nbsp;
## Scripts

**Note: `npm` or `npm run` can be used instead of `yarn` if preferred**
&nbsp;

- **`yarn start`** - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

- **`yarn test`** - Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **`yarn test:no-watch`** - Runs tests without watch mode. Is used for the pre-push git hook, and can be used with continuous integration.

- **`yarn test:coverage`** - Runs tests without watch mode and outputs coverage reports to `/coverage`.

- **`yarn build`** - Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

- **`yarn eject`** - Ejects the create-react-app configurations (webpack, Babel, ESLint, etc.) into your project as dependencies in `package.json`. Should be used if the provided configurations aren't working for you.

- **`yarn lint`** - Runs eslint, stylelint and prettier checks, but **does not** fix any issues.

- **`yarn lint:fix`** - Runs eslint, stylelint and prettier checks, and fixes possible issues. Some issues might still require manual fixing.

The following scripts are also included if the linters need to be used separately.

**`eslint, eslint:fix, stylelint, stylelint:fix, prettier, prettier:fix`**

&nbsp;
## License

This project is licensed under the MIT license, Copyright (c) 2021 Viduni Wickramarachchi. For more information check the `LICENSE` file.
