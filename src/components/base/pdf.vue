<template>
    <div class="pdf wrap">
        <div class="pdf-text">
            <div class="pdf-text__title pageName__title" style="display: flex; justify-content: center;">
                <b>Cleaning methods</b>
            </div>
            <div class="pdf-text__desc service-prices__desc" style="margin-top: 20px; margin-bottom: 30px;">
                Click for download pdf files
            </div>
        </div>
        <div class="pdf__files">
            <ul>
                <li>
                    <a href="https://drive.google.com/file/d/1EaDZGUCVF1YqH8m7CQTHDL9YOgc-2T_u/view">
                        <div class="pdf__files-img">
                            <img src="../../assets/img/svg/pdf.svg" alt="">
                        </div>
                        <div class="pdf__files-text">
                            Stain removal
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1E_weNiP__ckRST8sqovO3jPJXqekRgGa/view">
                        <div class="pdf__files-img">
                            <img src="../../assets/img/svg/pdf.svg" alt="">
                        </div>
                        <div class="pdf__files-text">
                            Shampooing and spray extraction
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1Ec5SmbjeMoESCjWsNhY1cDCu_jhdrDY7/view?usp=drivesdk">
                        <div class="pdf__files-img">
                            <img src="../../assets/img/svg/pdf.svg" alt="">
                        </div>
                        <div class="pdf__files-text">
                            Textile pad
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.pdf__files {
    margin-bottom: 40px;

    ul {
        padding-left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @media (max-width: 1040px) {
            flex-direction: column;
            justify-content: center;
            padding-left: 4vh;
        }
        li {
            color: black;
        }
    }

    &-text {
        color: black;
        @media (max-width: 1040px) {
            font-size: 14px;
        }
    }
}
</style>