<template id="contact-detail">
    <div class="container">
        <div class="mt-4">
            <div class="contactDetailTitle"><h2>Contact detail</h2></div>
            <b-card  class="mb-3 detailCard">
                <div class="row">
                    <div class="col-md-4">
                        <img v-bind:src="contactData.avatar" width="150px" height="180px" alt=""  class="mb-3 card-img-left">
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-4 contactHeader">
                                <span>Name : </span><br>
                                <span>Email : </span>
                            </div>
                            <div class="col-md-8 contactDescription">
                                <span> {{contactData.first_name}} {{contactData.last_name}} </span><br>
                                <span> {{contactData.email}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script src="./contact-detail.component.js"></script>
<style src="./contact-detail.component.css"></style>
