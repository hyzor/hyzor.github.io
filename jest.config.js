module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/enzyme.setup.js'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    'react-spring': '<rootDir>/node_modules/react-spring/web.cjs',
    'react-spring/renderprops': '<rootDir>/node_modules/react-spring/renderprops.cjs',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '.+\\.json': '<rootDir>/jest.jsonTransform.js',
    '\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(css|scss|sass)$)': 'identity-obj-proxy',
  },
};
