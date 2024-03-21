import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PaginationProps {
 currentPage: number;
 totalPages: number;
 totalItems: number;
 itemsPerPage: number;
 onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
 currentPage,
 totalPages,
 totalItems,
 itemsPerPage,
 onPageChange,
}) => {
 const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
 };

 const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
 };

 // Calculate the start and end indices of the current page
 const startIndex = (currentPage - 1) * itemsPerPage + 1;
 const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);

 return (
    <div>
      <IconButton onClick={handlePrevious} disabled={currentPage === 1}>
        <ArrowBackIosIcon />
      </IconButton>
      <span>Showing {startIndex}-{endIndex} of {totalItems} Results</span>
      <IconButton onClick={handleNext} disabled={currentPage === totalPages}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
 );
};

export default Pagination;


