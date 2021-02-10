/* eslint-disable */
import axios from "axios";

export default {
    name: 'contact-detail',
    props: [],
    mounted() {
      this.getContactDetail();
    },
    data() {
      return {
        id:this.$route.params.id,
        contactData:[],
        apiUrl : "https://reqres.in/api/",
      };
    },
    methods: {
      getContactDetail(){
        axios.get(this.apiUrl+"users/"+this.id).then(response => {
          this.contactData = response.data.data;
        }).catch( error => { console.log(error); });
      }
    },
    computed: {}
  };