import { buildCollection } from "@camberi/firecms";

export const arambhaForms22collection = buildCollection({
  path: "arambhaForm",
  name: "Arambha Form 2022",
  singularName: "arambhaForm",
  group: 'Arambha Yoga Day Forms',
  description: "Submission records for Arambha Yoga Day 2022, including participant info, contact details, and preferences.",
  permissions: () => ({
    edit: false,
    create: false,
    delete: false,
  }),
  properties: {
    ticketID: {
      name: "Ticket ID",
      validation: { required: true },
      dataType: "string",
    },
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    age: {
      name: "Age",
      validation: { required: true },
      dataType: "string",
    },
    email: {
      name: "Email",
      validation: { required: true },
      dataType: "string",
    },
    phone: {
      name: "Phone",
      validation: { required: true },
      dataType: "string",
    },
    location: {
      name: "Location",
      validation: { required: true },
      dataType: "string",
    },
    member: {
      name: "Member",
      validation: { required: true },
      dataType: "string",
    },
    tshirt: {
      name: "T-Shirt Size",
      validation: { required: true },
      dataType: "string",
    },
    gender: {
      name: "Gender",
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
