import { buildCollection } from "@camberi/firecms";

export const imagesCollection = buildCollection({
  path: "images",
  name: "Images",
  group: "Old Forms No Longer Used",
  description: "Image assets used across the site with SEO alt text, type, and visibility settings.",
  permissions: () => ({
    edit: true,
    create: true,
    delete: true,
  }),
  singularName: "image",
  properties: {
    imageName: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    alt: {
      name: "Alt Text (SEO)",
      validation: { required: true },
      dataType: "string",
    },
    imageType: {
      name: "Image For",
      validation: { required: true },
      dataType: "string",
    },
    imageUrl: {
      name: "Url",
      validation: { required: true },
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
        maxSize: 1024 * 1024,
        metadata: {
          cacheControl: "max-age=1000000",
        },
        fileName: (context) => {
          return context.file.name;
        },
      },
    },
    isActive: {
      name: "Publish",
      validation: { required: true },
      dataType: "boolean",
    },
    isMobile: {
      name: "Mobile",
      validation: { required: true },
      dataType: "boolean",
    },
    position: {
      name: "Image Position",
      validation: { required: true },
      dataType: "number",
    },
    createdAt: {
      name: "Published",
      validation: { required: true },
      dataType: "date",
    },
  },
});
