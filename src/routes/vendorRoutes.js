import express from "express";
import handleResponse from "../../utils/http-response.js";
import {
  changePassword,
  forgotPassword,
  getAllServices,
  getDocumentRequiredForService,
  getProfile,
  loginVendor,
  registerVendor,
  resendOTP,
  resendPhoneEmailOTP ,
  resetPassword,
  updateDocumentRequiredForService ,
  updateUserServiceData ,
  updateVendorProfile ,
  verifyOTP ,
  verifyRegistrationOTP ,
  availableLeads ,
  singleService ,
  getBusinessInfo ,
  createUpdateBusinessInfo ,
  deleteAccount ,
  saveNotificationPreferences ,
  getNotificationPreferences ,
  VerificationDocument ,
  allReviews ,
  getTransactions
} from "../controller/vendor/AuthController.js";
import { serviceDocumentUpload, userProfileUpload } from "../../utils/multer.js";
import {
  authenticateForgotPasswordToken,
  checkRoleAuth,
  userAuthenticateToken,
} from "../../middleware/auth.js";

const router = express.Router();

// register vendor
router.post("/register", registerVendor);

// resend otp
router.post("/resend-otp", resendOTP);

// verify otp
router.post("/verify-otp", verifyRegistrationOTP);

// login vendor
router.post("/login", loginVendor);

// update vendor profile
router.put(
  "/update-profile",
  userAuthenticateToken,
  checkRoleAuth(["Vendor"]),
  userProfileUpload,
  updateVendorProfile,
);

router.get(
  "/get-profile",
  userAuthenticateToken,
  checkRoleAuth(["Vendor"]),
  getProfile,
);

// change password
router.put(
  "/change-password",
  userAuthenticateToken,
  checkRoleAuth(["Vendor"]),
  changePassword,
);


router.put(
  "/delete-account",
  userAuthenticateToken,
  checkRoleAuth(["Vendor"]),
  deleteAccount,
);


// forgot password
router.post("/forgot-password", forgotPassword);

// resend phone email OTP
router.post("/resend-phone-email-otp", resendPhoneEmailOTP);

// verify forgot password otp
router.post("/verify-forgot-password-otp", verifyOTP);

// reset password
router.post("/reset-password", authenticateForgotPasswordToken("forgot-password"), resetPassword);

// get all services
router.get("/get-all-services",   getAllServices);

// get all services document required
router.get("/get-all-services-document-required", userAuthenticateToken, checkRoleAuth(["Vendor"]), getDocumentRequiredForService);

// update user's service data
router.put("/update-service-data", userAuthenticateToken , checkRoleAuth(["Vendor"]) , updateUserServiceData);

// upload service selection document
router.get("/upload-service-selection-document",userAuthenticateToken ,serviceDocumentUpload, updateDocumentRequiredForService);

router.get("/available-leads", userAuthenticateToken , checkRoleAuth(["Vendor"]) , availableLeads);
router.get("/service/:id", userAuthenticateToken , checkRoleAuth(["Vendor"]) , singleService);


router.get("/business-information", userAuthenticateToken , checkRoleAuth(["Vendor"]) , getBusinessInfo);
router.put("/business-information", userAuthenticateToken , checkRoleAuth(["Vendor"]) , createUpdateBusinessInfo);

router.get("/notification", userAuthenticateToken , checkRoleAuth(["Vendor"]) , getNotificationPreferences);
router.put("/notification", userAuthenticateToken , checkRoleAuth(["Vendor"]) , saveNotificationPreferences);
router.get("/verification-documents", userAuthenticateToken , checkRoleAuth(["Vendor"]) , VerificationDocument);

router.get("/all-review", userAuthenticateToken , checkRoleAuth(["Vendor"]) , allReviews);
router.get("/all-transaction", userAuthenticateToken , checkRoleAuth(["Vendor"]) , getTransactions);







router.get("/", (req, resp) => {
  return handleResponse(200, "Vendor test successful", {}, resp);
});

export default router;
