import React from "react";
import styles from "./table.module.scss";
import { useTable } from "react-table";
import { useGlobalFilter, useSortBy } from "react-table";

const Table = ({ tableHeaderData, tableRowData,customTableClass }) => {
  const data = tableRowData;
  const columns = tableHeaderData;
  const options = {
    data,
    columns,
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(options, useGlobalFilter, useSortBy);

  return (
    <table {...getTableProps()} className={[styles.table,customTableClass].join(" ")}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className={styles.tableHeadingRow}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <th className={styles.tableHeading}
               {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className={styles.tableRow}{...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td className={styles.tableColumn} {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
