/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { resolve } = require('path')
const root = resolve(__dirname,  '..')
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {
    ...rootConfig,
    ... {
        rootDir: root,
        displayName: 'e2e-tests',
        setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
        testMatch: ['<rootDir>/test/**/*.test.ts']
    }
}