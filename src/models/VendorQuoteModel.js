import mongoose from "mongoose";

const VendorQuoteSchema = new mongoose.Schema(
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
    quote_price: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "EUR",
      trim: true,
    },
    service_description: {
      type: String,
      required: true,
      trim: true,
    },
    available_start_date: {
      type: Date,
      required: true,
    },
    quote_valid_days: {
      type: Number,
      default: 7,
      min: 1,
    },
    attachment_url: {
      type: String,
      default: null,
    },
    included_items: {
      type: [String],
      default: [],
    },
    excluded_items: {
      type: [String],
      default: [],
    },
    availability_text: {
      type: String,
      default: null,
      trim: true,
    },
    status: {
      type: String,
      enum: ["SENT", "ACCEPTED", "IGNORED", "WITHDRAWN"],
      default: "SENT",
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

VendorQuoteSchema.index({ vendor_id: 1, service_request_id: 1 });
VendorQuoteSchema.index({ vendor_id: 1, createdAt: -1 });
VendorQuoteSchema.index({ service_request_id: 1 });

const VendorQuote = mongoose.model("VendorQuote", VendorQuoteSchema);
export default VendorQuote;
