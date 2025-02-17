import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";
import Logo from "./assets/logo.png";
import { usersCollection } from "./schemas/userSchema";
import { testimonialsCollection } from "./schemas/testimonialSchema";
import { formsCollection } from "./schemas/formsSchema";
import { enquiryFormsCollection } from "./schemas/enquiryFormSchema";
import { offeringsCollection } from "./schemas/offeringSchema";
import { leadformsCollection } from "./schemas/leadFormSchema";
import { imagesCollection } from "./schemas/imageSchema";
import { arambhaFormsCollection } from "./schemas/arambhaFormSchema";
import { careerFormsCollection} from "./schemas/careerFormSchema"
import { resumeFormsCollection } from './schemas/resumeFormsCollection';
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
        usersCollection,
        testimonialsCollection,
        formsCollection,
        enquiryFormsCollection,
        offeringsCollection,
        leadformsCollection,
        imagesCollection,
        arambhaFormsCollection,
        careerFormsCollection,
        resumeFormsCollection
      ]}
      firebaseConfig={firebaseConfig}
      logo={Logo}
      primaryColor="#002c3e"
      secondaryColor="#9E7D38"
    />
  );
}
