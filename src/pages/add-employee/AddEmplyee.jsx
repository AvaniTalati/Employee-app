import { useNavigate } from "react-router-dom";
import styles from "./addemployee.module.scss";
import Select from "react-select";
import {
  ACTUAL_DESIGNATION,
  BRANCH,
  COPS_CAPACTITY,
  COPS_NEXT_USER1,
  COPS_NEXT_USER2,
  COPS_NEXT_USER3,
  DEPARTMENT,
  DESIGNATION,
  EMAIL,
  EMP_ID,
  EMP_NAME,
  MAXLOAD_OTHER_BRANCH,
  MAXLOAD_OWN_BRANCH,
  MAXLOAD_PER_DAY,
  MOBILE,
  NEXT_USER,
  PRIORITY_OTHER_BRAND,
  REGION,
  SALES_OFFICE,
  USER_ID,
  VIEW_CUSTOMER,
  VIEW_QUATOTAION,
} from "../../constants/constants";
import { useForm } from "react-hook-form";
import { employeeValidators } from "../../formValidators/addemployeeValidators";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllAddEmployeeLists,
  getAllBranchLists,
  getAllDepartmentLists,
  getAllDesignationLists,
  getAllRegionName,
  getAllSales,
} from "../../redux/features/employee-dashboard/employeeDashboardAsyncAction";
import makeAnimated from "react-select/animated";
import { ADD_EMPLOYEE_TYPE } from "../../constants/asyncActionTypes";

