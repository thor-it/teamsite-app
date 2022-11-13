import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: 'app.teamsite',
  appName: 'Teamsite',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
    GoogleAuth: {
      clientId: "104431808572-80ppbmn6jsbn7fkisaj9f1ngdan9dkht.apps.googleusercontent.com",
      androidClientId: "104431808572-gjf3i16bsoqo5prsiucdk7ocgrotti86.apps.googleusercontent.com",
      scopes: [
        "profile",
        "email",
      ],
      serverClientId:
        "104431808572-gjf3i16bsoqo5prsiucdk7ocgrotti86.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
