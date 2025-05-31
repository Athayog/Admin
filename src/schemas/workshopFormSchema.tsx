import { buildCollection } from "@camberi/firecms";

export const workshopFormCollection = buildCollection({
  path: "workshopForm",
  name: "Workshop Form",
  description: "Workshop form submissions capturing participant's personal, health, emergency, and dietary details.",
  singularName: "workshopForm",
  group: "Live Forms",
  permissions: () => ({
    edit: false,
    create: false,
    delete: false,
  }),
  properties: {
    fullName: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    phoneNumber: {
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
    location: {
      name: "Location",
      validation: { required: true },
      dataType: "string",
    },
    gender: {
      name: "Gender",
      validation: { required: true },
      dataType: "string",
    },
    healthConditions: {
      name: "Health Conditions",
      validation: { required: true },
      dataType: "string",
    },
    currentLocation: {
      name: "Current Location",
      validation: { required: true },
      dataType: "string",
    },
    emergencyContactNameAndRelation: {
      name: "Emergency Contact Name & Relation",
      validation: { required: true },
      dataType: "string",
    },
    emergencyContactNumber: {
      name: "Emergency Contact Number",
      validation: { required: true },
      dataType: "string",
    },
    pageSource: {
      name: "Page Source",
      validation: { required: true },
      dataType: "string",
    },
    preferredDietaryPreferences: {
      name: "Preferred Dietary Preferences",
      validation: { required: true },
      dataType: "string",
    },
    weight: {
      name: "Weight",
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
