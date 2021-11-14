import './index.css'

const FilterIcons = props => {
  const salaryRangesList = [
    {
      salaryRangeId: '1000000',
      label: '10 LPA and above',
    },
    {
      salaryRangeId: '2000000',
      label: '20 LPA and above',
    },
    {
      salaryRangeId: '3000000',
      label: '30 LPA and above',
    },
    {
      salaryRangeId: '4000000',
      label: '40 LPA and above',
    },
  ]

  const employmentTypesList = [
    {
      label: 'Full Time',
      employmentTypeId: 'FULLTIME',
    },
    {
      label: 'Part Time',
      employmentTypeId: 'PARTTIME',
    },
    {
      label: 'Freelance',
      employmentTypeId: 'FREELANCE',
    },
    {
      label: 'Internship',
      employmentTypeId: 'INTERNSHIP',
    },
  ]

  const salaryItem = () => {
    const {salaryChange} = props
    return (
      <ul className="filterUlContainer">
        {salaryRangesList.map(salaryDetails => {
          const check = item => {
            console.log(item)
          }
          return (
            <li className="liItem" key={salaryDetails.salaryRangeId}>
              <input
                type="radio"
                className="check"
                onCheck={check(salaryDetails.salaryRangeId)}
              />
              <p>{salaryDetails.label}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  const employmentItem = () => (
    <ul className="filterUlContainer">
      <li key={employmentTypesList[0].employmentTypeId} className="liItem">
        <input type="checkBox" className="check" />
        <p>{employmentTypesList[0].label}</p>
      </li>
      <li key={employmentTypesList[1].employmentTypeId} className="liItem">
        <input type="checkBox" className="check" />
        <p>{employmentTypesList[1].label}</p>
      </li>
      <li key={employmentTypesList[2].employmentTypeId} className="liItem">
        <input type="checkBox" className="check" />
        <p>{employmentTypesList[2].label}</p>
      </li>
      <li key={employmentTypesList[3].employmentTypeId} className="liItem">
        <input type="checkBox" className="check" />
        <p>{employmentTypesList[3].label}</p>
      </li>
      <hr className="hr" />
    </ul>
  )

  return (
    <div>
      <hr className="hr" />
      <h1>Types of Employment</h1>
      {employmentItem()}
      <h1>Salary Range</h1>
      {salaryItem()}
    </div>
  )
}

export default FilterIcons
