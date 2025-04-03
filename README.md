# Intro Storybook Vue Template

This is a starter template to get up and running quickly with Vue and Storybook.

## Installation

Ensure you have [Yarn](https://yarnpkg.com/) installed before proceeding.

1. Clone the repository:

   ```sh
   git clone https://github.com/jfescobar18/quant-template.git
   cd quant-template
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

## Running Storybook

To start Storybook, run:

```sh
yarn storybook
```

This will launch Storybook on port `6006`.
Or press o + enter in terminal to open your browser

## Additional Scripts

- **Format Code:**

  ```sh
  yarn format
  ```

  Formats the code using Prettier.

- **Build Storybook:**

  ```sh
  yarn build-storybook
  ```

  Builds Storybook as static files.

## Code Formatting with Prettier

This project uses [Prettier](https://prettier.io/) for code formatting. The formatting style is configured to use 2 spaces for indentation.

### Setting Up Prettier

To ensure consistent formatting, make sure you have a `.prettierrc` file in the root of your project with the following content:

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

You can also format your code manually by running:

```sh
yarn format
```

## References

- [Storybook Documentation](https://storybook.js.org/docs/vue/get-started/introduction)
- [Vite Documentation](https://vitejs.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Chromatic](https://www.chromatic.com/)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)

