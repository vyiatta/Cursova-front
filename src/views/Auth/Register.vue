
<script>
import axios from 'axios';

export default {
    data() {
        return {
            pageTitle: 'Professional Carpet Cleaning in Dublin | Cleanora',
            pageDescription: 'Cleanora – experts in carpet, rug, upholstery, leather, mattress, curtain, hall, and stairs cleaning in Dublin. Refresh your home with us!',
            pageKeywords: 'cleaning, carpet, upholstery, Dublin, professional',
            userName: '',
            userPhoneNumber: '',
            userEmail: '',
            userPassword: '',
            modal: false,
            modal2: false,
        };
    },
    methods: {
        async handlerRegister() {
            const data = {
                userName: this.userName,
                userPhoneNumber: this.userPhoneNumber,
                userEmail: this.userEmail,
                userPassword: this.userPassword,
            };

            try {
                const response = await axios.post('http://ec2-18-202-177-29.eu-west-1.compute.amazonaws.com:8080/api/user/register', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.data.status === 'OK') {
                    this.modal = true;
                    this.userName = '';
                    this.userPhoneNumber = '';
                    this.userEmail = '';
                    this.userPassword = '';
                } else {
                    this.modal2 = true;
                }
                console.log(JSON.stringify(response.data));
            } catch (error) {
                console.error(error);
                this.showUserExistsModal = true;
            }
        },
    },
    mounted() {
        document.title = this.pageTitle;

        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', this.pageDescription);
        }

        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) {
            keywordsMeta.setAttribute('content', this.pageKeywords);
        }
    },
};
</script>
  
<template>
    <div class="wrap user-login">
        <h1 class="user-login__heading">Register an account</h1>
        <form class="form-large" @submit.prevent="handlerRegister">
            <label class="user-login__label" for="userName">Your Name</label>
            <input placeholder="Name" required v-model="userName" class="name user-login__input" type="text" id="userName">

            <label class="user-login__label" for="userPhoneNumber">Phone Number</label>
            <input placeholder="Phone Number" required v-model="userPhoneNumber" class="phone user-login__input" type="tel"
                id="userPhoneNumber">

            <label class="user-login__label" for="userEmail">Email Address</label>
            <input placeholder="E-Mail" required v-model="userEmail" class="email user-login__input" type="email"
                id="userEmail">

            <label class="user-login__label" for="userPassword">Password</label>
            <input placeholder="Password" required v-model="userPassword" class="pass user-login__input" type="password"
                id="userPassword">
            <!-- <div class="success-message" style="margin-bottom: 20px;">
                <img src="/Cancel.png" alt="">
                <p style=" background: unset; color: red">Registration failed: user exists!</p>
            </div> -->
            <button class="include_button" style="border: 2px solid #00C2A7; display: flex; justify-content: center;"
                type="submit">Sign Up</button>
            <router-link to="/login" class="user-login__forgot-password">You alredy have a account? Login</router-link>

        </form>
    </div>
    <div v-if="modal">
        <div class="success-message" style="margin-bottom: 20px;">
            <h1 style="color: #333; font-size: 40px;"><b>Cleanora</b></h1>
            <img src="/Successfully.png" alt="">
            <p>Registration successful!</p>
            <a href="/">
                <button class="include_button" style="background: unset; border: 2px solid #00C2A7; color: #00C2A7">Welcome
                    to Cleanora</button>
            </a>
            <span style="color: #333; max-width: 300px; padding-top: 20px;">Thanks to your registration, you can use
                more
                and more Cleanora services</span>
        </div>
    </div>
    <div v-if="modal2">
        <div class="success-message" style="margin-bottom: 20px;">
            <img src="/Cleanora.jpg" alt="">
            <img src="/Cancel.png" alt="">
            <p>Registration failed! User exists</p>
            <button class="include_button" @click="modal2 = false, this.userName = '', this.userPhoneNumber = '', this.userEmail = '', this.userPassword = ''" style="background: unset; border: 2px solid #00C2A7; color: #00C2A7">
                Try again</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.email {
    background: url('/email.svg');
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.pass {
    background: url('/pass.svg');
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.phone {
    background: url('/phone.svg');
    box-sizing: border-box;
    background-size: 16px;
    width: 16px;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.name {
    background: url('/name.svg');
    background-size: 16px;
    box-sizing: border-box;
    width: 16px;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    margin-top: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f8f8f8;
    padding: 40px;
    padding-bottom: 60px;

    p {
        background-color: #00C2A7;
        padding: 10px 20px;
        border-radius: 5px;
    }

    img {
        width: 250px;
    }
}

#button-new_user {
    border: 2px solid #00C2A7;
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
}

.user-login__forgot-password {
    padding-top: 20px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
}

form {
    padding-top: 40px;

    label {
        padding-top: 20px;
    }
}

.user-login {
    width: 400px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 50px 30px;
    box-sizing: border-box;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, .05);
    border: 1px solid #e4e4e4;

    @media (max-width: 570px) {
        width: 300px;
    }
}

.user-login__heading {
    color: black;
    text-align: center;
    font-size: 24px;
}

.user-login__label {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: black;
}

.user-login__input {
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    margin-top: 10px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}
</style>