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
      name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
      number: {
      name: "Number",
      validation: { required: true },
      dataType: "string",
    },
     pdf_url: {
      name: "PDF URL",
      validation: { required: true },
      dataType: "string",
    },
    createdAt: {
      name: "createdAt",
      validation: { required: true },
      dataType: "date",
    },
    current_company: {
      name: "Current Company",
      validation: { required: true },
      dataType: "string",
    },
    current_ctc: {
      name: "Current CTC",
      validation: { required: true },
      dataType: "string",
    },
    desigation: {
      name: "Desigation",
      validation: { required: true },
      dataType: "string",
    },
    email: {
      name: "Email",
      validation: { required: true },
      dataType: "string",
    },
   
    expected_ctc: {
      name: "Expected CTC",
      validation: { required: true },
      dataType: "string",
    },
    experience: {
      name: "Experience",
      validation: { required: true },
      dataType: "string",
    },
    flexible: {
      name: "Flexible",
      validation: { required: true },
      dataType: "string",
    },
    location: {
      name: "Location",
      dataType: "string",
      validation: { required: false },
    },
  
      notice_period: {
      name: "Notice Period",
      validation: { required: true },
      dataType: "string",
    },
    
     questions: {
      name: "Questions",
      validation: { required: true },
      dataType: "string",
    },
       relocate: {
      name: "Relocate",
      validation: { required: true },
      dataType: "string",
    },
    
  },
});
