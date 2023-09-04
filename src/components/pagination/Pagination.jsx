import { FC, useState } from "react";
import styles from "./pagination.module.scss";


const Pagination= ({
  pageSize,
  setDataPerPage,
  pageIndexOptions,
  pageIndex,
  setPageIndex,
}) => {
  const numberPagesArray = [10, 15, 20];

  return (
    <>
      <div className={styles.paginationSection}>
        <>
          {pageIndexOptions?.map((pageOption, index) => {
            if (
              pageIndexOptions.length <= 5 || 
              index < 3 ||
              index >= pageIndexOptions.length - 3 || 
              (pageIndex && Math.abs(pageIndex - pageOption) <= 1) 
            ) {
              return (
                <div
                  className={
                    pageIndex === pageOption
                      ? styles.selectedPage
                      : styles.paginationButton
                  }
                  key={pageOption}
                  onClick={() => setPageIndex && setPageIndex(pageOption)}
                >
                  {pageOption}
                </div>
              );
            } else if (
              index === 3 && //
              pageIndexOptions.length > 7 
            ) {
              return (
                <div className={styles.paginationButton} key="ellipsis">
                  ...
                </div>
              );
            }
            return null;
          })}
        </>
        <div className={styles.setPageSizeSection}>
          <p className={styles.setPageSizeText}>Listing</p>
          <select
            className={styles.selectPageSize}
            value={pageSize}
            onChange={(event) => {
              setDataPerPage && setDataPerPage(Number(event.target.value));
              setPageIndex && setPageIndex(1);
            }}
          >
            {numberPagesArray.map((numberPageArray) => (
              <option key={numberPageArray} value={numberPageArray}>
                {numberPageArray}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Pagination;
