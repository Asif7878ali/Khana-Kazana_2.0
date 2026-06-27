import User from "../database/modals/user_modal.js";

export const checkOnboardingStep = (requiredStep) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          msg: "User not found",
        });
      }

      console.log(
        `User's current onboarding step: ${user.onboardingStep}, Required step: ${requiredStep}`,
      );

      if (user?.onboardingStep !== requiredStep) {
        return res.status(400).json({
          success: false,
          msg: `Please complete Step ${requiredStep} first.`,
        });
      }

      req.user = user;
      next();
    } catch (err) {
      return res.status(500).json({
        success: false,
        msg: err.message,
      });
    }
  };
};
