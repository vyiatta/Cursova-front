<template>
    <div class="invite" style="margin-top: -50px;">
        <div class="invite-text__title" style="text-align: center;">
            <b> You are looking for a responsible and reliable partner? Alredy found!
            </b>
        </div>
        <div class="invite-text__buttons" style="display: flex;">
            <a href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJvkXggJclpSxGWJwfRQhlPZvpHgBkKqkxDnjgVwwwkrxJDpWQNDgbhmXcHRzchWBBVDNHL">
                <button class="include_button">INVITE TO A
                    MEETING</button>
            </a>
            <a href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJvkXggJclpSxGWJwfRQhlPZvpHgBkKqkxDnjgVwwwkrxJDpWQNDgbhmXcHRzchWBBVDNHL">
                <button class="include_button">INVITE TO
                    TENDER</button>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.invite {
    &-text__buttons {

        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 40px;
        @media (max-width: 1040px) {
            margin-top: 0;
            margin-bottom: 0;
        }
        a {
            button {
                margin-right: 15px;
                border-radius: 15px 0px 15px 0px;
                &:first-child {
                    margin-bottom: 0;
                }
            }
        }
        a {
            @media (max-width: 1040px) {
                width: 175px;
                margin: 0 auto;
                margin-top: 10px;
                button {
                    width: 100% !important;
                }
                &:last-child {
                    margin-bottom: 40px;
                }
            }
        }
    }

    &-text {
        &__title {
            font-size: 28px;

            @media (max-width: 1040px) {
                font-size: 24px
            }

            @media (max-width: 767px) {
                font-size: 18px;
            }
        }

        &__buttons {
            display: flex;
            flex-direction: row;

            @media (max-width: 767px) {
                flex-direction: column;
            }

            a {
                button {
                    border: 2px solid #00C2A7;

                    @media (max-width: 767px) {
                        width: 50%;
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}</style>