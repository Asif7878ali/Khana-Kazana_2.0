import express from "express";
import { register_api, profile_api, address_api, securityQuestions_api, bankDetails_api, document_api, login_api} from "../controller/auth_controller.js";
import { validateAddress, validateAdminRegister, validateBankDetails, validateDocument, validateLogin, validateProfile, validateRegister, validateSecurityQuestions } from "../utils/validation/validateRegister.js";
import { upload_user_image_api } from "../controller/images_upload_controller.js";
import { UserImageUpload } from "../middleware/users_image.js";
import { bank_api, city_api, security_question_api, state_api } from "../controller/get_data_controller.js";
import { checkOnboardingStep } from "../middleware/check_onboarding_step.js";
import { authenticateToken } from "../middleware/auth_middleware.js";
import { get_profile_api } from "../controller/user_controller.js";
import { admin_register_api } from "../controller/admin_controller.js";


const Route = express.Router();

// Auth Routes start here
Route.post("/auth/register", validateRegister, register_api); // first is validation next is api
Route.put("/auth/profile/:id", checkOnboardingStep(1), validateProfile, profile_api);
Route.put("/auth/address/:id", checkOnboardingStep(2), validateAddress, address_api);
Route.put("/auth/bank/:id", checkOnboardingStep(3), validateBankDetails, bankDetails_api);
Route.put("/auth/document/:id", checkOnboardingStep(4), validateDocument, document_api);
Route.put("/auth/securityQuestion/:id", checkOnboardingStep(5), validateSecurityQuestions, securityQuestions_api);
Route.post("/auth/login", validateLogin, login_api);
// Auth Routes end here

// User Routes start here
Route.post("/user/profile/image", UserImageUpload.single("profileImage"), upload_user_image_api); // first middleware then api
Route.get("/user/get/profile", authenticateToken, get_profile_api);
// User Routes end here

// Get Data Routes start here
Route.get("/indian/state", state_api);
Route.get("/indian/bank", bank_api);
Route.get("/indian/cities/:stateCode", city_api);
Route.get("/securityQuestion", security_question_api);
// Get Data Routes end here


// Admin Routes start here
Route.post("/admin/register", authenticateToken, validateAdminRegister, admin_register_api);
// Admin Routes end her

export default Route;