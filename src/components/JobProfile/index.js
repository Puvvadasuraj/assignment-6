import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'lOADING',
}
class JobProfile extends Component {
  state = {
    apiStatus: apiConstants.initial,
    profile: [],
  }

  componentDidMount() {
    this.renderProfile()
  }

  renderProfile = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const profileData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        profile: profileData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onSuccess = () => {
    const {profile} = this.state
    const {name, profileImageUrl, shortBio} = profile
    return (
      <div className="jobProfileContainer">
        <img src={profileImageUrl} alt="profile" />
        <h1 className="profileHead">{name}</h1>
        <p className="profilePara">{shortBio}</p>
      </div>
    )
  }

  onLoading = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  onFailure = () => {
    const onClick = () => {
      this.renderProfile()
    }
    return (
      <button type="button" className="retry" onClick={onClick}>
        Retry
      </button>
    )
  }

  render() {
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
}

export default JobProfile
