import { buildCollection } from "@camberi/firecms";
import { RecordCount } from "../components/RecordCount";

export const leadformsCollection = buildCollection({
  path: "leadForms",
  name: "Lead Form",
  singularName: "leadform",
  group: "Old Forms No Longer Used",
  description: "Legacy lead capture forms no longer active but retained for historical data.",
  permissions: () => ({
    edit: false,
    create: false,
    delete: true,
  }),
  extraActions: ({ path }) => <RecordCount path={path} />,
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
