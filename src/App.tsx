import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/ibm-plex-mono";
import Logo from "./assets/logo.png";
import { usersCollection } from "./schemas/userSchema";
import { testimonialsCollection } from "./schemas/testimonialSchema";
import { formsCollection } from "./schemas/formsSchema";
import { enquiryFormsCollection } from "./schemas/enquiryFormSchema";
import { offeringsCollection } from "./schemas/offeringSchema";
import { leadformsCollection } from "./schemas/leadFormSchema";
import { imagesCollection } from "./schemas/imageSchema";
import { arambhaForms24Collection } from "./schemas/arambhaForm24Schema";
import { careerFormsCollection } from "./schemas/careerFormSchema";
import { resumeFormsCollection } from "./schemas/resumeFormSchema";
import { arambhaForms23Collection } from "./schemas/arambhaForm23Schema"
import { arambhaForms25Collection } from "./schemas/arambhaForm25Schema"
import { contactMessagesCollection } from "./schemas/contactMessagesSchema";
import { academyFormv2Collection } from "./schemas/academyFormSchema";
import { enquiryFormv2Collection } from "./schemas/enquireyFormsv2Schema";
import { trialClassFormCollection } from "./schemas/trialClassFormSchema";
import { weightLossFormCollection } from "./schemas/weightLossSchema";
import { workshopFormCollection } from "./schemas/workshopFormSchema";
import { arambhaForms22collection } from "./schemas/arambhaForm22Schema";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  appId: process.env.REACT_APP_APPID,
};

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("harsimransinghbarki@gmail.com")) {
      } else {
        if (!user?.email?.includes("@athayogliving.com")) {
          throw Error("Not Allowed!");
        }
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
      collections={[
        arambhaForms23Collection,
        arambhaForms24Collection,
        arambhaForms25Collection,
        usersCollection,
        testimonialsCollection,
        formsCollection,
        enquiryFormsCollection,
        offeringsCollection,
        leadformsCollection,
        imagesCollection,
        careerFormsCollection,
        resumeFormsCollection,
        contactMessagesCollection,
        academyFormv2Collection,
        enquiryFormv2Collection,
        trialClassFormCollection,
        weightLossFormCollection,
        workshopFormCollection,
        arambhaForms22collection
      ]}
      firebaseConfig={firebaseConfig}
      logo={Logo}
      primaryColor="#002c3e"
      secondaryColor="#9E7D38"
    />
  );
}
