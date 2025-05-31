import { buildCollection } from "@camberi/firecms";

export const weightLossFormCollection = buildCollection({
  path: "weightLossForm",
  name: "Weight Loss Form",
  description: "Weight Loss form submissions capturing personal, health, and contact details.",
  singularName: "weightLossForm",
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
    gender: {
      name: "Gender",
      validation: { required: true },
      dataType: "string",
    },
    healthConditions: {
      name: "Health Conditions",
      validation: { required: true },
      dataType: "string",
    },
    weight: {
      name: "Weight",
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
