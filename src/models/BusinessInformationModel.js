import mongoose from "mongoose";

const VendorDocumentSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
   
     business_name: {
      type: String,
      required: true,
      trim: true,
    },

    business_address: {
      type: String,
      required: true,
      trim: true,
    },

    postcode: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    vat_number: {
      type: String,
      default: null,
      trim: true,
    },

    company_registration_number: {
      type: String,
      default: null,
      trim: true,
    },

    years_of_activity: {
      type: String,
      default: null,
      trim: true,
    },

    company_size: {
      type: String,
      default: null,
    },

    about_company: {
      type: String,
      default: null,
      trim: true,
    },


  },
  {
    timestamps: true,
    retainNullValues: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  },
);

const BusinessInformation = mongoose.model("BusinessInformation", VendorDocumentSchema);
export default BusinessInformation;
