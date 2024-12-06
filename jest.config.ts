import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Simulates a browser-like environment
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy", // Mocks CSS modules
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Jest setup file
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transforms TypeScript files
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore build artifacts
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Recognized file extensions
};

export default config;
