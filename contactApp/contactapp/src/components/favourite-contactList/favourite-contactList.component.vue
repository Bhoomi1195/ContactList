<template id="favouriteContactList">
    <div class="container" v-if="favouriteContact.length !== 0">
        <h2>Favourite ContactList</h2>
        <b-table striped hover  @row-clicked="onRowClicked" :items="favouriteContact" :fields="fields" class="cursor">
        </b-table>
    </div>
</template>

<script src="./favourite-contactList.component.js"></script>
<style src="./favourite-contactList.component.css"></style>
