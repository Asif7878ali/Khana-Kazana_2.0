import SecurityQuestion from "../modals/security_question_modal.js";

const securityQuestionSeeder = async () => {
  await SecurityQuestion.deleteMany();
  await SecurityQuestion.insertMany([
    { value: "Question_1", label: "What was the name of your first pet?" },
    { value: "Question_2", label: "What is your mother's name?" },
    {
      value: "Question_3",
      label: "What was the name of your elementary school?",
    },
    {
      value: "Question_4",
      label: "What was the make and model of your first car?",
    },
    {
      value: "Question_5",
      label: "What is the name of the street you grew up on?",
    },
    { value: "Question_6", label: "What was your favorite food as a child?" },
    {
      value: "Question_7",
      label: "What is the name of your favorite childhood friend?",
    },
    {
      value: "Question_8",
      label: "What was the name of the first teacher you had a crush on?",
    },
    { value: "Question_9", label: "What is your favorite movie?" },
    {
      value: "Question_10",
      label: "What was the destination of your first vacation?",
    },
    { value: "Question_11", label: "Who is your favorite actor?" },
    { value: "Question_12", label: "Who is your favorite actress?" },
  ]);
  console.log("Security Questions Seeded Successfully ✅");
};

export default securityQuestionSeeder;
