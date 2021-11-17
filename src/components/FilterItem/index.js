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
        {salaryRangesList.map(itemSalary => {
          const onSalary = () => {
            salaryChange(itemSalary.salaryRangeId)
          }
          return (
            <li className="liItem" key={itemSalary.label} onClick={onSalary}>
              <input
                type="radio"
                className="check"
                name="salary"
                id={itemSalary.label}
                value={itemSalary.salaryRangeId}
              />
              <label htmlFor={itemSalary.label}>{itemSalary.label}</label>
            </li>
          )
        })}
      </ul>
    )
  }

  const employmentItem = () => {
    const {EmployeeChange} = props
    return (
      <ul className="filterUlContainer">
        {employmentTypesList.map(itemEmployee => {
          const changeEmployee = () =>
            EmployeeChange(itemEmployee.employmentTypeId)
          return (
            <li
              key={itemEmployee.employmentTypeId}
              className="liItem"
              onClick={changeEmployee}
            >
              <input
                type="checkBox"
                className="check"
                id={itemEmployee.label}
              />
              <label htmlFor={itemEmployee.label} className="labelItem">
                {itemEmployee.label}
              </label>
            </li>
          )
        })}
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
