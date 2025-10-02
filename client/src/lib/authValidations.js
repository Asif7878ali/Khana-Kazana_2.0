export function signInValidation(formData) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData?.email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(formData?.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!formData?.password) {
    errors.password = "Password is required.";
  } else if (formData?.password?.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (!formData?.c_password) {
    errors.c_password = "Confirm password is required.";
  } else if (formData?.password !== formData?.c_password) {
    errors.c_password = "";
  }

  if (!formData?.checked) {
    errors.checked = "You must accept the Terms & Conditions.";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function profileValidate(formData) {
  const errors = {};

  if (!formData?.fname) {
    errors.fname = "First Name is required";
  } else if (formData?.fname?.length < 3) {
    errors.fname = "First Name must be at least 3 characters";
  }

  if (!formData?.lname) {
    errors.lname = "Last Name is required";
  } else if (formData?.lname?.length < 3) {
    errors.lname = "Last Name must be at least 3 characters";
  }

  if (!formData?.number) {
    errors.number = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData?.number)) {
    errors.number = "Phone number must be exactly 10 digits";
  }

  if (!formData?.dob) {
    errors.dob = "Date of Birth is required";
  }

  if (!formData?.gender) {
    errors.gender = "Gender is required";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function addAdressValidate(formData) {
  const errors = {};

  if (!formData?.zip) {
    errors.zip = "Pincode is required";
  } else if (!/^\d{6}$/.test(formData?.zip)) {
    errors.zip = "Pincode must be 6 digits";
  }

  if (!formData?.house) {
    errors.house = "House is required";
  }

  if (!formData?.street) {
    errors.street = "Street Address is required";
  }

  if (!formData?.area) {
    errors.area = "Area/Sector is required";
  }

  if (!formData?.state) {
    errors.state = "Please Select a State";
  }

  if (!formData?.city) {
    errors.city = "Plaese Select a City";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function securityQuestionValidation(formData) {
  const errors = {};

  if (!formData?.que1) {
    errors.que1 = "Please Select a Secuirity Question";
  }

  if (!formData?.ans1) {
    errors.ans1 = "Answer is Required";
  } else if (formData?.ans1?.length < 3) {
    errors.ans1 = "Please enter a meaningful answer with at least 3 characters";
  }

  if (!formData?.que2) {
    errors.que2 = "Please Select a Secuirity Question";
  } else if (formData?.que2 === formData?.que1) {
    errors.que2 = "Please select a different security question";
  }

  if (!formData?.ans2) {
    errors.ans2 = "Answer is Required";
  } else if (formData?.ans2?.length < 3) {
    errors.ans2 = "Please enter a meaningful answer with at least 3 characters";
  }

  if (!formData?.que3) {
    errors.que3 = "Please Select a Secuirity Question";
  } else if (formData?.que3 === formData?.que1 || formData?.que3 === formData?.que2) {
    errors.que3 = "Please select a different security question";
  }

  if (!formData?.ans3) {
    errors.ans3 = "Answer is Required";
  } else if (formData?.ans3?.length < 3) {
    errors.ans3 = "Please enter a meaningful answer with at least 3 characters";
  }
  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function bankDetailValidation(formData) {
  const errors = {};

  if (!formData?.acountHolderName) {
    errors.acountHolderName = "Account Holder Name is Required";
  } else if (formData?.acountHolderName?.length < 3) {
    errors.acountHolderName = "Account Holder Name must be 3 Characters long";
  }

  if (!formData?.accountNumber) {
    errors.accountNumber = "Account Number is Required";
  } else {
    const accountNumber = formData.accountNumber.trim();
    // Check if the account number is numeric or alphanumeric
    const isNumeric = /^\d+$/.test(accountNumber);
    const isAlphanumeric = /^[A-Za-z0-9]+$/.test(accountNumber);

    if (!isNumeric && !isAlphanumeric) {
      errors.accountNumber =
        "Account Number must contain only letters and/or numbers";
    } else if (isNumeric) {
      // Numeric account number: Check length (9–18 digits for most Indian banks)
      if (accountNumber.length < 9 || accountNumber.length > 18) {
        errors.accountNumber = "Account Number must be between 9 and 18 digits";
      }
    } else if (isAlphanumeric) {
      // Allow 6–20 characters for alphanumeric accounts
      if (accountNumber.length < 6 || accountNumber.length > 20) {
        errors.accountNumber =
          "Alphanumeric Account Number must be between 6 and 20 characters";
      }
    }
  }

  if (!formData?.c_accountNumber) {
    errors.c_accountNumber = "Confirm password is required.";
  } else if (formData?.accountNumber !== formData?.c_accountNumber) {
    errors.c_accountNumber = "";
  }

  if (!formData?.bank) {
    errors.bank = "Please Select a Bank";
  }

  if (!formData?.ifsc) {
    errors.ifsc = "IFSC is Required";
  } else {
    const ifsc = formData.ifsc.trim();
    if (!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(ifsc)) {
      errors.ifsc = "Invalid IFSC format Ex - SBIN0001234";
    }
  }

  if (!formData?.bankDocumentUpload) {
    errors.bankDocumentUpload = "Bank Documents Required";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function verificationDocumentValidation(formData) {
  const errors = {};
  if (!formData?.aadhar) {
    errors.aadhar = "Aadhar Number Required";
  } else if (!/^[2-9]{1}[0-9]{11}$/.test(formData.aadhar)) {
    errors.aadhar =
      "Invalid Aadhar Number must be 12 digits and not start with 0 or 1";
  }

  if (!formData?.c_aadhar) {
    errors.c_aadhar = "Confirm Aadhar is required.";
  } else if (formData?.aadhar !== formData?.c_aadhar) {
    errors.c_aadhar = "";
  }

  if (!formData?.aadharfile) {
    errors.aadharfile = "Aadhar Card  Required";
  }
  if (!formData?.pancard) {
    errors.pancard = "PAN Number Required";
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pancard)) {
    errors.pancard = "Invalid PAN Number Ex- ABCDE1234F)";
  }

  if (!formData?.c_pancard) {
    errors.pancard = "Confirm Pancard is required.";
  } else if (formData?.pancard !== formData?.c_pancard) {
    errors.c_pancard = "";
  }

  if (!formData?.pancardfile) {
    errors.pancardfile = "Pancard  Required";
  }

  if (!formData?.fssai) {
    errors.fssai = "FSSAI Number Required";
  } else if (!/^[0-9]{14}$/.test(formData.fssai)) {
    errors.fssai = "Invalid FSSAI Number must be 14 digits";
  }

  if (!formData?.c_fssai) {
    errors.c_fssai = "Confirm Pancard is required.";
  } else if (formData?.fssai !== formData?.c_fssai) {
    errors.c_fssai = "";
  }

  if (!formData?.fssaifile) {
    errors.fssaifile = "Fssai  Required";
  }

  if (!formData?.gst) {
    errors.gst = "GST Number Required";
  } else if (
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
      formData.gst.toUpperCase()
    )
  ) {
    errors.gst = "Invalid GST Number Ex- 22ABCDE1234F1Z5)";
  }

  if (!formData?.c_gst) {
    errors.c_gst = "Confirm Pancard is required.";
  } else if (formData?.gst !== formData?.c_gst) {
    errors.c_gst = "";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}
