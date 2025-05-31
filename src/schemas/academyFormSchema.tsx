import { buildCollection } from "@camberi/firecms";

export const academyFormv2Collection = buildCollection({
  path: "academyFormv2",
  name: "Academy Form",
  singularName: "academyFormv2",
  group: "Live Forms",
  description: "Captures participant details, contact information, and registration source for Athayog Academy programs.",
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
