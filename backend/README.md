# Running a Node.js Express Application

Welcome to your new Node.js Express application! This guide will help you get up and running with your Express app, even if you're new to software engineering. Follow these simple steps:

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js**: Node.js is a JavaScript runtime. It comes with npm (Node Package Manager), which you'll use to install and manage software packages.
- **Express Generator**: Express Generator is a tool to quickly scaffold an Express application. Install it globally using npm:

```sh
npm install -g express-generator
```

### Check Installation

To check if you have Node.js and Express Generator installed, open your terminal (Command Prompt, PowerShell, or Terminal on macOS/Linux) and run:

```sh
node -v
express --version
```

You should see version numbers for both Node.js and Express Generator. If you don't have them installed, download and install Node.js from [https://nodejs.org/](https://nodejs.org/) and install Express Generator as shown above.

## Generating the Application

First, you'll need to generate your Express application using Express Generator.

1. Open your terminal.
2. Navigate to the directory where you want to create your project.
3. Run the following command to generate a new Express application:

```sh
express --view=pug my-express-app
```

Replace `my-express-app` with the name of your project.

4. Navigate into your project directory:

```sh
cd my-express-app
```

## Installing Dependencies

An Express application requires various packages to run. These packages are listed in a file called `package.json`. To install these dependencies, run the following command in your project directory:

```sh
npm install
```

This command reads the `package.json` file and installs all the necessary packages into a folder called `node_modules`.

## Running the Application

Once the dependencies are installed, you can start the Express application. In your terminal, run:

```sh
npm start
```

This command starts the Express server. By default, it should be running at [http://localhost:3000](http://localhost:3000).

You should see your Express application running in the browser. Now, you can start building your application!

## Common Commands

Here are a few common npm commands you might find useful:

- **Start the development server**:

  ```sh
  npm start
  ```

- **Run tests**:

  ```sh
  npm test
  ```

- **Lint and fix code** (if you have linting set up):

  ```sh
  npm run lint
  ```

## Troubleshooting

If you encounter any issues, here are a few tips:

- **Error messages**: Read the error messages in your terminal. They often provide clues about what's wrong and how to fix it.
- **Restart the server**: Sometimes, simply stopping the server (Ctrl+C in the terminal) and starting it again (`npm start`) can resolve issues.
- **Google it**: If you're stuck, try searching for the error message online. Chances are, someone else has encountered the same issue.

## Additional Resources

Here are some additional resources to help you learn more about Express and Node.js development:

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

Happy coding!
