import { Banks, Cities, SecurityQuestion, States } from "../data/getdata.js";

// STATE IN API
export const state_api = async (req, res) => {
  console.log("➡️ State API hit");
  res.json({
    success: true,
    state: States,
  });
};

// City IN API
export const city_api = async (req, res) => {
  console.log("➡️ city API hit");
  const { stateCode } = req.params;
  console.log(stateCode)
  const stateCities = Cities[stateCode.toUpperCase()];
  if (!stateCities) {
    return res.status(404).json({
      success: false,
      message: "Invalid state code or no cities found",
    });
  }
  res.json({
    success: true,
    stateCode: stateCode.toUpperCase(),
    cities: stateCities,
  });
};

// BANK IN API
export const bank_api = async (req, res) => {
  console.log("➡️ Bank API hit");
  res.json({
    success: true,
    banks: Banks,
  });
};

export const security_question_api = async (req, res) => {
  console.log("➡️ Security Question API hit");
  res.json({
    success: true,
    securityQuestions: SecurityQuestion,
  });
}
