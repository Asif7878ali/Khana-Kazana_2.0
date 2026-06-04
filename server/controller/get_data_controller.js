import Bank from "../database/modals/banks_modal.js";
import City from "../database/modals/city_modal.js";
import SecurityQuestion from "../database/modals/security_question_modal.js";
import State from "../database/modals/states_modal.js";

// STATE IN API
export const state_api = async (req, res) => {
  console.log("➡️ State API hit");
  try {
    const states = await State.find().select("code name").sort({ name: 1 });

    return res.status(200).json({
      success: true,
      count: states.length,
      data: states,
    });
  } catch (error) {
    console.error("State API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch states",
    });
  }
};

// City IN API
export const city_api = async (req, res) => {
  console.log("➡️ city API hit");
  try {
    const { stateCode } = req.params;

    const cities = await City.find({
      stateCode: stateCode.toUpperCase(),
    })
      .select("name")
      .sort({ name: 1 });

    if (cities.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Invalid state code or no cities found",
      });
    }

    return res.status(200).json({
      success: true,
      stateCode: stateCode.toUpperCase(),
      count: cities.length,
      cities,
    });
  } catch (error) {
    console.error("City API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch cities",
    });
  }
};

// BANK IN API
export const bank_api = async (req, res) => {
  console.log("➡️ Bank API hit");
  try {
    const banks = await Bank.find().select("value label").sort({ label: 1 });

    return res.status(200).json({
      success: true,
      count: banks.length,
      banks,
    });
  } catch (error) {
    console.error("Bank API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch banks",
    });
  }
};

export const security_question_api = async (req, res) => {
  console.log("➡️ Security Question API hit");
  try {
    const securityQuestions = await SecurityQuestion.find()
      .select("value label")
      .sort({ value: 1 });

    return res.status(200).json({
      success: true,
      count: securityQuestions.length,
      securityQuestions,
    });
  } catch (error) {
    console.error("Security Question API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch security questions",
    });
  }
};
