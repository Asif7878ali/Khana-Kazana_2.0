import mongoose from "mongoose";
import securityQuestionSchema from "../schemas/security_question_schema.js";


const SecurityQuestion = mongoose.model("SecurityQuestion",securityQuestionSchema);

export default SecurityQuestion;