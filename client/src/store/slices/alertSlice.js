import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alerts: [],
  },
  reducers: {
    showAlert: (state, action) => {
      state.alerts.push({
        id: Date.now(),
        message: action.payload.message || '',
        severity: action.payload.severity || 'info',
        position: action.payload.position || 'top-right',
      });
    },
    hideAlert: (state, action) => {
      state.alerts = state.alerts.filter((alert) => alert.id !== action.payload);
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