const AddEmployee = () => {
  const navigate = useNavigate();
  const animatedComponent = makeAnimated();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [nextUser1, setNextUser1] = useState(null);
  const [nextUser2, setNextUser2] = useState(null);

  const [nextUser3, setNextUser3] = useState(null);
  const [nextUser, setNextUser] = useState(null);

  const [selectedSalesOffice, setSelectedSalesOffice] = useState(null);

  const { regionList, salesList, branchList, departmentList, designationList } =
    useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let payloadData = {
      ...data,
      cops_next_user1: nextUser1,
      copsUserId: nextUser,
      nextUserId: nextUser,
      branch: selectedBranch,
      masterDepartmentId: selectedDepartment,
      designation: selectedDesignation,
      region: selectedRegion,
      masterSalesOfficeIds: selectedSalesOffice,
    };

    dispatch(getAllAddEmployeeLists(payloadData)).then((e) => {
      if (e.type === `${ADD_EMPLOYEE_TYPE}/fulfilled`) {
        navigate("/empDashboard");
      }
    });
  };

  const trimValue = (e) => {
    let value = e.target.value;
    if (value.length === 1 && value === " ") {
      e.target.value = "";
    } else if (
      value.length > 1 &&
      value[0] === " " &&
      value[value.length - 1] === " "
    ) {
      value = value.trim();
      const words = value.split(" ");
      const filteredWords = words.filter((word) => word !== "");
      e.target.value = filteredWords.join(" ");
    } else if (value.length > 1 && value[0] === " ") {
      e.target.value = value.trim();
    }
  };

  
  const branchLists = [
    {
      id: 1,
      name: "branch 1",
    },
    {
      id: 2,
      name: "branch 2",
    },
    {
      id: 3,
      name: "branch 3",
    },
    {
      id: 4,
      name: "branch 4",
    },
  ];

  const departmentsData = [
    {
      id: 1,
      name: "Computer",
    },
    {
      id: 2,
      name: "IT",
    },
    {
      id: 3,
      name: "Recruiter",
    },
    {
      id: 4,
      name: "HR",
    },
  ];
  const designationData = [
    {
      id: 1,
      name: "Engineering",
    },
    {
      id: 2,
      name: "IT",
    },
    {
      id: 3,
      name: "Student",
    },
    {
      id: 4,
      name: "Employee",
    },
  ];
  useEffect(() => {
    dispatch(getAllRegionName());
  }, []);

  useEffect(() => {
    dispatch(getAllSales());
  }, []);

  useEffect(() => {
    dispatch(getAllBranchLists());
  }, []);

  useEffect(() => {
    dispatch(getAllDepartmentLists());
  }, []);
  useEffect(() => {
    dispatch(getAllDesignationLists());
  }, []);

  return (
    <>
      <div className={styles.dashboardContainer}>
        <span className={styles.text}>EMPLOYEES</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
            <div className={styles.firstContainer}>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  Emp ID
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(EMP_ID, employeeValidators[EMP_ID])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.id && (
                      <span className={styles.error}>{errors.id.message}</span>
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    Region
                    <span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Region"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(regionList)
                        ? regionList?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(REGION, employeeValidators[REGION])}
                    components={animatedComponent}
                    value={watch(REGION)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setSelectedRegion(e.label);
                      setValue(REGION, e);
                      trigger(REGION, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[REGION] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>{errors[REGION].message}</p>
                  </div>
                )}
              </div>
              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    Sales office
                    <span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Sales office"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(salesList)
                        ? salesList?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(
                      SALES_OFFICE,
                      employeeValidators[SALES_OFFICE]
                    )}
                    components={animatedComponent}
                    value={watch(SALES_OFFICE)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setSelectedSalesOffice(e.label);
                      setValue(SALES_OFFICE, e);
                      trigger(SALES_OFFICE, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[SALES_OFFICE] && (
                  <div className={styles.errorContainer}>
                    <p className={styles.formError}>
                      {errors[SALES_OFFICE].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    Designation
                    <span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(designationData)
                        ? designationData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(DESIGNATION, employeeValidators[DESIGNATION])}
                    components={animatedComponent}
                    value={watch(DESIGNATION)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setSelectedDesignation(e.label);
                      setValue(DESIGNATION, e);
                      trigger(DESIGNATION, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[DESIGNATION] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[DESIGNATION].message}
                    </p>
                  </div>
                )}
              </div>
              {/* <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  View Customer
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      VIEW_CUSTOMER,
                      employeeValidators[VIEW_CUSTOMER]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.view_customer && (
                      <span className={styles.error}>
                        {errors.view_customer.message}
                      </span>
                    )}
                  </p>
                </div>
              </div> */}
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  User ID
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(USER_ID, employeeValidators[USER_ID])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.userId && (
                      <span className={styles.error}>
                        {errors.userId.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  Email
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(EMAIL, employeeValidators[EMAIL])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.email && (
                      <span className={styles.error}>
                        {errors.email.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    COPS next user 1<span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(designationData)
                        ? designationData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(
                      COPS_NEXT_USER1,
                      employeeValidators[COPS_NEXT_USER1]
                    )}
                    components={animatedComponent}
                    value={watch(COPS_NEXT_USER1)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setNextUser1(e.label);
                      setValue(COPS_NEXT_USER1, e);
                      trigger(COPS_NEXT_USER1, e);
                    }}
                    maxMenuHeight={200}
                    defaultInputValue="IT"
                    // isDisabled={true}
                  />
                </div>
                {errors[COPS_NEXT_USER1] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[COPS_NEXT_USER1].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    COPS next user 3<span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(designationData)
                        ? designationData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    defaultInputValue="IT"
                    isSearchable={true}
                    {...register(
                      COPS_NEXT_USER3,
                      employeeValidators[COPS_NEXT_USER3]
                    )}
                    components={animatedComponent}
                    value={watch(COPS_NEXT_USER3)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setNextUser3(e.label);
                      setValue(COPS_NEXT_USER3, e);
                      trigger(COPS_NEXT_USER3, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[COPS_NEXT_USER3] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[COPS_NEXT_USER3].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  COPS Capacity
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      COPS_CAPACTITY,
                      employeeValidators[COPS_CAPACTITY]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.cops_capacity && (
                      <span className={styles.error}>
                        {errors.cops_capacity.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  priority other branch
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      PRIORITY_OTHER_BRAND,
                      employeeValidators[PRIORITY_OTHER_BRAND]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.priority_other_brand && (
                      <span className={styles.error}>
                        {errors.priority_other_brand.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  max load on branch
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      MAXLOAD_OWN_BRANCH,
                      employeeValidators[MAXLOAD_OWN_BRANCH]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.maxLoadOwnBranch && (
                      <span className={styles.error}>
                        {errors.maxLoadOwnBranch.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.secondContainer}>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  Emp Name
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(EMP_NAME, employeeValidators[EMP_NAME])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.name && (
                      <span className={styles.errorText}>
                        {errors.name.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    Branch<span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Branch"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(branchLists)
                        ? branchLists?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(BRANCH, employeeValidators[BRANCH])}
                    components={animatedComponent}
                    value={watch(BRANCH)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setSelectedBranch(e.label);
                      setValue(BRANCH, e);
                      trigger(BRANCH, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[BRANCH] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>{errors[BRANCH].message}</p>
                  </div>
                )}
              </div>
              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    Department<span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Department"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(departmentsData)
                        ? departmentsData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(DEPARTMENT, employeeValidators[DEPARTMENT])}
                    components={animatedComponent}
                    value={watch(DEPARTMENT)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setSelectedDepartment(e.label);
                      setValue(DEPARTMENT, e);
                      trigger(DEPARTMENT, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[DEPARTMENT] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[DEPARTMENT].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  Actual Designation
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      ACTUAL_DESIGNATION,
                      employeeValidators[ACTUAL_DESIGNATION]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.actualDesignation && (
                      <span className={styles.error}>
                        {errors.actualDesignation.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  view Quotation
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      VIEW_QUATOTAION,
                      employeeValidators[VIEW_QUATOTAION]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.isViewQuotation && (
                      <span className={styles.error}>
                        {errors.isViewQuotation.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  Mobile
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(MOBILE, employeeValidators[MOBILE])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.mobile && (
                      <span className={styles.error}>
                        {errors.mobile.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    Next user
                    <span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(designationData)
                        ? designationData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(NEXT_USER, employeeValidators[NEXT_USER])}
                    components={animatedComponent}
                    value={watch(NEXT_USER)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setNextUser(e.label);
                      setValue(NEXT_USER, e);
                      trigger(NEXT_USER, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[NEXT_USER] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[NEXT_USER].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.selectInputFieldContainer}>
                <div className={styles.selectContainer}>
                  <label className={styles.selectText}>
                    COPS next user 2<span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClassContent}
                    options={
                      Array.isArray(designationData)
                        ? designationData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    defaultValue="IT"
                    isSearchable={true}
                    {...register(
                      COPS_NEXT_USER2,
                      employeeValidators[COPS_NEXT_USER2]
                    )}
                    components={animatedComponent}
                    value={watch(COPS_NEXT_USER2)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setNextUser2(e.label);
                      setValue(COPS_NEXT_USER2, e);
                      trigger(COPS_NEXT_USER2, e);
                    }}
                    maxMenuHeight={200}
                    defaultInputValue="IT"
                  />
                </div>
                {errors[COPS_NEXT_USER2] && (
                  <div className={styles.errorContainer}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[COPS_NEXT_USER2].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  MaxLoad Per Day
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      MAXLOAD_PER_DAY,
                      employeeValidators[MAXLOAD_PER_DAY]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.maxLoadPerDay && (
                      <span className={styles.error}>
                        {errors.maxLoadPerDay.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <label className={styles.text}>
                  MaxLoad Other Branch
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.errorContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      MAXLOAD_OTHER_BRANCH,
                      employeeValidators[MAXLOAD_OTHER_BRANCH]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.maxLoadOtherBranch && (
                      <span className={styles.error}>
                        {errors.maxLoadOtherBranch.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className={styles.btnContainer}>
          <button
            className={styles.btn}
            onClick={handleSubmit(onSubmit)}

            // onClick={() => navigate("/empDashboard")}
          >
            Save
          </button>
          <button type="submit" className={styles.btn}>
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
