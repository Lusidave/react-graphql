import React from 'react';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Launches from './Launches'
import { render } from '@testing-library/react';




const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <Launches />
    </ApolloProvider>
  );
}
render(<App />, document.getElementById('root'));

export default App;
