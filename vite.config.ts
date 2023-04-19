import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    environment: 'node',
    testTimeout: 10_000,
    teardownTimeout: 3_000,

    exclude: [...configDefaults.exclude, '**/dist/**', '**/.build/**', 'web/**'],

    // parallelism:
    // minThreads: 1,
    // maxThreads: 1,
    // maxConcurrency: 1,
    threads: false
  },
  plugins: [
    tsconfigPaths({
      loose: true
    })
  ]
});
