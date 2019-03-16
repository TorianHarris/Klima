new Vue({
  el: "#jumbotron",
  data: {
    header: `Climate Warnings.
        For the Areas You Want to See.`,
    description:
      "This project uses National Oceanic and Atmospheric Administration (NOAA) data to calculate a climate risk score based on user input. Additonally, users can save their favorite locations and revisit them in the future by logging into the website. A comment feature is also provided to allow users to crowdsource other sustainability data."
  }
});

new Vue({
  el: "#forms",
  data: {},
  methods: {
    sayHi: function() {
      alert("hello");
    }
  }
});

new Vue({
  el: "#sign-in-form",
  data: {
    user: {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit: function() {
      axios.get("/main/loggedin").then(function() {
        window.location.href = "/main/loggedin";
      });
      // .post("/signin", this.user)
      // .then(function(response) {
      //   console.log(response);
      //   axios
      //     .get("", {
      //       headers: { Authorization: "Bearer " + response.data.token }
      //     })
      //     .then(function(response) {
      //       //window.location.href = "/main/loggedin";
      //     });
      //   console.log(response);
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    }
  }
});

new Vue({
  el: "#sign-up-form",
  data: {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    },
    verifyPassword: null,
    errorMessage: "",
    passVerified: false
  },
  methods: {
    onSubmit: function() {
      if (this.user.password !== this.verifyPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }
      this.errorMessage = "";
      axios
        .post("/signup", this.user)
        .then(function(response) {
          console.log("Bearer " + response.data.token);
          axios
            .get("/main", {
              headers: { Authorization: "Bearer " + response.data.token }
            })
            .then(function(response) {
              window.location.href = response.data.redirectUrl;
            });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});

new Vue({
  el: "#sign-in-modal",
  data: {
    user: {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit: function() {
      axios.get("/main/loggedin").then(function() {
        window.location.href = "/main/loggedin";
      });
    }
  }
});

new Vue({
  el: "#sign-up-modal",
  data: {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    },
    verifyPassword: null,
    errorMessage: "",
    passVerified: false
  },
  methods: {
    onSubmit: function() {
      if (this.user.password !== this.verifyPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }
      this.errorMessage = "";
      axios
        .post("/signup", this.user)
        .then(function(response) {
          console.log("Bearer " + response.data.token);
          axios
            .get("/main", {
              headers: { Authorization: "Bearer " + response.data.token }
            })
            .then(function(response) {
              window.location.href = response.data.redirectUrl;
            });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
