import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function HomePage(props) {
  const employees = props.employees;

  return (
    <>
      <div className="header">Employee Directory</div>
      <div className="searchBar">
        <SearchBar term={props.term} setTerm={props.setTerm} />
      </div>
      <div className="employeeList">
        <EmployeeList
          employees={employees}
          selectEmployee={props.selectEmployee}
          term={props.term}
        />
      </div>
    </>
  );
}
