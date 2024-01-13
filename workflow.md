# Workflow for DoodleCollab Development 🚀

This document outlines the workflow for contributing to the DoodleCollab project. Please follow the steps below to set up the development environment and contribute effectively.

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/WikiPortal/DoodleCollab
cd DoodleCollab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to run the app.

### 4. Make Changes

Make changes according to the tasks assigned to you. Follow the project structure and guidelines mentioned in [contributing.md](CONTRIBUTING.md) and [setup.md](rules/Setup.md).

### 5. Commit Changes

```bash
git pull
git add .
git commit -s -m "fix: Updated bla bla bla"
```

### 6. Create a Pull Request

Create a Pull Request on the `main` branch. Attach screenshots, a proper description, and the issue number in the Pull Request.

## Docker Setup Guidelines 🐳

### Prerequisite

- Install Node.js v20

### 1. Clone the Repository

```bash
git clone https://github.com/WikiPortal/DoodleCollab.git
cd DoodleCollab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to run the app.

## GitHub Workflow

### Continuous Integration (CI) Workflow

- The CI workflow is triggered on every push to the main branch.
- It checks code quality, runs tests, and deploys to staging.

```yaml
name: CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 14

      - name: Install dependencies
        run: npm install

      - name: Run linting and tests
        run: npm test

      - name: Deploy to staging
        run: |
          # Add deployment steps here
          echo "Deploying to staging..."
```

### Release Workflow

- The Release workflow is triggered on the creation of a new release.
- It builds and packages the application, creates a release artifact, and uploads it to GitHub releases.

```yaml
name: Release

on:
  release:
    types:
      - created

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 14

      - name: Install dependencies
        run: npm install

      - name: Build and package
        run: npm run build

      - name: Create release artifact
        run: tar -czvf release.tar.gz dist/

      - name: Upload artifact to GitHub releases
        uses: actions/upload-artifact@v2
        with:
          name: release-artifact
          path: release.tar.gz
```

## Contribution Guidelines 🔐

For detailed contribution guidelines, please refer to [contributing.md](CONTRIBUTING.md).

## Setup Guidelines 🚀

For detailed setup guidelines, please refer to [setup.md](rules/Setup.md).

Happy Contributing! 🎉

```