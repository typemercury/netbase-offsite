import React  from 'react';
import { useGetTermsQuery } from './services/term/termAPI'


function App(): JSX.Element {
  // fetch and store data
  const { data, error, isLoading } = useGetTermsQuery()
  return (
    <div className="App">
    </div>
  );
}

export default App;
