import { buildCollection } from "@camberi/firecms";

export const arambhaFormsCollection = buildCollection({
  path: "arambhaform",
  name: "Arambha Form",
  singularName: "arambhaform",
  permissions: () => ({
    edit: false,
    create: false,
    delete: false,
  }),
  properties: {
    age: {
      name: "Age",
      validation: { required: true },
      dataType: "string",
    },
    category: {
      name: "Category",
      validation: { required: true },
      dataType: "string",
    },
    createdAt: {
      name: "Submission Date",
      validation: { required: true },
      dataType: "date",
    },
    email: {
      name: "Email",
      validation: { required: true },
      dataType: "string",
    },
    gender: {
      name: "Gender",
      validation: { required: true },
      dataType: "string",
    },
    membershipNumber: {
      name: "Membership Number",
      dataType: "string",
      validation: { required: false },
    },
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
    ticketID: {
      name: "Ticket ID",
      validation: { required: true },
      dataType: "string",
    },
    tshirt: {
      name: "T-Shirt Size",
      validation: { required: true },
      dataType: "string",
    },
  },
});
