import { buildCollection } from "@camberi/firecms";

export const resumeFormsCollection = buildCollection({
  path: "resume",
  name: "Resume Form",
  singularName: "resume",
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
    phone: {
      name: "Number",
      validation: { required: true },
      dataType: "string",
    },
    fileUrl: {
      name: "PDF URL",
      validation: { required: true },
      dataType: "string",
    },
    createdAt: {
      name: "createdAt",
      validation: { required: true },
      dataType: "date",
    },
    currentCompany: {
      name: "Current Company",
      validation: { required: true },
      dataType: "string",
    },
    currentCTC: {
      name: "Current CTC",
      validation: { required: true },
      dataType: "string",
    },
    designation: {
      name: "Designation",
      validation: { required: true },
      dataType: "string",
    },
    email: {
      name: "Email",
      validation: { required: true },
      dataType: "string",
    },
   
    expectedCTC: {
      name: "Expected CTC",
      validation: { required: true },
      dataType: "string",
    },
    experienceInYears: {
      name: "Experience",
      validation: { required: true },
      dataType: "string",
    },
    flexibleWithSplitShift: {
      name: "Flexible",
      validation: { required: true },
      dataType: "string",
    },
    offerInHand:{
      name: "Offer In Hand",
      dataType: "string",
      validation: { required: false },
    },
    currentLocation: {
      name: "Location",
      dataType: "string",
      validation: { required: false },
    },
  
    noticePeriod: {
      name: "Notice Period",
      validation: { required: true },
      dataType: "string",
    },
    
    questionsOrComments: {
      name: "Questions",
      validation: { required: true },
      dataType: "string",
    },
    willingToRelocate: {
      name: "Relocate",
      validation: { required: true },
      dataType: "string",
    },
    
  },
});
