# Chat Bot

This demo is intended to evaluate my skills in frontend development,
particularly in creating user interfaces, implementing responsive design, and handling basic interactions.

- **PROJECT_STRUCTURE.txt**: A text file outlining the structure of the project.
- **README.md**: The markdown file providing an overview and documentation for the project.
- **app**: The main application directory. It contains several subdirectories, each representing a different feature of the application:
  - **log-in**: Contains the components and page layout for the login feature.
  - **chat**: Contains the components and page layout for the chat feature.
  - **reset-password**: Contains the components and page layout for the password reset feature.
  - **sign-up**: Contains the components and page layout for the sign-up feature.
- **components**: This directory contains reusable components that are used across the application.
- **hoc**: This directory contains higher-order components (HOCs), which are functions that take a component and return a new component with additional properties or behaviors.
- **lib**: This directory contains utility functions and other shared code.
- **public**: This directory contains static files like images and icons that are served directly by the server.
- **state**: This directory contains code related to state management in the application.
- **next-env.d.ts**, **next.config.mjs**, **package-lock.json**, **package.json**, **postcss.config.js**, **tailwind.config.ts**, **tsconfig.json**: These are configuration files for various tools and libraries used in the project, such as Next.js, TypeScript, npm, PostCSS, and Tailwind CSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js (Preferably the latest stable version)

You can download Node.js from [here](https://nodejs.org/).

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/millidavitti/chat-bot-ui.git
```

Navigate into the project directory:

```bash
cd chat-bot-ui
```

Install the project dependencies using npm:

```bash
npm install
```

To start the development server, run:

```bash
npm run dev
```

This command will start the server, and you should be able to access the application on `http://localhost:3000` or another port if specified.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
