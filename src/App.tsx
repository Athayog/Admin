import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  buildCollection,
  buildProperty,
  EntityReference,
  FirebaseCMSApp,
} from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

// TODO: Replace with your config
const firebaseConfig = {
  apiKey: "AIzaSyCawa7WCc2murmqWbS10Ub8cy8wkPRuI40",
  authDomain: "authentication-test-7c342.firebaseapp.com",
  projectId: "authentication-test-7c342",
  storageBucket: "authentication-test-7c342.appspot.com",
  messagingSenderId: "",
  appId: "1:203021261788:web:4918e1da58de870aa64d19",
};

const locales = {
  "en-US": "English (United States)",
  "es-ES": "Spanish (Spain)",
  "de-DE": "German",
};

type Customer = {
  name: string;
  email: string;
  phone: string;
  orderId: string;
};

const paymentCollection = buildCollection({
  path: "payments",
  customId: locales,
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

const testimonialsCollection = buildCollection({
  path: "testimonials",
  customId: locales,
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

const usersCollection = buildCollection<Customer>({
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

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("@gmail.com")) {
        throw Error("Not Allowed!");
      }
      if (!user?.email?.includes("@increasingly.com")) {
        throw Error("Not Allowed!");
      }

      console.log("Allowing access to", user?.email);
      // This is an example of retrieving async data related to the user
      // and storing it in the user extra field.
      const sampleUserRoles = await Promise.resolve(["admin"]);
      authController.setExtra(sampleUserRoles);

      return true;
    },
    []
  );

  return (
    <FirebaseCMSApp
      name={"Athayog"}
      authentication={myAuthenticator}
      collections={[usersCollection, testimonialsCollection]}
      firebaseConfig={firebaseConfig}
    />
  );
}