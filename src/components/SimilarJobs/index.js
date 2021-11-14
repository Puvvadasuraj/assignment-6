import {AiFillStar} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {GiSuitcase} from 'react-icons/gi'
import './index.css'

const SimilarItem = props => {
  const {similarJobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobDetails
  return (
    <div className="similarJobContainer">
      <div className="similarImgContainer">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="similarJobImg"
        />
        <div>
          <h1>{title}</h1>
          <div className="starRow">
            <AiFillStar className="aiStar" />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <h1>Description</h1>
      <p>{jobDescription}</p>
      <div className="similarLocationContainer">
        <div className="similarLocation">
          <HiOutlineLocationMarker />
          <p>{location}</p>
        </div>
        <div className="similarLocation">
          <GiSuitcase />
          <p>{employmentType}</p>
        </div>
      </div>
    </div>
  )
}

export default SimilarItem
