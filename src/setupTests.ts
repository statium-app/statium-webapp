// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Add dummy environment variables values since CI will fail otherwise:
process.env.REACT_APP_FOOTBALL_DATA_API_AUTH_TOKEN = 'dummy';
