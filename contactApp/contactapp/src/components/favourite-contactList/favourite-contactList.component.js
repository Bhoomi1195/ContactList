/* eslint-disable */
export default {
    name: 'favouriteContactList',
    props: [],
    mounted() {
        this.getAllFavouriteData();
    },
    data() {
      return {
        fields: [
          {
            key: 'id',
            label: 'Id',
            sortable: true
          },
          {
            key: 'first_name',
            label: 'First Name',
            sortable: true
          },
          {
            key: 'last_name',
            label: 'Last Name',
            sortable: true
          },
          {
            key: 'email',
            label: 'Email',
            sortable: true,
          }
        ],
        favouriteContact:[]
      };
    },
    methods: {
      onRowClicked(record, index) {
        this.$router.push({name: 'contact-detail', params: { id: index,data:record }});
      },

      getAllFavouriteData(){
        let contactData = JSON.parse(localStorage.getItem('favouriteContact'));
        contactData.map((data) => {
          if(data.isFavourite === true){
            this.favouriteContact.push(data);
          }
         });
      }

    },
    computed: {}
  };