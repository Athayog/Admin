import { buildCollection } from "@camberi/firecms";
import { paymentCollection } from "./paymentSchema";
type Customer = {
  name: string;
  email: string;
  phone: string;
  orderId: string;
};

export const usersCollection = buildCollection<Customer>({
  name: "Users",
  group: "Live Forms",
  singularName: "User",
  path: "users",
  description: "Collection of user profiles storing name, email, phone, and associated order ID (with nested payment details).",
  permissions: ({ authController }) => ({
    edit: false,
    create: false,
    delete: false,
  }),
  subcollections: [paymentCollection],
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },

    email: {
      name: "email",
      description: "Email of the user",
      validation: { required: true },
      dataType: "string",
    },
    phone: {
      name: "phone",
      description: "Phone of the user",
      validation: { required: true },
      dataType: "string",
    },
    orderId: {
      name: "order ID",
      description: "Phone of the user",
      validation: { required: true },
      dataType: "string",
    },
  },
});
