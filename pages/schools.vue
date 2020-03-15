<template>
  <div id="schools">
    <p>school</p>
    <div>
      <p>schools "{{ schools }}"</p>
    </div>
    <div>
      <v-btn @click="settableDatabase">Set</v-btn>
    </div>
  </div>
</template>

<script>
import firebase from "../plugins/firebase";
import store from "../store/index";
const db = firebase.firestore();
const schoolsRef = db.collection("schools").doc("ImgjWZHaOV7OZHxe6dXQ");

export default {
  name: "schools",
  data: function() {
    return {
      tableDatabase: "tabaleDatabase",
      secondtable: "secondtable"
    };
  },
  mounted() {},
  created: function() {},
  methods: {
    settableDatabase() {
      // this.tableDatabase = schoolsRef.get();
      const schoolsData = schoolsRef.get();
      console.log(schoolsData.data());
    }
  },
  computed: {
    schools() {
      var array1 = [];
      schoolsRef.get().then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          array1.push(doc.data());
          console.log("array1", array1);
          console.log("array1[0]", array1[0]);
          console.log("array1[0].name", array1[0].name);
          console.log("array1[0].info", array1[0].info);
          return array1[0];
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          return "error";
        }
      });
    }
  }
};
</script>
