import Cities from "../data/IndianCity.js";
import State from "../data/IndianStates.js";

// STATE IN API
export const state_api = async (req, res) => {
  console.log("➡️ State API hit");
  res.json({
    success: true,
    state: State,
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
