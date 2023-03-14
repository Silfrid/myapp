import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#06C4F7",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_INSIDE",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#FA0EEC",
      splashFullScreen: true,
      splashImmersive: false,
      layoutName: "launch_screen",
      useDialog: false,
      LocalNotifications: {
        smallIcon: "ic_stat_icon_config_sample",
        iconColor: "#488AFF",
        sound: "beep.wav",
      },
    }
  }
};

export default config;
