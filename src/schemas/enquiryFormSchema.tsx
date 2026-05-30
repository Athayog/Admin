import { buildCollection } from "@camberi/firecms";
import { RecordCount } from "../components/RecordCount";

export const enquiryFormsCollection = buildCollection({
  path: "enquiryForms",
  name: "Enquiry Form",
  group: "Old Forms No Longer Used",
  description: "Legacy version of the user enquiry form previously used for capturing contact and interest details.",
  permissions: () => ({
    edit: false,
    create: false,
    delete: true,
  }),
  singularName: "enquiryform",
  extraActions: ({ path }) => <RecordCount path={path} />,
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
      columnWidth: 500,
    },
    phone: {
      name: "phone",
      validation: { required: true },
      dataType: "string",
    },
    email: {
      name: "Email",
      validation: { required: true },
      dataType: "string",
      columnWidth: 400,
    },
    details: {
      name: "Details",
      validation: { required: true },
      dataType: "string",
      columnWidth: 800,
    },
    createdAt: {
      name: "Submission Date",
      validation: { required: true },
      dataType: "date",
    },
  },
});
