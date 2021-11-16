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
    const onSalary = itemValue => {
      console.log(itemValue)
    }
    return (
      <ul className="filterUlContainer">
        <li className="liItem" key={salaryRangesList[0].salaryRangeId}>
          <input
            type="radio"
            className="check"
            name="salary"
            id={salaryRangesList[0].label}
            value={salaryRangesList[0].salaryRangeId}
            onChange={onSalary(salaryRangesList[0].salaryRangeId)}
          />
          <label htmlFor={salaryRangesList[0].label}>
            {salaryRangesList[0].label}
          </label>
        </li>
        <li className="liItem" key={salaryRangesList[1].salaryRangeId}>
          <input
            type="radio"
            className="check"
            name="salary"
            id={salaryRangesList[1].label}
            value={salaryRangesList[1].salaryRangeId}
          />
          <label htmlFor={salaryRangesList[1].label}>
            {salaryRangesList[1].label}
          </label>
        </li>
        <li className="liItem" key={salaryRangesList[2].salaryRangeId}>
          <input
            type="radio"
            className="check"
            name="salary"
            id={salaryRangesList[2].label}
            value={salaryRangesList[2].salaryRangeId}
          />
          <label htmlFor={salaryRangesList[2].label}>
            {salaryRangesList[2].label}
          </label>
        </li>
        <li className="liItem" key={salaryRangesList[3].salaryRangeId}>
          <input
            type="radio"
            className="check"
            name="salary"
            id={salaryRangesList[3].label}
            value={salaryRangesList[3].salaryRangeId}
          />
          <label htmlFor={salaryRangesList[3].label}>
            {salaryRangesList[3].label}
          </label>
        </li>
      </ul>
    )
  }

  const employmentItem = () => {
    const list = []
    return (
      <ul className="filterUlContainer">
        <li key={employmentTypesList[0].employmentTypeId} className="liItem">
          <input
            type="checkBox"
            className="check"
            id={employmentTypesList[0].label}
          />
          <label htmlFor={employmentTypesList[0].label} className="labelItem">
            {employmentTypesList[0].label}
          </label>
        </li>
        <li key={employmentTypesList[1].employmentTypeId} className="liItem">
          <input
            type="checkBox"
            className="check"
            id={employmentTypesList[1].label}
          />
          <label htmlFor={employmentTypesList[1].label} className="labelItem">
            {employmentTypesList[1].label}
          </label>
        </li>
        <li key={employmentTypesList[2].employmentTypeId} className="liItem">
          <input
            type="checkBox"
            className="check"
            id={employmentTypesList[2].label}
          />
          <label htmlFor={employmentTypesList[2].label} className="labelItem">
            {employmentTypesList[2].label}
          </label>
        </li>
        <li key={employmentTypesList[3].employmentTypeId} className="liItem">
          <input
            type="checkBox"
            className="check"
            id={employmentTypesList[3].label}
          />
          <label htmlFor={employmentTypesList[3].label} className="labelItem">
            {employmentTypesList[3].label}
          </label>
        </li>
        <hr className="hr" />
      </ul>
    )
  }

  return (
    <form>
      <hr className="hr" />
      <h1>Type of Employment</h1>
      {employmentItem()}
      <h1>Salary Range</h1>
      {salaryItem()}
    </form>
  )
}

export default FilterIcons
