import {RiStarSFill} from 'react-icons/ri'
import {HiLocationMarker} from 'react-icons/hi'

import {GiSuitcase} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import './index.css'

const JobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    location,
    jobDescription,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobDetails
  return (
    <li className="itemContainer">
      <Link to={`/jobs/${id}`} className="linkItem">
        <div>
          <div className="itemLogoHead">
            <img src={companyLogoUrl} alt={title} className="ItemLogoImg" />
            <div>
              <h1 className="itemHead">{title}</h1>
              <div className="ratingContainer">
                <RiStarSFill className="star" />
                <p className="rat">{rating}</p>
              </div>
            </div>
          </div>
          <div className="locationBox">
            <div className="locationInnerBox">
              <HiLocationMarker className="locationIcon" />
              <p className="location">{location}</p>

              <GiSuitcase className="locationIcon" />
              <p className="location">{employmentType}</p>
            </div>
            <p className="locationIcon">{packagePerAnnum}</p>
          </div>
          <hr />
          <p className="descriptionHead">Description</p>
          <p className="description">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobItem
