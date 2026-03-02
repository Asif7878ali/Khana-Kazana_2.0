export function signInValidation(formData) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData?.email) {
    errors.email = "error.emailReq";
  } else if (!emailRegex.test(formData?.email)) {
    errors.email = "error.enterValidEmail";
  }

  if (!formData?.password) {
    errors.password = "error.passReq";
  } else if (formData?.password?.length < 6) {
    errors.password = "error.passLeastSixchar";
  }

  if (!formData?.c_password) {
    errors.c_password = "error.confirmPassReq";
  } else if (formData?.password !== formData?.c_password) {
    errors.c_password = "";
  }

  if (!formData?.checked) {
    errors.checked = "error.youAcceptTermsConditions";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function profileValidate(formData) {
  const errors = {};

  if (!formData?.fname) {
    errors.fname = "error.firstNameReq";
  } else if (formData?.fname?.length < 3) {
    errors.fname = "error.firstNameMustLeastThreeChar";
  }

  if (!formData?.lname) {
    errors.lname = "error.lastNameReq";
  } else if (formData?.lname?.length < 3) {
    errors.lname = "error.lastNameMustLeastThreeChar";
  }

  if (!formData?.number) {
    errors.number = "error.phoneNumberReq";
  } else if (!/^\d{10}$/.test(formData?.number)) {
    errors.number = "error.phoneNumberExactlyTenDig";
  }

  if (!formData?.dob) {
    errors.dob = "error.dateBirthReq";
  }

  if (!formData?.gender) {
    errors.gender = "error.genderReq";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function addAdressValidate(formData) {
  const errors = {};

  if (!formData?.zip) {
    errors.zip = "error.pinReq";
  } else if (!/^\d{6}$/.test(formData?.zip)) {
    errors.zip = "error.pincodeSixDigits";
  }

  if (!formData?.house) {
    errors.house = "error.houseReq";
  }

  if (!formData?.street) {
    errors.street = "error.streetAddressReq";
  }

  if (!formData?.area) {
    errors.area = "error.areaSectorReq";
  }

  if (!formData?.state) {
    errors.state = "error.selState";
  }

  if (!formData?.city) {
    errors.city = "error.selCity";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function securityQuestionValidation(formData) {
  const errors = {};

  if (!formData?.que1) {
    errors.que1 = "error.selSecQues";
  }

  if (!formData?.ans1) {
    errors.ans1 = "error.ansReq";
  } else if (formData?.ans1?.length < 3) {
    errors.ans1 = "error.enterMeaningfulAnsLeastThreeChar";
  }

  if (!formData?.que2) {
    errors.que2 = "error.selSecQues";
  } else if (formData?.que2 === formData?.que1) {
    errors.que2 = "error.selDifferentSecQues";
  }

  if (!formData?.ans2) {
    errors.ans2 = "error.ansReq";
  } else if (formData?.ans2?.length < 3) {
    errors.ans2 = "error.enterMeaningfulAnsLeastThreeChar";
  }

  if (!formData?.que3) {
    errors.que3 = "error.selSecQues";
  } else if (formData?.que3 === formData?.que1 || formData?.que3 === formData?.que2) {
    errors.que3 = "error.selDifferentSecQues";
  }

  if (!formData?.ans3) {
    errors.ans3 = "error.ansReq";
  } else if (formData?.ans3?.length < 3) {
    errors.ans3 = "error.enterMeaningfulAnsLeastThreeChar";
  }
  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function bankDetailValidation(formData) {
  const errors = {};

  if (!formData?.acountHolderName) {
    errors.acountHolderName = "error.accHolderNameReq";
  } else if (formData?.acountHolderName?.length < 3) {
    errors.acountHolderName = "error.accHolderNameThreeCharLong";
  }

  if (!formData?.accountNumber) {
    errors.accountNumber = "error.accNumberReq";
  } else {
    const accountNumber = formData.accountNumber.trim();
    // Check if the account number is numeric or alphanumeric
    const isNumeric = /^\d+$/.test(accountNumber);
    const isAlphanumeric = /^[A-Za-z0-9]+$/.test(accountNumber);

    if (!isNumeric && !isAlphanumeric) {
      errors.accountNumber = "error.accNumberLettersNum";
    } else if (isNumeric) {
      // Numeric account number: Check length (9–18 digits for most Indian banks)
      if (accountNumber.length < 9 || accountNumber.length > 18) {
        errors.accountNumber = "error.accNumbeNineDigits";
      }
    } else if (isAlphanumeric) {
      // Allow 6–20 characters for alphanumeric accounts
      if (accountNumber.length < 6 || accountNumber.length > 20) {
        errors.accountNumber = "error.alphanumericAccNumberSixChar";
      }
    }
  }

  if (!formData?.c_accountNumber) {
    errors.c_accountNumber = "Confirm password is required.";
  } else if (formData?.accountNumber !== formData?.c_accountNumber) {
    errors.c_accountNumber = "";
  }

  if (!formData?.bank) {
    errors.bank = "error.selBank";
  }

  if (!formData?.ifsc) {
    errors.ifsc = "error.ifscReq";
  } else {
    const ifsc = formData.ifsc.trim();
    if (!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(ifsc)) {
      errors.ifsc = "error.invalidIFSCFormatEx";
    }
  }

  if (!formData?.bankDocumentUpload) {
    errors.bankDocumentUpload = "error.bankDocReq";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}

export function verificationDocumentValidation(formData) {
  const errors = {};
  if (!formData?.aadhar) {
    errors.aadhar = "error.aadharNumReq";
  } else if (!/^[2-9]{1}[0-9]{11}$/.test(formData.aadhar)) {
    errors.aadhar = "error.invalidAadharumbDigitsStartZeroOne";
  }

  if (!formData?.c_aadhar) {
    errors.c_aadhar = "error.confirmAadhar";
  } else if (formData?.aadhar !== formData?.c_aadhar) {
    errors.c_aadhar = "";
  }

  if (!formData?.aadharfile) {
    errors.aadharfile = "error.aadharDocReq";
  }
  if (!formData?.pancard) {
    errors.pancard = "error.panNumReq";
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pancard)) {
    errors.pancard = "error.invalidPANNumEx";
  }

  if (!formData?.c_pancard) {
    errors.pancard = "error.ConfirmPancard";
  } else if (formData?.pancard !== formData?.c_pancard) {
    errors.c_pancard = "";
  }

  if (!formData?.pancardfile) {
    errors.pancardfile = "error.panDocReq";
  }

  if (!formData?.fssai) {
    errors.fssai = "error.fssaiNumReq";
  } else if (!/^[0-9]{14}$/.test(formData.fssai)) {
    errors.fssai = "error.invalidFSSAINumForteenDigits";
  }

  if (!formData?.c_fssai) {
    errors.c_fssai = "error.confirmPan";
  } else if (formData?.fssai !== formData?.c_fssai) {
    errors.c_fssai = "";
  }

  if (!formData?.fssaifile) {
    errors.fssaifile = "error.fssaiDocReq";
  }

  if (!formData?.gst) {
    errors.gst = "error.gstNumReq";
  } else if (
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
      formData.gst.toUpperCase()
    )
  ) {
    errors.gst = "error.invalidGSTNumEx";
  }

  if (!formData?.c_gst) {
    errors.c_gst = "error.confirmGSTNum";
  } else if (formData?.gst !== formData?.c_gst) {
    errors.c_gst = "";
  }

  const isvalid = Object.keys(errors).length === 0;
  return { errors, isvalid };
}
