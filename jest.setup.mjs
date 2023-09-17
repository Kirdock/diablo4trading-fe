import '@testing-library/jest-dom';

jest.mock('@config', ()=> ({
    API_ENDPOINT: 'mocked endpoint'
}));

jest.mock('@lingui/macro', () => ({
    t: () => () => 'mocked text',
}));
