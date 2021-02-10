/* eslint-disable */
import axios from "axios";

export default {
    name: 'home',
    props: [],
    mounted() {
        this.getAllCustmore();
    },
    data() {
      return {
        fields: [
          {
            key: 'isFavourite',
            label: 'Favourite'
          },
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
        custmoreData: [],
        favouriteContact:[],
        apiUrl : "https://reqres.in/api/"
      }
    },
    methods: {
      getAllCustmore(){
        axios.get(this.apiUrl+"users").then(response => {
          this.custmoreData = response.data.data;
          this.custmoreData = this.custmoreData.map((data) => {
              data.isFavourite = false;
              return data;
          });
          let localStorageContactData = JSON.parse(localStorage.getItem('favouriteContact'));
          this.custmoreData = localStorageContactData !== [] ? localStorageContactData : this.custmoreData;
          localStorage.setItem(favouriteContact,JSON.stringify((this.custmoreData)));
        }).catch( error => { console.log(error); });
      },

      onRowClicked(record, index) {
        this.$router.push({name: 'contact-detail', params: { id: index,data:record }});
      },

      onFavoriteClick(value, index, item){
        if(this.custmoreData[index].isFavourite === false){
          this.custmoreData[index].isFavourite = true;
        }else{
          this.custmoreData[index].isFavourite = false;
        }
        localStorage.setItem('favouriteContact',JSON.stringify(this.custmoreData));
      }
      
    },
    computed: {}
  };