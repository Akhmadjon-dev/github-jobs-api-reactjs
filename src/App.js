import React, {useState} from 'react';
import FetchJobs from './Fetch-jobs';
import {Container} from 'react-bootstrap'
import Job from './job'
import Pagination from './JobPagination'
import SearchForm from './searchForm'
function App(){

  const [params, setParams ] = useState({})
  const [page, setPage] = useState(1)

  const {loading, jobs, error} = FetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const val = e.target.value
    setPage(1)
    setParams(prevParams => {
      return {...prevParams, [param] : val}
    })

  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <Pagination page={page} setPage={setPage} hasNextPage={true} />
      {loading && <h1>Loading...</h1>}
      {error && <h2>Error....</h2>}
      
      {
        jobs.map(job => {
          return <Job key={job.id} job={job} />
        })
      }
      <Pagination page={page} setPage={setPage} hasNextPage={true} />
    </Container>
    )
}
export default App;
