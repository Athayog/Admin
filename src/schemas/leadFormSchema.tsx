import { buildCollection } from "@camberi/firecms";

export const leadformsCollection = buildCollection({
  path: "leadForms",
  name: "Lead Form",
  singularName: "leadform",
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
      columnWidth: 500,
    },
    phone: {
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

    createdAt: {
      name: "Submission Date",
      validation: { required: true },
      dataType: "date",
    },
  },
});
