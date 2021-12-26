import React  from 'react';
import { useGetTermsQuery } from './services/term/termAPI'
import TermCard from './features/termCard/TermCard';


function App(): JSX.Element {
  // fetch and store data
  const { data, error, isLoading } = useGetTermsQuery()
  return (
    <div className="flex flex-col items-center justify-center">
      <TermCard></TermCard>
    </div>
  );
}

export default App;
