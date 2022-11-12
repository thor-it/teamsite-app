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
        Some view on life2

        <br/>
        <ion-button @click="takePhoto()">Take photo</ion-button>
        <ion-button @click="() => router.push('/home')">Go to a safer space</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import {useRouter} from "vue-router";
import {usePhotoGallery} from "@/composables/usePhotoGallery";

export default defineComponent({
  name: 'SomeView',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    const {takePhoto} = usePhotoGallery();
    return {
      router: useRouter(),
      takePhoto
    };
  },
  // created() {}
});
</script>