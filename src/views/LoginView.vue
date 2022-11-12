<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Log In</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <form novalidate>
      <ion-list>
        <ion-item>
          <ion-label color="primary" position="stacked">Username</ion-label>
          <ion-input
              v-model="username"
              :spellcheck="false"
              autocapitalize="off"
              name="username"
              placeholder="Provide your username or email"
              required
              type="text"
          ></ion-input>
        </ion-item>

        <ion-text color="danger">
          <p v-show="!usernameValid || !!submitted">Username is required</p>
        </ion-text>

        <ion-item>
          <ion-label color="primary" position="stacked">Password</ion-label>
          <ion-input v-model="password" name="password" placeholder="Provide your passÖword" required
                     type="password"></ion-input>
        </ion-item>

        <ion-text color="danger">
          <p v-show="!passwordValid || !!submitted">Password is required</p>
        </ion-text>
      </ion-list>

      <ion-row responsive-sm>
        <ion-col>
          <ion-button expand="block" type="submit" @click="onLogin()">Login</ion-button>
        </ion-col>
        <ion-col>
          <ion-button color="light" expand="block" @click="onSignup()">Signup</ion-button>
        </ion-col>
      </ion-row>
    </form>
  </ion-content>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
  IonBackButton,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    username: "",
    password: "",
  }),
  components: {
    IonContent,
    IonCol,
    IonRow,
    IonButton,
    IonBackButton,
    IonText,
    IonInput,
    IonLabel,
    IonList,
    IonItem,
    IonHeader,
    IonTitle,
    IonToolbar
  },
  computed: {
    usernameValid: () => true,
    passwordValid: () => true,
    submitted: () => false,
  },
  methods: {
    onLogin() {
      console.log("login");
    },
    onSignup() {
      console.log("signup");
    }
  }
})
</script>