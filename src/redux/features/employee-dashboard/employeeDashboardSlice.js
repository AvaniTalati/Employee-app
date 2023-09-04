import { createSlice } from "@reduxjs/toolkit";
import {
  getAllAddEmployeeLists,
  getAllBranchLists,
  getAllDepartmentLists,
  getAllDesignationLists,
  getAllEmployee,
  getAllRegionName,
  getAllSales,
} from "./employeeDashboardAsyncAction";

const initialState = {
  loading: false,
  employees: [],
  regionList: [],
  salesList: [],
  branchList: [],
  departmentList:[],
  designationList:[],
  employeeData:[]
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // all employees

      .addCase(getAllEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload.data;
        console.log("employ slice", state.employees);
      })
      .addCase(getAllEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //all region

    builder.addCase(getAllRegionName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllRegionName.fulfilled, (state, action) => {
      state.loading = false;
      state.regionList = action.payload.data;
    });
    builder.addCase(getAllRegionName.rejected, (state, action) => {
      state.loading = false;
    });

    //all sales

    builder.addCase(getAllSales.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllSales.fulfilled, (state, action) => {
      state.loading = false;
      state.salesList = action.payload.data;
    });
    builder.addCase(getAllSales.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getAllBranchLists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBranchLists.fulfilled, (state, action) => {
      state.loading = false;
      state.branchList = action.payload.data;
    });
    builder.addCase(getAllBranchLists.rejected, (state, action) => {
      state.loading = false;
    });


    builder.addCase(getAllDepartmentLists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllDepartmentLists.fulfilled, (state, action) => {
      state.loading = false;
      state.departmentList = action.payload.data;
    });
    builder.addCase(getAllDepartmentLists.rejected, (state, action) => {
      state.loading = false;
    });


    builder.addCase(getAllDesignationLists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllDesignationLists.fulfilled, (state, action) => {
      state.loading = false;
      state.designationList = action.payload.data;
    });
    builder.addCase(getAllDesignationLists.rejected, (state, action) => {
      state.loading = false;
    });


    
    builder.addCase(getAllAddEmployeeLists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllAddEmployeeLists.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeData = action.payload;
    });
    builder.addCase(getAllAddEmployeeLists.rejected, (state, error) => {
      state.loading = false;
      // state.error = error;
    });
  },
});

export const { clearLoginState } = employeeSlice.actions;

export default employeeSlice.reducer;
