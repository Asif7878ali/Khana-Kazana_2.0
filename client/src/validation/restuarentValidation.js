export function restuarentInfoValidation(form) {
  const errors = {};

  if (!form.resturentName) {
    errors.resturentName = "Restuarent Name is Required";
  }

  if (!form.type) {
    errors.type = "Please Select a Restuarent type Veg or Non-Veg";
  }

  if (!form.cuisineType) {
    errors.cuisineType = "Please Select Restuarent Cuisine";
  }

  if (!form.description) {
    errors.description = "Please add Resturent Information";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function restuarentLocationValidation(form) {
  const errors = {};

  if (!form?.pincode) {
    errors.pincode = "Pincode is required";
  } else if (!/^\d{6}$/.test(form?.pincode)) {
    errors.pincode = "Pincode must be 6 digits";
  }

  if (!form.street) {
    errors.street = "Please street is Required";
  }

  if (!form.radius) {
    errors.radius = "Please Select Radius";
  }

  if (!form.city) {
    errors.city = "Please Select City";
  }

  if (!form.state) {
    errors.state = "Please Select State";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}
