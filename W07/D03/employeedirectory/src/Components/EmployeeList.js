import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
  // console.log(props.term);
  // const regex = new RegExp(`\\w*${props.term}\\w*`);
  // console.log(regex);
  // props.employees.filter(
  //   (emp) => {
  //     // console.log(new RegExp(`Eugene\w*`));
  //     console.log(emp.name.match(regex));
  //     // return emp.name.match(`Eugene Lee`);
  //   }
  //   // .filter((emp) => {
  //   // employee.name.match(`/${props.term}\w*/`);
  //   // })
  // );
  const EmployeesList = props.employees
    .filter((employee) => {
      // console.log(props.term);
      const regex = new RegExp(`\\w*${props.term}\\w*`, "i");
      return employee.name.match(regex);
      // console.log(employee);
    })
    .map((employee) => {
      return (
        <>
          <EmployeeListItem
            // key={Date.now()}
            employee={employee}
            selectEmployee={props.selectEmployee}
          />
        </>
      );
    });

  return <>{EmployeesList}</>;
}
