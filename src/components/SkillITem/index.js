import './index.css'

const SkillItem = props => {
  const {singleSkill} = props
  const {name, imageUrl} = singleSkill
  return (
    <li className="skillContainer">
      <img src={imageUrl} alt={name} className="skillImg" />
      <p>{name}</p>
    </li>
  )
}

export default SkillItem
