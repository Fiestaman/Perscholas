import Header from "./Header";

export default function EmployeePage(props) {
  return (
    <>
      {props.selectedEmployee.name ? (
        <>
          <Header
            header={props.header}
            selectedEmployee={props.selectedEmployee}
            setSelectedEmployee={props.setSelectedEmployee}
          />
          <div className="employee">
            <div className="info">
              <img src={props.selectedEmployee.icon} alt="Employee Icon" />
              <div className="infoNamePosition">
                {props.selectedEmployee.name}
                <br />
                {props.selectedEmployee.position}
              </div>
            </div>
            <div className="infoBit">
              <h3>Call Office</h3>
              {props.selectedEmployee.office}
            </div>
            <div className="infoBit">
              <h3>Call Mobile</h3>
              {props.selectedEmployee.mobile}
            </div>
            <div className="infoBit">
              <h3>SMS</h3>
              {props.selectedEmployee.sms}
            </div>
            <div className="infoBit">
              <h3>Email</h3>
              {props.selectedEmployee.email}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
