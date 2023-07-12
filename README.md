# AmiVerse

An iOS and Android client for Amizone

## Environment Setup

Clone the repo and run `npm i` to install the dependencies.

## Running the app

Since the API is currently using a proxy server which is locally hosted, we have to use `ngrok` to expose the server to the internet.

Sign up and make an account on [ngrok](https://ngrok.com/) to get your auth token. Follow their guide to install it on your machine and add the auth token to the config.

Once that is done, start the proxy server and then run `ngrok http 3000` in another terminal (proxy server is hosted on 3000)

Add your username, password and the ngrok url in the `functions.js` file. We are hardcoding the credentials for now.

> Make sure to remove the credentials before pushing to the repo.

Run `npm start` to start the [expo](https://expo.dev/) server. Expo will generate a QR code which can be scanned using the Expo app on your phone to run the app. The app will only run on one device at a time.

<!-- ## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

for ios native (additional install)
`npx pod-install` -->
