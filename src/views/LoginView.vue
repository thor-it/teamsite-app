<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Log In</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="center">
        <section>
          <ion-button expand="block" @click="logInGoogle()">
            <img :src="require('@/assets/google.svg')" class="google" />
            <span>Login with Google</span>
          </ion-button>
        </section>
      </div>

      <form novalidate @submit.prevent="onLogin">
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
            <ion-input
              v-model="password"
              name="password"
              placeholder="Provide your password"
              required
              type="password"
            ></ion-input>
          </ion-item>

          <ion-text color="danger">
            <p v-show="!passwordValid || !!submitted">Password is required</p>
          </ion-text>
        </ion-list>

        <ion-row responsive-sm>
          <ion-col>
            <ion-button
              expand="block"
              type="submit"
              @click.prevent="onLogin($event)"
            >
              Login
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button color="light" expand="block" @click="onSignup()">
              Signup
            </ion-button>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { LocalNotifications } from "@capacitor/local-notifications";
import {
  IonPage,
  IonBackButton,
  IonButton,
  IonButtons,
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
  IonToolbar,
  toastController,
} from "@ionic/vue";
import { useMutation } from "@tanstack/vue-query";
import axios from "axios";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    username: "",
    password: "",
  }),
  components: {
    IonPage,
    IonContent,
    IonCol,
    IonRow,
    IonButton,
    IonButtons,
    IonBackButton,
    IonText,
    IonInput,
    IonLabel,
    IonList,
    IonItem,
    IonHeader,
    IonTitle,
    IonToolbar,
  },
  setup: () => {
    onMounted(() => {
      GoogleAuth.initialize({
        clientId:
          "104431808572-80ppbmn6jsbn7fkisaj9f1ngdan9dkht.apps.googleusercontent.com",
        grantOfflineAccess: true,
        scopes: ["profile", "email"],
      });
    });

    const logInGoogle = async () => {
      const response = await GoogleAuth.signIn();
      console.log(response);
    };

    // const queryClient = useQueryClient();

    // Query
    // const { isLoading, isError, data, error } = useQuery({
    //   queryKey: ["todos"],
    //   queryFn: () => fetch("http://localhost:5000/api/v2/ApiStatus/tenant"),
    // });

    // // Mutation
    const loginMutation = useMutation({
      mutationFn: ({
        username,
        password,
      }: {
        username: string;
        password: string;
      }) => {
        return axios.post("http://localhost:5000/api/v2/signin/login", {
          username,
          password,
        });
      },
      onSuccess: () => {
        // Invalidate and refetch
        // queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    });

    return {
      logInGoogle,
      loginMutation,
    };
  },
  async created() {
    await LocalNotifications.requestPermissions();
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 123,
          title: "App rebuilt",
          body: "Build at " + new Date().toLocaleTimeString(),
          largeBody: "its ok dude",
        },
      ],
    });
  },
  computed: {
    usernameValid: () => true,
    passwordValid: () => true,
    submitted: () => false,
  },
  methods: {
    onLogin(e: Event) {
      e.preventDefault();
      this.loginMutation.mutate({
        username: this.username,
        password: this.password,
      });
      console.log("login");
      this.presentToast("top");
    },
    onSignup() {
      console.log("signup");
    },
    async presentToast(position: "top" | "middle" | "bottom") {
      const toast = await toastController.create({
        message: "Login worked!",
        duration: 1500,
        position: position,
      });

      await toast.present();
    },
  },
});
</script>
