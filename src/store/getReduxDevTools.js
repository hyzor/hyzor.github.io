/* eslint-disable no-underscore-dangle */
export default function getReduxDevTools() {
  const devtoolsEnabled =
    process.env.NODE_ENV === 'development' &&
    typeof global.__REDUX_DEVTOOLS_EXTENSION__ === 'function';
  const devTools = devtoolsEnabled ? global.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;
  return devTools;
}
