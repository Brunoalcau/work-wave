
# Project Work Wave

A batch task dashboard project.

## Installation

```bash
npm install
```
## Development
To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server.

## Build
To build your project for production, run:
```Bash
npm run build
```
The build artifacts will be located in the dist directory.

## Linting
To lint your TypeScript and TypeScript React files, run:
```
bash
npm run lint
```

## Testing
To run unit tests, run:
```bash
npm test
```
This will run Jest tests for your components.


## End-to-End Testing
To run end-to-end tests, you can use Cypress. First, ensure your development server is running, then:
```bash
  npm run cy:open-e2e
```

This will open Cypress for end-to-end testing in Chrome.
## Preview
To preview your production build locally, run:
```bash
npm run preview
```
This will serve your production build locally for previewing.

## Continuous Integration (CI) Scripts
For CI environments, you can use the following scripts:

- Run End-to-End Tests in CI:
```bash
npm run cy:run-e2e
```

- Run Unit Tests in CI:
```bash
npm run cy:run-unit
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


