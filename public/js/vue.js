<<<<<<< HEAD
var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!"
    }
});

=======
>>>>>>> 86386004589f7d0a574c77cba2f21e90baa38b48
new Vue({
  el: "#jumbotron",
  data: {
    header: `Climate Warnings.
        For the Areas You Want to See.`,
<<<<<<< HEAD
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
});

new Vue({
    el: "#forms",
    data: {
        user: {
            email: null,
            password: null
        },
        verifyPassword: null,
        errorMessage: "",
        passVerified: false
    },
    methods: {
        sayHi: function () {
            alert("hello");
        }
    }
=======
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
>>>>>>> 86386004589f7d0a574c77cba2f21e90baa38b48
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
              console.log(response);
            });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
<<<<<<< HEAD
});
=======
  }
});
>>>>>>> 86386004589f7d0a574c77cba2f21e90baa38b48
