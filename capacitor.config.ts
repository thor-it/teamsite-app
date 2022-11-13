import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'teamsite.rugby',
  appName: 'teamsite-rugby-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;
