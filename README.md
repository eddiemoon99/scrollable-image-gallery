# Scrollable Picture Gallery

This repo contains the source code for a scrollabe picture gallery web application. 
The project was created using mainly React.js, with Expo for server deployment.

* React.js
* Expo

## Table of Contents
* [Development Setup](#development-setup)
* [Project Structure](#project-structure)

## Development Setup
1. Install the Expo CLI by following the instructions: [here](https://docs.expo.dev/get-started/installation/)
(Only step 1)
2. Clone this repository onto your local machine.
3. Open up the project using your preferred code editor.
4. Install the required node modules for this project.
```
yarn install

```
5. Run the following command inside the main folder containing all of the source code.

```
expo start
```
6. Copy the URL given in the command line following the message "Developer tools running on `url` ".
7. Paste the url into your web browser on the computer and then click on "run in web browser" on the left panel.
8. This should open up the web application.

## Project Structure
```
.
├── .expo
├── .expo-shared
├── assets
├── components
│    ├── gallery.js
│    └── image.js
├── node_modules
├── styles
│    ├── galleryStyle.js
│    └── imageStyle.js
├── utils
│    ├── reorderArray.js
│    └── useMediaQuery.js
├── App.js
└── package.json

```

| File Directory          | Description                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------|
| .expo                   | Automatically generated when following the expo initialization                                 |
| .expo-shared            | Automatically generated when following the expo initialization                                 |
| assets                  | Automatically generated when following the expo initialization                                 |
| components              | The React child components utilized in the project                                             |
| /components/gallery.js  | The Gallery child component responsible for holding the images and fetching the data           |
| /components/image.js    | The Image child component responsible for the actual image render                              |
| node_modules            | Automatically generated when doing `npm install` to install node packages used in this project |
| styles                  | The Styles for all of the project                                                              |
| /styles/galleryStyle.js | The Styles for the Gallery component                                                           |
| /styles/imageStyle.js   | The Styles for the Image component                                                             |
| utils                   | Helper functions utilized in the project                                                       |
| /utils/reorderArray.js  | A function that recursively reorders elements in an array                                      |
| /utils/useMediaQuery.js | A function that allows the use of media queries for responsive styling                         |
| App.js                  | The file containing the main component of the project 'App'.                                   |
| package.json            | Holds project metadata and used for managing the project's dependencies                        |

