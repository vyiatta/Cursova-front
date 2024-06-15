<template>
    <div class="container__faq">
        <div class="content wrap">
            <div class="title__reviews">
                <div class="faq__title">
                    <b>F.A.Q</b>
                </div>
            </div>
            <div class="faq_content_block">
                <div class="faq_list">
                    <div class="col">
                        <div class="box" v-for="faq in faqs1" :key="faq.id">
                            <button class="accordion-faq" @click="toggleAccordion(faq)">
                                {{ faq.question }}
                                <span class="accordion-icon" :class="{ active: faq.isOpen }"></span>
                            </button>
                            <div class="panel" :class="{ 'panel-open': faq.isOpen }">
                                <p>{{ faq.answer }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box" v-for="faq in faqs2" :key="faq.id">
                            <button class="accordion-faq" @click="toggleAccordion(faq)">
                                {{ faq.question }}
                                <span class="accordion-icon" :class="{ active: faq.isOpen }"></span>
                            </button>
                            <div class="panel" :class="{ 'panel-open': faq.isOpen }">
                                <p>{{ faq.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faqs1: [
                {
                    id: 1,
                    question: "Where can I find carpet cleaners near me?",
                    answer: "Cleanora are carpet cleaners operating in the Greater Dublin Area",
                    isOpen: false
                },
                {
                    id: 2,
                    question: "What carpet cleaning services do you offer?",
                    answer: "Our carpet cleaning services include domestic carpet cleaning, commercial carpet cleaning, end- of - tenancy carpet cleaning and more.",
                    isOpen: false
                },
                {
                    id: 3,
                    question: "Do you move furniture?",
                    answer: "We typically send 2 persons professional to clean carpets. So they will be able to move light furniture around as long as it is needed and it does not pose any additional risk.",
                    isOpen: false
                },
            ],
            faqs2: [
                {
                    id: 4,
                    question: "Why should i clean my Carpet Professionally",
                    answer: "There are many reasons to clean your carpet properly on a regular basis. This can reduce the level of allergens or mold inside the house, as these can often get stuck inside carpets. Cleaning your carpet properly can reduce the effect of these particles, leaving you and your family feeling much healthier. Deep cleaning your carpet at least once a year can also give it a longer life, and ensure that it is not breaking or falling apart due to causes such as water damage. There are many different reasons you might need professional carpet cleaners to clean your carpets. From an end-of-tenancy clean-up, getting rid of stubborn stains that just won’t move, or simply wanting a clean carpet that just can’t be achieved with your own vacuum, we have a number of different techniques to suit your specific needs. Rest assured that your tailored cleaning program will have your carpet looking and feeling brand new!",
                    isOpen: false
                },
                {
                    id: 5,
                    question: "How Do I Book Carpet Cleaning Services?",
                    answer: "We have a simple, easy to follow the process to book to get your carpets cleaned. Simply send us a message through our website. Our office hours are Monday to Sunday, 8am to 8pm, and you can expect a response within minutes during this period. Through this we can discuss the best carpet cleaning services for your needs, and whether you require one of our other services as well. We will work with you to book a time that is fast and convenient for you.We provide our services all over Dublin, and will work around your schedule and needs. Don’t hesitate, and get in touch today!",
                    isOpen: false
                },
                {
                    id: 6,
                    question: "How long does your carpet cleaning service typically take?",
                    answer: "Our carpet cleaning service is designed to efficiently clean and refresh your carpets while minimizing any disruption to your daily routine. On average, our professional cleaning team can complete a carpet cleaning project within 8 hours. However, the actual duration may vary depending on factors such as the size of the area, the level of soiling, and the specific cleaning method required. We strive to provide prompt and thorough service, ensuring that your carpets are left clean, sanitized, and ready for use as quickly as possible. If you have any specific time constraints or scheduling preferences, please let us know, and we will do our best to accommodate your needs.",
                    isOpen: false
                },
            ]
        };
    },
    methods: {
        toggleAccordion(faq) {
            faq.isOpen = !faq.isOpen;
        }
    }
};
</script>

<style scoped lang="scss">
.faq__title {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;

    b {
        font-size: 40px;
    }

    @media (max-width: 1000px) {
        b {
            font-size: 32px;
        }
    }

    @media (max-width: 768px) {
        b {
            font-size: 30px;
        }
    }
}

.box {
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
}

.faq_list {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    // display: flex;
    // gap: 10px;
    // flex-wrap: wrap;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.accordion-faq {
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    background-color: #1D7C8F;
    border: none;
    height: 65px;
    font-size: 20px;
    color: white;
    text-align: left;
    outline: none;
    width: 100%;
    transition: background-color 0.3s ease;

    @media (max-width: 520px) {
        font-size: 14px;
        padding-right: 15px;
    }
}

.accordion-faq:hover {
    background-color: #1D7C8F;
}

.accordion-icon {
    left: 95%;
    position: absolute;
    top: 65%;
    right: 20px;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transition: transform 0.3s ease;
    @media (max-width: 767px) {
        left: 90%;
    }
}

.accordion-icon.active {
    transform: translateY(-50%) rotate(45deg);
}

.panel {
    background: #1D7C8F;
    border-top: 2px solid white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;

    p {
        padding: 15px;
        font-size: 18px;
        text-align: center;
        color: white;

        @media(max-width: 1000px) {
            font-size: 14px;
        }

        @media(max-width: 520px) {
            font-size: 12px;
        }
    }
}

.panel-open {
    max-height: 1000px;
}
</style>
