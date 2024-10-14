import React from 'react';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import css from './DiaryPage.module.css';

export const DiaryPage = () => {
  return (
    <div className={css.backgroundContainer}>
      <DiaryAddProductForm />
    </div>
  );
};

export default DiaryPage;
