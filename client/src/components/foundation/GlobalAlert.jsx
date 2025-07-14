'use client';

import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '@/store/slices/alertSlice';
import { useEffect } from 'react';
import AlertNotification from '../reasuableComponents/UI/AlertNotification';

const GlobalAlert = () => {
  const { visible, message, alertType } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000); // auto hide after 3s

      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  return <AlertNotification message={message} alertType={alertType} />;
};

export default GlobalAlert;
