import { buildCollection } from "@camberi/firecms";

export const enquiryFormv2Collection = buildCollection({
  path: "enquiryFormsv2",
  name: "Enquiry Form",
  singularName: "enquiryFormsv2",
  description: "Enquiries submitted by users through the main website or landing pages. Used for initial contact and lead capture.",
  group: "Live Forms",
  permissions: () => ({
    edit: false,
    create: false,
    delete: false,
  }),
  properties: {
    fullName: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    phoneNumber: {
      name: "Phone",
      validation: { required: true },
      dataType: "string",
    },
    email: {
      name: "email",
      validation: { required: true },
      dataType: "string",
      columnWidth: 400,
    },
    location: {
      name: "Location",
      validation: { required: true },
      dataType: "string",
    },
    pageSource: {
      name: "Source Of Entry",
      validation: { required: true },
      dataType: "string",
    },
    createdAt: {
      name: "Submission Date",
      validation: { required: true },
      dataType: "string",
    },
  },
});
