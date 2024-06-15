<template>
    <div class="wrap user-login">
        <h1 class="user-login__heading">Login</h1>
        <form class="form-large" @submit.prevent="handlerLogin">
            <label class="user-login__label" for="userEmail">Email Address</label>
            <input placeholder="E-Mail" required v-model="userEmail" class="email user-login__input" type="email"
                id="userEmail" />

            <label class="user-login__label" for="userPassword">Password</label>
            <input placeholder="Password" required v-model="userPassword" class="pass user-login__input" type="password"
                id="userPassword" />
            <button class="include_button" style="border: 2px solid #00C2A7; display: flex; justify-content: center;"
                type="submit">Sign In</button>
            <div style="display: flex; justify-content: center; margin-top: 20px;">
                <GoogleLogin :callback="callback" />
            </div>
            <router-link to="/resetpassword" class="user-login__forgot-password">Forgot your password?</router-link>
            <router-link to="/register" class="user-login__forgot-password">Don't have an account? Register</router-link>
        </form>
    </div>
    <div v-if="modal2">
        <div class="success-message" style="margin-bottom: 20px;">
            <img src="/Cleanora.jpg" alt="">
            <img src="/Cancel.png" alt="">
            <p>Auth failed! Incorrect password or login</p>
            <button class="include_button" @click="modal2 = false" style="background: unset; border: 2px solid #00C2A7; color: #00C2A7">
                Try again</button>
        </div>
    </div>
</template>
<script setup>
const callback = (response) => {
    const userData = decodeCredential(response.credential)
}
</script>
<script>
import axios from 'axios';
import { decodeCredential } from 'vue3-google-login'


export default {
    data() {
        return {
            modal2: false,
            userEmail: '',
            userPassword: '',
            showMessage: false,
            messageText: '',
            messageStyle: {},
        };
    },
    methods: {
        async handlerLogin() {
            const loginData = {
                userEmail: this.userEmail,
                userPassword: this.userPassword,
            };

            try {
                const response = await axios.post(
                    'http://ec2-18-202-177-29.eu-west-1.compute.amazonaws.com:8080/api/user/login',
                    loginData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (response.data.loginStatus === 'OK') {
                    this.$router.push('/');
                } else {
                    this.modal2 = true;
                }

                console.log(JSON.stringify(response.data));
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
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