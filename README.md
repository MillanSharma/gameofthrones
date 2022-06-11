# GOT APP
## About 
This is a responsive game of thrones app I created using ReactJS, css and html, which consumes the public API of ice and fire

## Available Scripts

In the project directory, you can clone the repo and run `npm install` to install all the dependencies and run `npm start` to get going locally

# Live demo
Open [https://gameofthrones-cyan.vercel.app/] to view in your browser

# Project Preview
![quiz](https://user-images.githubusercontent.com/23433891/173201296-06457708-680c-47ba-b33f-743d71fe9d1f.png)
![home](https://user-images.githubusercontent.com/23433891/173201208-d43dbeb5-1668-480a-9f36-1cc0b6d8d4e5.png)
![gallery](https://user-images.githubusercontent.com/23433891/173201334-fb98dbdb-9933-4a49-b929-c310d3dcde43.png)
![houses](https://user-images.githubusercontent.com/23433891/173201366-33274a27-f1a5-4ae7-8f40-a080075d72db.png)
![shop1](https://user-images.githubusercontent.com/23433891/173201502-ed45f624-3134-4fbf-b652-da8d3b927871.png)
![shop2](https://user-images.githubusercontent.com/23433891/173201508-43f3ca07-da23-41e7-a825-6f0a78e17ace.png)
![cart](https://user-images.githubusercontent.com/23433891/173201536-734d709a-f7f6-4ace-b89b-3b6d4998e3c8.png)

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

# Font Link 
  [//db.onlinewebfonts.com/t/97c4b25dc74e0ab045154e75a8fdd69d.eot?#iefix]
