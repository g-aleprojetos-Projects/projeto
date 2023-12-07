/* eslint-env node */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
  },
  testMatch: [
    '<rootDir>/src/*/__test__/**/*.spec.{js,jsx,ts,tsx}',
    '<rootDir>/src/__test__/**/*.spec.{js,jsx,ts,tsx}',
  ],
};
