import React  from 'react';
import { useGetTermsQuery } from './services/term/termAPI'
import Term from './features/Term'


function App(): JSX.Element {
  // fetch and store data
  const { data, error, isLoading } = useGetTermsQuery()
  return (
    <div className="w-screen h-screen ">
      <Term/> 
    </div>
  );
}

export default App;
