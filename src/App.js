import React from 'react';
import FetchJobs from './Fetch-jobs';
import {Container} from 'react-bootstrap'

function App(){
  const {loading, jobs, error} = FetchJobs()


  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h2>Error....</h2>}
      <h1>{jobs.length}</h1>
    </Container>
    )
}
export default App;
