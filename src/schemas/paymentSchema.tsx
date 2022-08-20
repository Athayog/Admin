import { buildCollection } from "@camberi/firecms";

type Payment = {
  courseName: string;
  courseId: string;
  duration: string;
  orderId: string;
  price: number;
};

export const paymentCollection = buildCollection<Payment>({
  path: "payments",
  name: "Payment",
  singularName: "payments",
  properties: {
    courseId: {
      name: "Course Id",
      validation: { required: true },
      dataType: "string",
    },
    courseName: {
      name: "Course Name",
      validation: { required: true },
      dataType: "string",
    },
    duration: {
      name: "Duration",
      validation: { required: true },
      dataType: "string",
    },
    orderId: {
      name: "Order Id",
      validation: { required: true },
      dataType: "string",
    },
    price: {
      name: "Price",
      validation: { required: true },
      dataType: "number",
    },
  },
});
