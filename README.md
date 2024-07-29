# Getting Started with NotesReact

This project is a React application bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is designed to help you manage notes and uses Firebase for backend services.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 14.x.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js, or use [Yarn](https://yarnpkg.com/))

## Installation

Follow these steps to get your development environment set up:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/manuelklm/NotesReact.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd notesreact
   ```

3. **Install project dependencies:**

   ```bash
   npm install
   npm install firebase@latest firebase-tools
   ```

## Setup

To properly configure your environment, follow these steps:

1. **Initialize the firebase project:**

    In order to fully initialize the project as a firebase application, make sure you have already created a project in the [firebase console](https://console.firebase.google.com/). If this is the case, initialize the project.

    ```bash
    firebase init
    ```

2. **Create a .env file from the example:**

   The .env file contains sensitive information such as your Firebase configuration. It should not be tracked by version control, so you will need to create this file yourself.

   ```bash
   cp .env.example .env
   ```

3. **Edit the .env file:**

   Open the .env file in a text editor and replace the placeholder values with your actual Firebase configuration values. Your .env file should look like this:

        REACT_APP_FIREBASE_API_KEY=api-key
        REACT_APP_FIREBASE_AUTH_DOMAIN=auth-domain
        REACT_APP_FIREBASE_PROJECT_ID=project-id
        REACT_APP_FIREBASE_STORAGE_BUCKET=storage-bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=messaging-sender-id
        REACT_APP_FIREBASE_APP_ID=app-id
        REACT_APP_FIREBASE_MEASUREMENT_ID=measurement-id

   Ensure that all values are correctly filled to connect your application with Firebase services.

4. **Ensure .env is ignored by version control:**

   The .env file should be listed in your .gitignore file to prevent it from being tracked by Git. This is usually handled automatically, but verify it to avoid accidental commits.

## Available Scripts

In the project directory, you can run the following scripts:

### npm start

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### npm test

Launches the test runner in interactive watch mode.\
For more information on running tests, refer to the [Create React App testing documentation](https://facebook.github.io/create-react-app/docs/running-tests).

### npm run build

Builds the app for production to the build folder.\
It bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.\
Your app is ready for deployment.

For details on deployment, see the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

### npm run eject

**Note: this is a one-way operation. Once you eject, you can't go back!**

If you need to customize the build tool and configuration beyond what is provided by Create React App, you can eject. This command will remove the single build dependency from your project and copy all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) into your project.

You don't have to use eject. The default configuration is suitable for most small to medium deployments.

### firebase deploy

**Note: Make sure you build the project before deployment!**

Deploys your firebase application to the web. The analytics can be tracked via the firebase console.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

### Code Splitting

Learn more about [code splitting](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

Learn more about [analyzing the bundle size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Making a Progressive Web App

Learn more about [making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Advanced Configuration

Learn more about [advanced configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration).

### Deployment

Learn more about [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### npm run build fails to minify

If npm run build fails to minify, see the [troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

## Contributing

Contributions are welcome! Please open an [issue](https://github.com/manuelklm/notesreact/issues) or submit a pull request if you have improvements or fixes.

## Contact

- **Author:** Manuel KLM
- **GitHub:** [manuelklm](https://github.com/manuelklm)