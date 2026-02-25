const path = require('path');

// Resolve the extensionless "Game v1" file so webpack can import it
// as a JSX module from src/pages/index.jsx via the @game alias.
const gameFilePath = path.resolve(__dirname, 'Game v1');

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          // Match the exact "Game v1" file path (no extension) and
          // apply Gatsby's built-in JS/Babel loader so JSX is transpiled.
          test: (resourcePath) => resourcePath === gameFilePath,
          use: [loaders.js()],
        },
      ],
    },
    resolve: {
      alias: {
        // Allow importing the game via "@game" instead of a relative path
        // with spaces, e.g. import SELAdventure from '@game'
        '@game': gameFilePath,
      },
    },
  });
};
