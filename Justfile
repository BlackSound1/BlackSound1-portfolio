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

# Unit tests
[group('Testing')]
[arg('watch', long, short='w', value='--watch')]
[arg('coverage', long='cov', short='c', value='--coverage')]
jest watch='' coverage='':
    @pnpm run jest {{watch}} {{coverage}}

# End-to-end tests
[group("Testing")]
[arg('report', long, short='r', value=':report')]
e2e report='':
    @pnpm run e2e{{report}}

# All forms of test, making sure not to short-circuit if an earlier kind of test fails
[group("Testing")]
test:
    @pnpm run test ; pnpm run e2e
