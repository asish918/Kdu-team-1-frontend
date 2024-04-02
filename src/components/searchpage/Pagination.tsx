import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setPage } from '../../redux/reducers/roomResultReducer';
import { useTranslation } from 'react-i18next';

const Pagination: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.roomResult.page);
  const totalItems = useSelector((state: RootState) => state.roomResult.totalItems);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const handlePrevious = () => {
    dispatch(setPage(currentPage - 1))
  };

  const handleNext = () => {
    dispatch(setPage(currentPage + 1))
  };

  const itemsPerPage = 2;
  const startIdx = currentPage * itemsPerPage + 1;
  const endIdx = startIdx + itemsPerPage - 1;

  return (
    <div>
      <IconButton onClick={handlePrevious} disabled={currentPage === 0}>
        <ArrowBackIosIcon />
      </IconButton>
      <span>{i18n.t("roomResultForm.paginationFirst")} {startIdx}-{endIdx} of {totalItems === 1 ? totalItems : totalItems * 2} {i18n.t("roomResultForm.paginationSecond")}</span>
      <IconButton onClick={handleNext} disabled={totalItems === 1 || currentPage * 2 >= totalItems}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div >
  );
};

export default Pagination;


