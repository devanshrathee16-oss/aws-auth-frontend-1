const awsconfig = {
  Auth: {
    Cognito: {
      region: "us-east-1",
      userPoolId: "us-east-1_EAMWe69Bs",
      userPoolClientId: "5dh33ut76pv5podndluov2qur",
      loginWith: {
        email: true,
        username: false,
      },
    },
  },
};

export default awsconfig;
