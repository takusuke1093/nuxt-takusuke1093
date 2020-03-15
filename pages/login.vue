<template>
  <div>
    <div class="links">
      <a @click="signIn" class="button--green">signIn</a>
    </div>
    <div class="links">
      <a @click="signOut" class="button--grey">signOut</a>
    </div>
  </div>
</template>

<script>
import firebase from "@firebase/app";
import "firebase/auth";

export default {
  methods: {
    signIn: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    signOut: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

