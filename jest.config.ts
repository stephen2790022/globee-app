import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: {
                  env: {
                    VITE_API_URL: "http://localhost:3000",
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

export default config;
