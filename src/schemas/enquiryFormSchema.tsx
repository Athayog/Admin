import { buildCollection } from "@camberi/firecms";

export const enquiryFormsCollection = buildCollection({
  path: "enquiryForms",
  name: "Enquiry Form",
  permissions: () => ({
    edit: false,
    create: false,
    delete: true,
  }),
  singularName: "enquiryform",
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
      columnWidth: 500,
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
      columnWidth: 400,
    },
    details: {
      name: "Details",
      validation: { required: true },
      dataType: "string",
      columnWidth: 800,
    },
    createdAt: {
      name: "Submission Date",
      validation: { required: true },
      dataType: "date",
    },
  },
});
