import fileUpload from "../config/MulterConfig.js";


const userProfile=fileUpload("public/user")
export const userProfileUpload=userProfile.fields([{name:"profile_pic",maxCount:1}]);

const serviceCategory=fileUpload("public/service-category")
export const serviceCategoryUpload=serviceCategory.fields([{name:"image",maxCount:1}]);

const serviceDocument=fileUpload("public/document")
export const serviceDocumentUpload=serviceDocument.any();

const quoteDocument=fileUpload("public/quote-document");
export const quoteDocumentUpload=quoteDocument.fields([{ name: "attachment", maxCount: 1 }]);


const chatPath = fileUpload("public/chat");
export const chatMediaUpload = chatPath.fields([
  { name: "media" },
]);