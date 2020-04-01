# eslint-config-react

This package provides react `.eslintrc` as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires:
- `eslint`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@jeansarlon/eslint-config-react@latest" peerDependencies
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @jeansarlon/eslint-config-react eslint@^
    #.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-chai-react@^#.#.#
  ```

2. Add `"extends": "@jeansarlon/eslint-config-react"` to your project's `.eslintrc`.