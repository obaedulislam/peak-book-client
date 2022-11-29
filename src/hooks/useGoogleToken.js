export const setGoogleToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  //Get JWT Token
  fetch("http://localhost:4500/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      //Local storage is easiest but not best for store token
      localStorage.setItem("accessToken", data.token);
    });
};
