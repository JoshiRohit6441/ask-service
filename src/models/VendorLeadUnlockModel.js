import mongoose from "mongoose";

const VendorLeadUnlockSchema = new mongoose.Schema(
  {
    vendor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service_request_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceRequest",
      required: true,
    },
    credits_spent: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

VendorLeadUnlockSchema.index({ vendor_id: 1, service_request_id: 1 }, { unique: true });
VendorLeadUnlockSchema.index({ vendor_id: 1, createdAt: -1 });

const VendorLeadUnlock = mongoose.model("VendorLeadUnlock", VendorLeadUnlockSchema);
export default VendorLeadUnlock;
