import { buildCollection } from "@camberi/firecms";

export const arambhaForms25Collection = buildCollection({
  path: "arambhaForm25",
  name: "Arambha Form 2025",
  singularName: "arambhaForm25",
  group: 'Arambha Yoga Day Forms',
  description: "Submission records for Arambha Yoga Day 2025, including participant info, contact details, and preferences.",
  permissions: () => ({
    edit: false,
    create: false,
    delete: false,
  }),
  properties: {
    name: {
      dataType: "string",
      name: "Full Name"
    },
    age: {
      dataType: "number",
      name: "Age"
    },
    gender: {
      dataType: "string",
      name: "Gender",
      enumValues: {
        male: "Male",
        female: "Female",
        other: "Other"
      }
    },
    email: {
      dataType: "string",
      name: "Email",
      email: true
    },
    phone: {
      dataType: "string",
      name: "Phone"
    },
    location: {
      dataType: "string",
      name: "Location"
    },
    eventSource: {
      dataType: "string",
      name: "Event Source",
      enumValues: {
        "social media": "Social media",
        "whatsapp group": "WhatsApp group message",
        "friend family referral": "Friend or family referral",
        "event website": "Event website",
        "poster flyer": "Poster or flyer",
        "online advertisement": "Online advertisement"
      }
    },
    experience: {
      dataType: "string",
      name: "Experience",
      description: "Has the user attended something like this before?"
    },
    tShirtSize: {
      dataType: "string",
      name: "T-Shirt Size",
      enumValues: {
        xs: "XS",
        s: "S",
        m: "M",
        l: "L",
        xl: "XL",
        xxl: "XXL"
      }
    },
    ticketID: {
      dataType: "string",
      name: "Ticket ID"
    },
    fileUrl: {
      dataType: "string",
      name: "Ticket PDF",
      url: true,
    },
    createdAt: {
      dataType: "string",
      name: "Created At"
    }
  },
});
