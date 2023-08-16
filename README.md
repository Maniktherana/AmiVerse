# AmiVerse
<img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" />

Welcome to the AmiVerse repository! This iOS and Android application is designed to streamline the user experience of Amity students by providing a seamless interface to interact with the Amizone student portal. Powered by [go-amizone](https://github.com/ditsuke/go-amizone), AmiVerse eliminates the frustrations of manual logins and sluggish loading times.

## Key Features:

- **Effortless Authentication**: AmiVerse leverages the secure authentication mechanisms of Amizone, ensuring a smooth and secure login process for users.
- **Instant Attendance Updates**: No more waiting endlessly for attendance details. AmiVerse fetches and displays your attendance information in real-time, giving you up-to-the-minute insights.
- **Timetable at Your Fingertips**: Access your class schedule on-the-go. AmiVerse fetches the latest timetable data and presents it in an intuitive format for quick reference.
- **Seamless Material Access**: Course materials are just a tap away. Navigate through your subjects and effortlessly retrieve relevant documents and resources.
- **User-Friendly Interface**: AmiVerse boasts an intuitive user interface that aligns with the design language of both iOS and Android platforms, ensuring a consistent experience across devices.

## Environment Setup

Clone the repo and run `npm i` to install the dependencies.

## Running the app

Since the API is currently using a proxy server which is locally hosted, we have to use `ngrok` to expose the server to the internet.

Sign up and make an account on [ngrok](https://ngrok.com/) to get your auth token. Follow their guide to install it on your machine and add the auth token to the config.

Once that is done, start the proxy server and then run `ngrok http 3000` in another terminal (proxy server is hosted on 3000)

Add your username, password and the ngrok url in the `functions.js` file. We are hardcoding the credentials for now.

> Make sure to remove the credentials before pushing to the repo.

Run `npm start` to start the [expo](https://expo.dev/) server. Expo will generate a QR code which can be scanned using the Expo app on your phone to run the app. The app will only run on one device at a time.

## Contributions

Contributions to AmiVerse are welcome! If you encounter bugs, want to add new features, or improve the existing codebase, feel free to submit issues and pull requests.


<!-- ## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

for ios native (additional install)
`npx pod-install` -->
