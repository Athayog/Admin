import { buildCollection } from "@camberi/firecms";

export const testimonialsCollection = buildCollection({
  path: "testimonials",
  name: "Testimonials",
  group: "Old Forms No Longer Used",
  description: "Collection of user testimonials including name, review text, star rating, and publication status.",
  permissions: () => ({
    edit: true,
    create: true,
    delete: true,
  }),
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
