import {Component} from 'react'
import {RiStarSFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiLocationMarker} from 'react-icons/hi'
import {FiExternalLink} from 'react-icons/fi'
import {GiSuitcase} from 'react-icons/gi'
import Header from '../Header/index'
import SkillItem from '../SkillITem/index'
import SimilarItem from '../SimilarJobs/index'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}
class JobDescription extends Component {
  state = {
    apiStatus: apiConstants.initial,
    details: [],
    similarJobs: [],
    skills: [],
    DetailsCompany: [],
  }

  componentDidMount() {
    this.description()
  }

  description = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const jobDetails = {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        skills: data.job_details.skills,
        location: data.job_details.location,
        rating: data.job_details.rating,
        packagePerAnnum: data.job_details.package_per_annum,
        lifeAtCompany: data.job_details.life_at_company,
        title: data.job_details.title,
      }
      console.log(data)
      const skillsData = data.job_details.skills.map(skillsItem => ({
        name: skillsItem.name,
        imageUrl: skillsItem.image_url,
      }))
      const companyDetails = {
        description: data.job_details.life_at_company.description,
        imageUrl: data.job_details.life_at_company.image_url,
      }
      console.log(companyDetails)
      const similarItem = data.similar_jobs.map(similarJob => ({
        companyLogoUrl: similarJob.company_logo_url,
        employmentType: similarJob.employment_type,
        id: similarJob.id,
        jobDescription: similarJob.job_description,
        location: similarJob.location,
        rating: similarJob.rating,
        title: similarJob.title,
      }))

      this.setState({
        apiStatus: apiConstants.success,
        details: jobDetails,
        similarJobs: similarItem,
        skills: skillsData,
        DetailsCompany: companyDetails,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccess = () => {
    const {details, similarJobs, skills, DetailsCompany} = this.state
    console.log(similarJobs)
    const {description, imageUrl} = DetailsCompany
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      packagePerAnnum,
      location,
      rating,
      title,
      jobDescription,
    } = details
    return (
      <>
        <div className="successContainer">
          <div className="logoHeadContainer">
            <img src={companyLogoUrl} alt={employmentType} className="logo" />
            <div>
              <h1 className="logoHead">{title}</h1>
              <div className="starContainer">
                <RiStarSFill className="star" />
                <p className="starItem">{rating}</p>
              </div>
            </div>
          </div>
          <div className="locationContainer">
            <div className="locationItem">
              <HiLocationMarker />
              <p className="locationImg">{location}</p>
              <GiSuitcase />
              <p className="locationImg">{employmentType}</p>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
          <hr />
          <div className="visitContainer">
            <p>Description</p>
            <div className="visitIconContainer">
              <a href={companyWebsiteUrl} className="visit">
                visit
              </a>
              <FiExternalLink />
            </div>
          </div>
          <p>{jobDescription}</p>
          <p>Skills</p>
          <ul className="ulContainer">
            {skills.map(item => (
              <SkillItem singleSkill={item} key={item.name} />
            ))}
          </ul>
          <p>Life at Company</p>
          <div className="lifeAtCompanyContainer">
            <p className="lifeAtCompanyPara">{description}</p>
            <img src={imageUrl} alt="Life At Company" />
          </div>
        </div>
        <h1 className="similarItem">Similar Jobs</h1>
        <ul className="ulContainerSimilar">
          {similarJobs.map(itemSimilar => (
            <SimilarItem similarJobDetails={itemSimilar} key={itemSimilar.id} />
          ))}
        </ul>
      </>
    )
  }

  renderFailure = () => {
    const failureRetry = () => {
      this.description()
    }
    return (
      <div className="failure">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong </h1>
        <p className="failureDescription">
          We Cannot seem to find the page you are looking for.
        </p>
        <button type="button" className="failureBut" onClick={failureRetry}>
          Retry
        </button>
      </div>
    )
  }

  renderLoading = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderProducts = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccess()
      case apiConstants.loading:
        return this.renderLoading()
      case apiConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="descriptionContainer">{this.renderProducts()}</div>
      </div>
    )
  }
}

export default JobDescription
