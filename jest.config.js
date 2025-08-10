module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-.*|@nozbe|react-redux|@reduxjs|redux)/)',
  ],
  moduleNameMapper: {
    '^react-native/Libraries/Animated/NativeAnimatedHelper$':
      '<rootDir>/__mocks__/NativeAnimatedHelper.js',
    '^react-native-quick-sqlite$':
      '<rootDir>/__mocks__/react-native-quick-sqlite.js',
    '^react-native-worklets$': '<rootDir>/__mocks__/react-native-worklets.js',
  },
};
