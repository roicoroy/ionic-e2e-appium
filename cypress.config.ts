import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'n82zrv',
  e2e: {
    'baseUrl': 'http://localhost:8100'
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  },
  watchForFileChanges: true,
  viewportHeight:812,
  viewportWidth:375
})