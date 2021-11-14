import {Link} from 'react-router-dom'
import Header from '../Header/index'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="homeContainer">
      <h1 className="homeHead">Find The Job that Fits Your Life</h1>
      <p className="homeDescription">
        Millions of people are searching for jobs,salary information,company
        reviews.Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs">
        <button type="button" className="homeBut">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
