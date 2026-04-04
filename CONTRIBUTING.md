# Contributing to Afritradehub

Thank you for your interest in contributing to Afritradehub! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the developer
- Help others learn and grow

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](../../issues)
2. If not, create a new issue using the **Bug Report** template
3. Include:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, versions)

### Suggesting Features

1. Check existing feature requests in [Issues](../../issues)
2. Create a new issue using the **Feature Request** template
3. Describe:
   - The problem it solves
   - Proposed solution
   - Alternative solutions considered
   - Use cases and motivation

### Submitting Code

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/afritradehub.git
   cd afritradehub
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes:
   git checkout -b fix/bug-description
   ```

4. **Make your changes**
   - Follow the existing code style
   - Write clear commit messages
   - Add tests for new functionality
   - Update documentation

5. **Test your changes**
   ```bash
   # Frontend
   cd frontend
   npm install
   npm run dev      # Test locally
   npm run build    # Test production build
   npm run lint     # Check code style

   # Backend (if applicable)
   cd backend
   python manage.py test
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "type(scope): description"
   # Examples:
   # feat(EditToolbar): add color picker
   # fix(templates): resolve image loading issue
   # docs(deployment): update Netlify instructions
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**
   - Go to [Pull Requests](../../pulls)
   - Click "New Pull Request"
   - Select your branch
   - Use the PR template
   - Describe your changes clearly

## Commit Message Format

We use conventional commits for clear history:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process, dependencies, etc.

### Examples

```
feat(EditToolbar): add typography customization
fix(templates): resolve missing image paths
docs(deployment): add Netlify setup guide
chore(dependencies): update React to 18.3.1
```

## Code Style

### Frontend (JavaScript/TypeScript)

- Use **Prettier** for formatting (configured in workspace)
- Use **ESLint** for linting
- Components in **PascalCase** (e.g., `EditToolbar.tsx`)
- Functions/variables in **camelCase** (e.g., `handleClick`)
- Constants in **UPPER_SNAKE_CASE** (e.g., `MAX_ITEMS`)

### Backend (Python)

- Follow **PEP 8** standards
- Use meaningful variable names
- Add docstrings to functions and classes
- Write tests for new functionality

## Development Setup

### Frontend

```bash
cd frontend
npm install
npm run dev     # http://localhost:3000
```

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
python manage.py runserver  # http://localhost:8000
```

### With Docker

```bash
docker-compose up -d
```

## Testing

### Frontend

```bash
cd frontend
npm test        # Run tests
npm run test:watch  # Watch mode
npm run coverage    # Coverage report
```

### Backend

```bash
cd backend
python manage.py test
```

## Documentation

When submitting code changes:

1. **Update relevant docs** in the `docs/` folder
2. **Update README** if you add new features
3. **Add comments** for complex logic
4. **Update CHANGELOG** (if applicable)

## Review Process

1. **Automated Checks**
   - GitHub Actions will run tests and linting
   - All checks must pass

2. **Code Review**
   - At least one maintainer reviews the PR
   - Address feedback and re-request review
   - Once approved, your changes will be merged

3. **Deployment**
   - After merging to `main`, changes auto-deploy to Netlify
   - Monitor the deployment in the Netlify dashboard

## Getting Help

- **Documentation**: Check [docs/](../../docs/) folder
- **Issues**: Search existing issues or create a new one
- **Discussions**: Use GitHub Discussions for questions

## Recognition

Contributors will be recognized in:
- The commit history
- GitHub contributors page
- Release notes (for significant contributions)

Thank you for making Afritradehub better! 🎉

---

**Last Updated**: 2024
