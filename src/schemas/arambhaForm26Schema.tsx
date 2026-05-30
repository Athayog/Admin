import { buildCollection } from "@camberi/firecms";
import { RecordCount } from "../components/RecordCount";

export const arambhaForms26Collection = buildCollection({
  path: "arambhaForm26",
  name: "Arambha Form 2026",
  singularName: "arambhaForm26",
  group: "Arambha Yoga Day Forms",
  description:
    "Submission records for Arambha Yoga Day 2026, including participant info, contact details, and preferences.",
  permissions: () => ({
    edit: false,
    create: false,
    delete: false,
  }),
  extraActions: ({ path }) => <RecordCount path={path} />,
  properties: {
    fullName: {
      dataType: "string",
      name: "Full Name",
    },
    gender: {
      dataType: "string",
      name: "Gender",
      enumValues: {
        Male: "Male",
        Female: "Female",
        Other: "Other",
      },
    },
    email: {
      dataType: "string",
      name: "Email",
      email: true,
    },
    phone: {
      dataType: "string",
      name: "Phone",
    },
    heardFrom: {
      dataType: "string",
      name: "Heard From",
      enumValues: {
        "Instagram / Social Media": "Instagram / Social Media",
        "Friend / Word of mouth": "Friend / Word of mouth",
        "Athayog Community": "Athayog Community",
        "Google Search": "Google Search",
        "Flyer / Poster": "Flyer / Poster",
        Other: "Other",
      },
    },
    hasYogaExperience: {
      dataType: "string",
      name: "Yoga Experience",
      enumValues: {
        yes: "Yes",
        no: "No",
      },
    },
    tshirtSize: {
      dataType: "string",
      name: "T-Shirt Size",
      enumValues: {
        XS: "XS",
        S: "S",
        M: "M",
        L: "L",
        XL: "XL",
        XXL: "XXL",
      },
    },
    ticketID: {
      dataType: "string",
      name: "Ticket ID",
    },
    fileUrl: {
      dataType: "string",
      name: "Ticket PDF",
      url: true,
    },
    createdAt: {
      dataType: "string",
      name: "Created At",
      readOnly: true,
      Preview: ({ value }) => {
        if (!value) return null;
        try {
          const date = new Date(value);
          return (
            <span>
              {date.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              {date.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          );
        } catch {
          return <span>{value}</span>;
        }
      },
    },
    whatsappSent: {
      dataType: "boolean",
      name: "WhatsApp Sent",
    },
    emailSent: {
      dataType: "boolean",
      name: "Email Sent",
    },
    scanned: {
      dataType: "number",
      name: "Scanned",
    },
  },
});
