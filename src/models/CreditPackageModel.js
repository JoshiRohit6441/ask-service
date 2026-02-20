import mongoose from "mongoose";

const CreditPackageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    credits: {
      type: Number,
      required: true,
      min: 1,
    },
    bonus_credits: {
      type: Number,
      default: 0,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "EUR",
      trim: true,
    },
    per_credit_price: {
      type: Number,
      default: null,
    },
    is_most_popular: {
      type: Boolean,
      default: false,
    },
    sort_order: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

CreditPackageSchema.index({ status: 1, sort_order: 1 });
CreditPackageSchema.index(
  { name: 1 },
  { unique: true, partialFilterExpression: { deletedAt: null } }
);

const CreditPackage = mongoose.model("CreditPackage", CreditPackageSchema);
export default CreditPackage;
