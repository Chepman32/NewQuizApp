import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-quick-sqlite', () => ({}));
jest.mock('react-native-iap', () => ({
  initConnection: jest.fn(),
  getProducts: jest.fn().mockResolvedValue([]),
  requestPurchase: jest.fn(),
  getAvailablePurchases: jest.fn().mockResolvedValue([]),
}));
jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));
jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  const Mock = (props) => React.createElement(View, props, props.children);
  return {
    __esModule: true,
    default: Mock,
    Svg: Mock,
    Circle: Mock,
    Path: Mock,
    G: Mock,
    Defs: Mock,
    LinearGradient: Mock,
    Stop: Mock,
  };
});
