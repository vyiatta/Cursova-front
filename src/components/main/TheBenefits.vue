<template>
    <div class="row wrap">
        <div class="choose-items__title title" style="max-width: 220px; margin: 0 auto; margin-bottom: 40px;">
                <b>Our Benefits</b>
            </div>
        <div class="large-12 medium-12 small-12 columns">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th><img src="/blackmarket.svg">
                            <p>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Black market</font>
                                </font>
                            </p>
                        </th>
                        <th class="table__head__cleanora">
                            <p>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Cleanora</font>
                                </font>
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Customer Service Excellence:</font>
                                </font>
                            </strong>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> We provide comprehensive email support from Monday
                                    to Friday, 9 to 9, ensuring quick and efficient response to all your inquiries and
                                    requests.
                                </font>
                            </font>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Wide Range of Services:</font>
                                </font>
                            </strong>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> Our company specializes in the dry cleaning of
                                    carpets, rugs, upholstery, mattresses, curtains, leather items, as well as cleaning
                                    hallways and stairs.</font>
                            </font>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Gentle Material Handling:</font>
                                </font>
                            </strong>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> We place special emphasis on preserving the
                                    integrity of your valuable items, ensuring that our treatment methods won't harm fabrics
                                    or leather.
                                </font>
                            </font>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Experience and Professionalism:</font>
                                </font>
                            </strong>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> Our team consists of experienced and trained
                                    specialists, guaranteeing the highest level of service and quality.</font>
                            </font>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Personalized Approach:</font>
                                </font>
                            </strong>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> We take into account the specifics of each surface
                                    or item to ensure the best result in dry cleaning and care.</font>
                            </font>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Feedback System:</font>
                                </font>
                            </strong>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> We value your feedback and provide the opportunity
                                    to leave reviews, constantly improving the quality of our services to meet your needs.
                                </font>
                            </font>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Reliability and Transparency:</font>
                                </font>
                            </strong>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> Cleanora offers honest pricing, a clear work
                                    schedule, and full transparency in all aspects of our operations, so you can fully trust
                                    us with the care of your home or office.</font>
                            </font>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.row {
    max-width: 75rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}

.columns {
    -ms-flex: 1 1 0px;
    flex: 1 1 0px;
    padding-right: 0.3125rem;
    padding-left: 0.3125rem;
    min-width: 0;
}

.large-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}

table {
    font-size: 1rem;
}

@media screen and (min-width: 480px) {
    thead th {
        padding: 0.75rem 0.25rem;
        font-size: 1rem;
    }
}
@media (max-width: 480px) {
    td {
        font-size: 0.6rem;
    }
}
thead th:nth-child(2) {
    border: 1px solid #CCCCCC;
}

th img {
    max-width: 2.5rem;
}

th p {
    margin: 0.5rem 0;
}

.table__head__cleanora {
    background-color: #00C2A7;
    color: #ffffff;
    border: 1px solid #00C2A7;
}

@media screen and (min-width: 480px) {
    td {
        padding: 1.25rem;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    td:nth-child(2n) {
        background: url(https://production-de-h2.s3.amazonaws.com/assets/1114/cross.svg) center center no-repeat;
        background-size: 1rem;
        min-width: 4rem;
    }
    td:nth-child(3n) {
    background: url(https://production-de-h2.s3.amazonaws.com/assets/841/checkmark.svg) center center no-repeat;
    background-size: 1rem;
    min-width: 4rem;
}
}

td {
    border: 1px solid #CCCCCC;
    padding: 0.5rem;
}

@media screen and (min-width: 480px) {
    td:nth-child(2n) {
        background: url(https://production-de-h2.s3.amazonaws.com/assets/1114/cross.svg) center center no-repeat;
        background-size: 1.25rem;
        min-width: 9.5rem;
    }
}

@media screen and (min-width: 480px) {
    td:nth-child(3n) {
        background: url(https://production-de-h2.s3.amazonaws.com/assets/841/checkmark.svg) center center no-repeat;
        background-size: 1.25rem;
        min-width: 9.5rem;
    }
}

table {
    margin: auto;
    color: #444444;
    font-family: Monserrat;
    font-size: 0.75rem;
    border-collapse: collapse;
}

th p {
    margin: 0.25rem 0;
}

p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
}</style>