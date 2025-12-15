// src/amplifyConfig.js
import { Amplify } from "aws-amplify";

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: "us-east-1_EAMWe69Bs",
        userPoolClientId: "5dh33ut76pv5podndluov2qur",
        identityPoolId:
          "us-east-1:7694cbc9-39b0-44b8-8562-3e8158f93d93",

        // how users log in – email is fine because you’re using Hosted UI
        loginWith: {
          email: true,
        },

        // we only care about signed-in users for this app
        allowGuestAccess: false,
      },
    },

    // No Storage section needed because we pass bucket in options
  });
}
