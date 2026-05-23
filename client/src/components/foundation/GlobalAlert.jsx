'use client';

import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '@/store/slices/alertSlice';
import { useEffect } from 'react';
import AlertNotification from '../reasuableComponents/AlertNotification';


const POSITION_CLASSES = {
  "top-left":      "top-4 left-4",
  "top-center":    "top-4 left-1/2 -translate-x-1/2",
  "top-right":     "top-4 right-4 text-right items-end",
  "center":        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center",
  "bottom-left":   "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right":  "bottom-4 right-4 text-right items-end",
};

const GlobalAlert = () => {
  const { alerts } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  if (alerts.length === 0) return null;

  // Group alerts by position
  const groupedAlerts = alerts.reduce((acc, alert) => {
    if (!acc[alert.position]) acc[alert.position] = [];
    acc[alert.position].push(alert);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedAlerts).map(([position, positionAlerts]) => {
        const isBottom = position.startsWith('bottom');
        return (
          <div 
            key={position} 
            className={`fixed z-[9999] pointer-events-none flex ${isBottom ? 'flex-col-reverse' : 'flex-col'} gap-4 p-4 ${POSITION_CLASSES[position] || POSITION_CLASSES["top-right"]}`}
          >
            {positionAlerts.map((alert) => (
              <AlertNotification
                key={alert.id}
                id={alert.id}
                message={alert.message}
                severity={alert.severity}
                position={position}
                onClose={() => dispatch(hideAlert(alert.id))}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default GlobalAlert;
