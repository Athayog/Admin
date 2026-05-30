import { buildCollection } from "@camberi/firecms";
import { RecordCount } from "../components/RecordCount";

export const formsCollection = buildCollection({
  path: "forms",
  name: "Forms",
  singularName: "form",
  group: "Old Forms No Longer Used",
  description: "Deprecated form used for capturing course interests, experience, and referral details from users.",
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
