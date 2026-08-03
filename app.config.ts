import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Recipe Organizer",
  slug: "recipe-organizer",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  android: {
    versionCode: 1,
    package: "com.recipeorganizer.app",
  },
  ios: {
    bundleIdentifier: "com.recipeorganizer.app",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "18aef633-6b55-42b7-9682-b3c51b7833cd",
    },
  },
};

export default config;
