// import { compilerOptions } from './tsconfig.base.json';
// import {pathsToModuleNameMapper} from "ts-jest";


/** @type import('jest').Config */
const config = {
    rootDir: './',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ["<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",],
    transform: {
        '^.+\\.(ts|tsx|js|mjs)': [
            'ts-jest/legacy',
            {
                useESM: true,
                tsconfig: './tsconfig.base.json',
            },
        ],
        "^.+\\.svg$": "<rootDir>/mediaTransform.js",
        "^.+\\.webp$": "<rootDir>/mediaTransform.js",
    },
    moduleNameMapper: {
        "^@assets/(.*)$": [
            "<rootDir>/src/assets/$1"
        ],
        "^@config$": [
            "<rootDir>/src/config.ts"
        ],
        "^@modules/(.*)$": [
            "<rootDir>/src/modules/$1"
        ],
        '^.+\\.(css|less)$': '<rootDir>/CSSStub.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
}

export default config;
