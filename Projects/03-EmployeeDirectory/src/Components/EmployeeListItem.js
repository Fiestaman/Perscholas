export default function EmployeeListItem(props) {
  return (
    <>
      <div
        className="employeeListItem"
        onClick={() => props.selectEmployee(props.employee.id)}
      >
        <img
          src={props.employee.icon}
          className="employeeListItemIcon"
          alt="Employee Icon"
        />
        <div>
          <div className="name">{props.employee.name}</div>
          <div className="position">{props.employee.position}</div>
        </div>
      </div>
    </>
  );
}
