# GOT APP
## About 
This is a responsive game of thrones app I created using ReactJS, css and html, which consumes the public API of ice and fire

## Available Scripts

In the project directory, you can clone the repo and run `npm install` to install all the dependencies and run `npm start` to get going locally

# Live demo
Open [https://gameofthrones-cyan.vercel.app/] to view in your browser

# Project Preview




# Libraries used
- axios
- redux
- react-collapsed
- react-loader-spinner
- react-confetti
- material-UI

# Project Structure
1. The public folder contains the `index.html` page
2. The `src` folder contains three folders `src/assets` for storing local files used in project. `src/components` which contain all the components used in the project and `src/slices` contains files for global state management using redux
3. All the javascript files inside `src/components` have their corresponding css files with the same name but .css extension
4. There are 9 components majorly used in the app.

# Features 
1. Before getting into the home page there is quick quiz related to the show. It has just one question opon answering it correctly you can enter the home page.
2. The navigation bar shows all the functionality associated with the app. There is Shop, Gallery, Houses and a cart symbol on other end.
3. The Shop page allows you to customize a t-shirt design, where you can select one house logo from the given list followed by which you have a text box where you can enter what text you want to be written in your t-shirt and add to cart. 
4. Houses page allows you to see few of the houses from the show. This page is horizontal scroll on large screen devices and vertical on small screen devices
5. In Gallery page you can view almost all the character from the show. Pagination is used to avoid infinite scrolling. The character card contains details such as name, gender and how many books the character has been a part of etc.
6. The cart page contains, all the t-shirt you designed earlier and added to cart. You can also go back and select more items or remove the items from the cart and so on. 


Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
