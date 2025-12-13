# Personal Website Portfolio

This is my personal website portfolio -- including my resume, project highlights, work samples, technical reference documentation, and the occasional blog post. It is built with [Docusaurus](https://https://docusaurus.io/).

## Developer Guide

- **Package Manager**: [`pnpm`](https://pnpm.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **Code Formatter**: [Prettier](https://prettier.io/)
- **Pre-Commit Hooks**: [prek](https://prek.j178.dev/)

```bash
cd website
# Install pnpm with corepack and run pnpm install
npm run init

# Start a local instance
pnpm run start
```

### Key Development Principles

<!-- add additional principles (keep minimal) -->

- Maintain 100% passing tests, at least 80% test coverage, formatting, and linting before opening a pull request.
- Update docstrings alongside code changes to keep the generated reference accurate.

## Contributing

Contributions are welcome -- where appropriate for correcting things like spelling errors, bugs, or suboptimal code/configurations. To get started:

1. Fork the repository and create a new branch.
2. Install development dependencies (see the [developer guide](#developer-guide)).
3. Add or update tests together with your change.
4. Run the full test, linting, and formatting suite locally.
5. Submit a pull request describing your changes and referencing any relevant issues.

For major changes, open an issue first to discuss your proposal.

## Contact

Questions or issues regarding this project's source code or my documentation? Please open an issue on the repository's issue tracker.

Looking to work with me? Visit [my online portfolio](https://work.youngweb.site/) for contact information.
