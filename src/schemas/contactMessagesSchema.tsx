import { buildCollection } from "@camberi/firecms";
import { RecordCount } from "../components/RecordCount";

export const contactMessagesCollection = buildCollection({
  path: "contactMessages",
  name: "Contact Messages",
  singularName: "contactMessages",
  description: "Messages submitted through the website contact form. Useful for user queries, feedback, or support requests.",
  group: "Live Forms",
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
    email: {
      name: "email",
      validation: { required: true },
      dataType: "string",
      columnWidth: 400,
    },
    message: {
      name: "Message",
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
