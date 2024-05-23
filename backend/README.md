# Running a Node.js Express Application

Welcome to your Node.js Express application! This guide will help you run the application for the first time. Even if you're new to Node.js and Express, these steps will get you up and running quickly.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js**: Node.js is a JavaScript runtime. It comes with npm (Node Package Manager), which you'll use to install and manage software packages.

### Check Installation

To check if you have Node.js installed, open your terminal (Command Prompt, PowerShell, or Terminal on macOS/Linux) and run:

```sh
node -v
```

You should see a version number for Node.js. If you don't have it installed, download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

## Running the Application

Follow these steps to run the Express application:

1. Open your terminal.
2. Navigate to the directory where your Express application is located.
3. Install the project dependencies by running:

```sh
npm install
```

This command will read the `package.json` file and install all the necessary packages into a folder called `node_modules`.

4. Once the dependencies are installed, start the Express server by running:

```sh
npm start
```

This command will start the Express server. By default, it should be running at [http://localhost:3000](http://localhost:3000).

5. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view your Express application.

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

## Troubleshooting

If you encounter any issues, here are a few tips:

- **Error messages**: Read the error messages in your terminal. They often provide clues about what's wrong and how to fix it.
- **Restart the server**: Sometimes, simply stopping the server (Ctrl+C in the terminal) and starting it again (`npm start`) can resolve issues.
- **Google it**: If you're stuck, try searching for the error message online. Chances are, someone else has encountered the same issue.

Happy coding!
