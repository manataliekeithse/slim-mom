import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getToken, getUserInfo } from 'redux/authSelectors';
import { selectDate } from 'redux/productsSelectors';
import { setProducts } from 'redux/productsSlice';
import { apiAddMyProduct } from 'services/api/api';
import styles from './DiaryAddProductForm.styled'; // Import your module.css

export const DiaryAddProductForm = ({ onClose }) => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const userInfo = useSelector(getUserInfo);
  const mobile = useMediaQuery({ query: '(max-width: 767px)' });

  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!productName || !productWeight) {
      alert('Please fill in all fields');
      return;
    }
    const newProduct = {
      name: productName,
      weight: productWeight,
      date,
      userId: userInfo.id,
    };

    try {
      const response = await apiAddMyProduct(newProduct, token);
      dispatch(setProducts(response.data));
      onClose();
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="productWeight">Product Weight (grams)</label>
        <input
          id="productWeight"
          type="number"
          value={productWeight}
          onChange={e => setProductWeight(e.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};
