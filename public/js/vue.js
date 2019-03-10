var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

new Vue({
    el: "#jumbotron",
    data: {
        header: `Climate Warnings.
        For the Areas You Want to See.`,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
})

new Vue({
    el: "#forms",
    data: {

    },
    methods: {
        sayHi: function () {
            alert("hello")
        }
    }
})

let signUpForm = new Vue({
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
        verify: function () {
            if(this.user.password !== this.verifyPassword) {
                this.errorMessage = "Passwords do not match.";
                return;
            }
            this.errorMessage = "";
            // axios.post('/user', this.user)
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });

        }
    }
})