module.exports = {
  '**/*.{ts,json}': (filenames) => {
    return [`eslint --fix ${filenames.join(' ')}`, `prettier --write ${filenames.join(' ')}`];
  },
};
