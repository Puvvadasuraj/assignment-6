import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header/index'
import JobProfile from '../JobProfile/index'
import JobItem from '../JobItem/index'
import FilterIcons from '../FilterItem'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Jobs extends Component {
  state = {
    apiStatus: apiConstants.initial,
    jobsData: [],
    searchInput: '',
    employmentType: '',
    salary: '',
  }

  componentDidMount() {
    this.getJobDetails()
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.getJobDetails()
    }
  }

  changeSalary = event => {
    this.setState({salary: event.target.value}, this.getJobDetails())
  }

  getJobDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {searchInput, salary, employmentType} = this.state
    console.log(searchInput)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${salary}&search=${searchInput}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.jobs.map(item => ({
        companyLogoUrl: item.company_logo_url,
        employmentType: item.employment_type,
        id: item.id,
        jobDescription: item.job_description,
        location: item.location,
        packagePerAnnum: item.package_per_annum,
        rating: item.rating,
        title: item.title,
      }))
      this.setState({apiStatus: apiConstants.success, jobsData: fetchedData})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onSuccess = () => {
    const {jobsData} = this.state
    if (jobsData.length > 0) {
      return (
        <ul className="ulContainer">
          {jobsData.map(jobItem => (
            <JobItem jobDetails={jobItem} key={jobItem.id} />
          ))}
        </ul>
      )
    }
    return (
      <div className="noJobsContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
        />
        <h1>No Jobs Found</h1>
        <p className="noJobsDescription">
          We could not find jobs.Try other Filters.
        </p>
      </div>
    )
  }

  onLoading = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  onFailure = () => {
    const onRetry = () => {
      this.getJobDetails()
    }
    return (
      <div className="failureContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for.</p>
        <button type="button" onClick={onRetry} className="onRetryBut">
          Retry
        </button>
      </div>
    )
  }

  renderCase = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.onSuccess()
      case apiConstants.loading:
        return this.onLoading()
      case apiConstants.failure:
        return this.onFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="jobsContainer">
          <div className="profileFilter">
            <JobProfile />
            <FilterIcons />
          </div>
          <div className="jobItemContainer">
            <div className="searchBox">
              <input
                type="search"
                className="searchInput"
                placeholder="Search"
                onChange={this.changeSearchInput}
                onKeyDown={this.onEnter}
                salaryChange={this.changeSalary}
              />
              <div className="searchElement">
                <BiSearch />
              </div>
            </div>
            {this.renderCase()}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
