export function restuarentInfoValidation(form) {
  const errors = {};

  if (!form.resturentName) {
      errors.resturentName = 'Restuarent Name is Required';
  }

   if (!form.type) {
      errors.type = 'Please Select a Restuarent type Veg or Non-Veg';
  }

   if (!form.cuisineType) {
      errors.cuisineType = 'Please Select Restuarent Cuisine';
  }

   if (!form.description) {
      errors.description = 'Please add Resturent Information';
  }
  

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}