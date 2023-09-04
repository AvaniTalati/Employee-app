import React, { useEffect, useState } from "react";
import styles from "./employeedashboard.module.scss";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { employeeList } from "../../redux/features/employee-dashboard/employeeDashboardCrud";
import { useNavigate } from "react-router-dom";
import { employeeData, employeeHeaderData } from "../../data/employeeTableData";
const EmployeeDashboard = ({ logout }) => {
  const { employees } = useSelector((state) => state.employee);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const navigate = useNavigate();

  const totalPage = Math.ceil(employeeData.length / dataPerPage);

  const pageIndexArray = () => {
    let pageIndexOptions = [];
    for (let i = 1; i <= totalPage; i++) {
      pageIndexOptions.push(i);
    }
    return pageIndexOptions;
  };

  const pageIndexOptions = pageIndexArray();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/");
  };

  const startIndex = (pageIndex - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const slicedEmployeeData = employeeData.slice(startIndex, endIndex);

  // useEffect(() => {
  //   const fetchEmployeeData = async () => {
  //     try {
  //       const employeesData = await employeeList();

       

  //       console.log("Employee Data:", employeesData);
  //     } catch (error) {
  //       console.error("Error fetching employee data:", error);
  //     }
  //   };

  //   fetchEmployeeData();
  // }, []);



  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.headingContainer}>
          <span className={styles.text}> Employees List</span>
          <button
            className={styles.button}
            onClick={() => navigate("/addemployee")}
          >
            Add Employee
          </button>
        </div>
        <div className={styles.tableContainer}>
          <Table
            tableHeaderData={employeeHeaderData}
            tableRowData={slicedEmployeeData}
          />
        </div>
        <Pagination
          setDataPerPage={setDataPerPage}
          pageIndexOptions={pageIndexOptions}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
