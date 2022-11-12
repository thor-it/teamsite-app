<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Teamsite</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <IonButton router-link="/login">Login here</IonButton>
        <p>Start with Ionic <a href="https://ionicframework.com/docs/components" rel="noopener noreferrer"
                               target="_blank">UI Components</a></p>

        <br/>
        <ion-button @click="() => router.push('/some-view')">Go to my view on things</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {defineComponent} from 'vue';
import {useRouter} from 'vue-router';
import LoginForm from "@/components/LoginForm.vue";

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {router: useRouter()};
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
