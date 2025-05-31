import { buildCollection } from "@camberi/firecms";

export const trialClassFormCollection = buildCollection({
  path: "trialClassesv2",
  name: "Trial Classes Form",
  singularName: "trialClassesv2",
  description: "Collection of user enquiries for trial classes including contact details and location.",
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
    createdAt: {
      name: "Submission Date",
      validation: { required: true },
      dataType: "string",
    },
  },
});
