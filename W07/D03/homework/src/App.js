import "./styles.css";
import HomePage from "./Components/HomePage";
import EmployeePage from "./Components/EmployeePage";
import { useState, useEffect } from "react";

export default function App() {
  const arr = [
    {
      name: "James King",
      position: "President and CEO",
      icon: "./images/JamesKing.png",
      office: "781-000-0001",
      mobile: "617-000-0001",
      sms: "617-000-0001",
      email: "jking@fakemail.com",
      id: 1,
      key: 1,
    },
    {
      name: "Julie Taylor",
      position: "VP of Marketing",
      icon: "./images/JulieTaylor.png",
      office: "781-000-0002",
      mobile: "617-000-0002",
      sms: "617-000-0002",
      email: "jtaylor@fakemail.com",
      id: 2,
      key: 2,
    },
    {
      name: "Eugene Lee",
      position: "CFO",
      icon: "./images/EugeneLee.png",
      office: "781-000-0003",
      mobile: "617-000-0003",
      sms: "617-000-0003",
      email: "elee@fakemail.com",
      id: 3,
      key: 3,
    },
    {
      name: "John Williams",
      position: "VP of Engineering",
      icon: "./images/JohnWilliams.png",
      office: "781-000-0004",
      mobile: "617-000-0004",
      sms: "617-000-0004",
      email: "jwilliams@fakemail.com",
      id: 4,
      key: 4,
    },
    {
      name: "Ray Moore",
      position: "VP of Sales",
      icon: "./images/RayMoore.png",
      office: "781-000-0005",
      mobile: "617-000-0005",
      sms: "617-000-0005",
      email: "rmoore@fakemail.com",
      id: 5,
      key: 5,
    },
    {
      name: "Paul Jones",
      position: "QA Manager",
      icon: "./images/PaulJones.png",
      office: "781-000-0006",
      mobile: "617-000-0006",
      sms: "617-000-0006",
      email: "pjones@fakemail.com",
      id: 6,
      key: 6,
    },
  ];

  const [employees, setEmployees] = useState(arr);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [term, setTerm] = useState("");

  // setEmployees([...arr])
  // console.log(employees)
  // console.log(term);
  // useEffect(() => {

  // }, [term]);

  const selectEmployee = (id) => {
    const indexOfEmployee = employees.findIndex(
      (employee) => employee.id === id
    );
    setSelectedEmployee(employees[indexOfEmployee]);
  };

  return (
    <div className="App">
      <div className="homePage">
        <HomePage
          employees={employees}
          selectEmployee={selectEmployee}
          term={term}
          setTerm={setTerm}
        />
      </div>
      <div className="employeePage">
        <EmployeePage
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
        />
      </div>
    </div>
  );
}
