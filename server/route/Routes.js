import express from "express";
import {
  register_api,
  profile_api,
  address_api,
  securityQuestions_api,
  bankDetails_api,
} from "../controller/auth_controller.js";
import {
  validateAddress,
  validateBankDetails,
  validateProfile,
  validateRegister,
  validateSecurityQuestions,
} from "../utils/validation/validateRegister.js";
import { upload_user_image_api } from "../controller/images_upload_controller.js";
import { UserImageUpload } from "../middleware/users_image.js";
import { bank_api, city_api, security_question_api, state_api } from "../controller/get_data_controller.js";

const Route = express.Router();

//All Routes
Route.post("/auth/register", validateRegister, register_api); // first is validation next is api
Route.post(
  "/users/profile/image",
  UserImageUpload.single("profileImage"),
  upload_user_image_api,
); // first middleware then api
Route.put("/auth/profile/:id", validateProfile, profile_api);
Route.get("/indian/state", state_api);
Route.get("/indian/bank", bank_api);
Route.get("/indian/cities/:stateCode", city_api);
Route.get("/securityQuestion", security_question_api);
Route.put("/auth/address/:id", validateAddress, address_api);
Route.put("/auth/bank/:id", validateBankDetails, bankDetails_api);
Route.put(
  "/auth/securityQuestion/:id",
  validateSecurityQuestions,
  securityQuestions_api,
);

export default Route;
