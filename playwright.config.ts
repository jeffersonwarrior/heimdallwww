import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'serve dist -l 8080',
    port: 8080,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:8080',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});