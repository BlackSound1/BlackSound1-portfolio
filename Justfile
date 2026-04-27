# Format 1 or more files, or by default, everything
[group('Formatting')]
format +file='.':
    @echo "Formatting {{ file }}..."
    @pnpm prettier -w --config .prettierrc {{ file }}

# Lint
[group('Formatting')]
lint:
    @echo "Linting..."
    @pnpm run lint

# Building
[group('Running')]
[arg('type', long, short='t', pattern='dev|build|start')]
run type='dev':
    @echo "Running {{ type }}..."
    @pnpm run {{ type }}

# Help
[group('Utilities')]
help:
    @echo "Hello, and welcome to my portfolio site!"

# Version
[group('Utilities')]
version:
    @echo "$(cat VERSION.txt)"

# Testing
[group('Testing')]
[arg('watch', long, short='w', value=':watch')]
test watch='':
    @pnpm test{{watch}}
