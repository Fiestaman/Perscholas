import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import Header from "./Header";

export default function HomePage(props) {
  const employees = props.employees;

  return (
    <>
      <Header header={props.header} />
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
