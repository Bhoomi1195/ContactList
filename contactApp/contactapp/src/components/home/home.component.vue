<template id="home">
    <div class="container">
        <b-table striped hover selectable @row-clicked="onRowClicked" :items="custmoreData" :fields="fields" class="cursor">
            <template v-slot:cell(isFavourite)="row">
                 <b-form-group>
                    <input type="checkbox" v-model="row.item.isFavourite" @click="onFavoriteClick($event, row.index, row.item)" />
                </b-form-group>
            </template>
        </b-table>
    </div>
</template>
<script src="./home.component.js"></script>
<style src="./home.component.css"></style>
