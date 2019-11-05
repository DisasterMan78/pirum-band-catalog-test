### Pirum React Front-End Interview Test

Please read the [pdf file](https://bitbucket.org/pirumcw/pirum-react-test/raw/68c89a51190a5636ccb71ad0cb2afae6511f0f35/Pirum%20React%20Front-end%20test.pdf)
for the full description with screenshots

#### Introduction

In this test your task is to display a list of music albums and songs, using React and Redux.

#### Specification

* Test data: in the data.json file we provide a static list of songs.
* Each song in the list has 3 attributes: band, album, song
* We expect to see a list of bands and albums with in an expandable/collapsible panel for the
  songs within the given album (see screenshots on page 2):
    * The expand/collapse button on the individual albums should expand/collapse the list of songs
    * The expand/collapse button on the main Albums title should expand/collapse all the albums
* The main technologies you are expected to use
    * Choice of ajax: to get the list of songs from the server
    * Redux: to store the data
    * React: to display the list
* The supported browsers are: IE11, Firefox, Chrome, the solution expected to work on these.
  (note: only IE11, no backward compatibility with earlier IE is expected)

The following files are included in the zip file:

|  File                            |  Description                                 |
|  ------------------------------  |  ------------------------------------------  |
|  public/data.json                |  Static dataset for the test in json format  |
|  public/index.html               |  Main html page                              |
|  src/                            |  Empty source directory                      |
|  package.json                    |  Basic template for npm / yarn|              |
|  yarn.lock                       |  Empty template for yarn                     |
|  Pirum React Front-end test.pdf  |  This file                                   |


#### Expected solution

1. The main purpose of this test is for you to show your ability to design and implement
   bespoke web sites using React/Redux.
   We expect a working implementation, not just a screen design.
2. Please use ajax for getting the list of songs from the server, do not just import them.
3. Please use Redux to store the data.
4. Please use React for displaying the list.
5. You're free to use any related library you choose, this test not just about implementation skills, but
   to see your design choices and your ability to create an integrated solution from multiple technologies.


#### Screenshots of example screens

![Screen Shot 2017-04-03 at 22.40.04.png](https://bitbucket.org/repo/5qxr5oo/images/37536905-Screen%20Shot%202017-04-03%20at%2022.40.04.png)

![Screen Shot 2017-04-03 at 22.40.50.png](https://bitbucket.org/repo/5qxr5oo/images/398891032-Screen%20Shot%202017-04-03%20at%2022.40.50.png)

*(Youâ€™re free to use any iconset you like, these are here just an example for expand/collapse icons)*


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
