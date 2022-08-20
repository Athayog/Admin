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

  singularName: "User",
  path: "users",
  permissions: ({ authController }) => ({
    edit: false,
    create: false,
    // we have created the roles object in the navigation builder
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
