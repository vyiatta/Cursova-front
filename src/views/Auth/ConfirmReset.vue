<template>
    <div class="pageName" style="margin-bottom: 20px;">
        <div class="pageName__title">
            New password
        </div>
        <div class="pageName__img">
            <img src="@/assets/img/svg/down-arrow.svg" alt="">
        </div>
    </div>
    <div class="wrap user-login">
        <h1 class="user-login__heading">Reset password to your account</h1>
        <form class="form-large" id="new_user" action="/users/sign_in" accept-charset="UTF-8" method="post"><input
                type="hidden" name="authenticity_token"
                value="JJwMdZVyvMhz-WcATVCguxDjq3NEFbknkSljpNq198yZrvjxF1uQBzBAV0kaEGG3jUviqMWhHxRxs9EvYHvbIQ"
                autocomplete="off">
            <input type="hidden" name="redirect_to" id="redirect_to" autocomplete="off">
            <label class="user-login__label" for="user_email">Password</label>
            <input placeholder="password" required="required" class="user-login__input user-login__input--email"
                type="email" value="" name="user[email]" id="user_email">
            <label class="user-login__label" for="user_email">Confirm Password</label>
            <input placeholder="password" required="required" class="user-login__input user-login__input--email"
                type="email" value="" name="user[email]" id="user_email">
            <input class="include_button" type="submit" id="button-new_user" name="commit" value="Set new password"
                data-disable-with="Sign In">
            <input value="true" autocomplete="off" type="hidden" name="user[remember_me]" id="user_remember_me">
            <input type="hidden" name="initial_origin" id="initial_origin" autocomplete="off">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageTitle: 'Professional Carpet Cleaning in Dublin | Cleanora',
            pageDescription: 'Cleanora – experts in carpet, rug, upholstery, leather, mattress, curtain, hall, and stairs cleaning in Dublin. Refresh your home with us!',
            pageKeywords: 'cleaning, carpet, upholstery, Dublin, professional',
        };
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
    }
}
</script>

<style lang="scss" scoped>
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
    background: #f7f7f7;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}
</style>