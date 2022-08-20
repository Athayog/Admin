import { buildCollection } from "@camberi/firecms";

export const formsCollection = buildCollection({
  path: "forms",
  name: "Forms",
  singularName: "form",
  permissions: () => ({
    edit: false,
    create: false,
    delete: true,
  }),
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    phone: {
      name: "Phone",
      validation: { required: true },
      dataType: "string",
    },
    gender: {
      name: "Gender",
      validation: { required: true },
      dataType: "string",
    },
    course: {
      name: "Course",
      validation: { required: true },
      dataType: "string",
    },
    conditions: {
      name: "Conditions",
      validation: { required: true },
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
    experience: {
      name: "Experience",
      validation: { required: true },
      dataType: "string",
    },
    referral: {
      name: "referral",
      validation: { required: true },
      dataType: "string",
    },
    style: {
      name: "Style",
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
