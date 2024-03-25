import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Login from './components/Login';

import Layout from './components/Layout'

function App() {
  return (
    <>
      <Layout />

      <GlobalStyles />
    </>
  );
}

/*
function App() {
  return (
    <>
      <Login />
    </>
  );
}
*/

export default App;
