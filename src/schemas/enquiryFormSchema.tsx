import { buildCollection } from "@camberi/firecms";

export const enquiryFormsCollection = buildCollection({
  path: "enquiryForms",
  name: "Enquiry Form",

  singularName: "enquiryform",
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    phone: {
      name: "phone",
      validation: { required: true },
      dataType: "string",
    },
    email: {
      name: "Email",
      validation: { required: true },
      dataType: "string",
    },
    details: {
      name: "Details",
      validation: { required: true },
      dataType: "string",
    },
    createdAt: {
      name: "Submission Date",
      validation: { required: true },
      dataType: "date",
    },
  },
});
