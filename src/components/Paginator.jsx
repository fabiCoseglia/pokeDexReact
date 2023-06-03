import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginator = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages > 1) {
      pageNumbers.push(
        <Pagination.Prev
          key="prev"
          disabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        />
      );

      if (currentPage > 1) {
        pageNumbers.push(
          <Pagination.Item key={currentPage - 1} onClick={() => handleClick(currentPage - 1)}>
            {currentPage - 1}
          </Pagination.Item>
        );
      }

      pageNumbers.push(
        <Pagination.Item key={currentPage} active>
          {currentPage}
        </Pagination.Item>
      );

      if (currentPage < totalPages) {
        pageNumbers.push(
          <Pagination.Item key={currentPage + 1} onClick={() => handleClick(currentPage + 1)}>
            {currentPage + 1}
          </Pagination.Item>
        );
      }

      pageNumbers.push(
        <Pagination.Next
          key="next"
          disabled={currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
        />
      );
    }

    return pageNumbers;
  };

  return <Pagination style={{ backgroundColor: '#24292f' }} className="justify-content-center">{renderPageNumbers()}</Pagination>;
};

export default Paginator;
