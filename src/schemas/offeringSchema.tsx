import { buildCollection } from "@camberi/firecms";

export const offeringsCollection = buildCollection({
  path: "offerings",
  name: "Courses",
  singularName: "offering",
  group: "Old Forms No Longer Used",
  description: "Course offerings including trial and base courses, with pricing and availability details.",
  permissions: () => ({
    edit: true,
    create: true,
    delete: false,
  }),
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    price: {
      name: "Price",
      validation: { required: true },
      dataType: "number",
    },
    isTrial: {
      name: "Trial Course",
      validation: { required: true },
      dataType: "boolean",
    },
    isGeneral: {
      name: "Base Course",
      validation: { required: true },
      dataType: "boolean",
    },
    isActive: {
      name: "Publish",
      validation: { required: true },
      dataType: "boolean",
    },
    description: {
      name: "Description",
      validation: { required: true },
      dataType: "string",
    },
    days: {
      name: "Days",
      validation: { required: true },
      dataType: "string",
    },
    type: {
      name: "Type",
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
