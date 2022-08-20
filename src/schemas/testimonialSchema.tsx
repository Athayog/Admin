import { buildCollection } from "@camberi/firecms";

export const testimonialsCollection = buildCollection({
  path: "testimonials",
  name: "Testimonials",

  singularName: "testimonial",
  properties: {
    name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    review: {
      name: "Review",
      validation: { required: true },
      dataType: "string",
    },
    isActive: {
      name: "Published",
      validation: { required: true },
      dataType: "boolean",
    },
    stars: {
      name: "Stars",
      validation: { required: true },
      dataType: "string",
    },
  },
});
