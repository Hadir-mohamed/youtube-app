
# 4 How to run this application

This application loads information using the [Youtube Data API v3](https://developers.google.com/youtube/v3/docs/).

To use it, you need to set up a [Youtube Data v3 API key](https://productioncoder.com/build-youtube-in-react-part-19/) and run the project with `npm` or `yarn`.

**Below, you'll find a step by step explanation**

## 4.1. Getting a Youtube Data API key

1. Head over to the [Google developers console](https://console.developers.google.com)
2. Create a new project by clicking on `Select project` drop down right next to the logo. Click the `New Project` button an give it a speaking name.
3. Select your project by choosing it in the `Select Dropdown` directly next to the logo in the header.
4. Click the `Enable APIs and Services` button
5. Search for `youtube data`
6. Click on the `Youtube Data API v3`
7. Click the blue enable button
8. In the dashboard, click `Credentials` on the left sidebar
9. Click the `Create Credential` button
10. Copy the API key

## 4.2. Providing the API key to your application
YOUTUBE_API_KEY in constants.js file
Provide your Youtube Data API key with the `REACT_APP_YOUTUBE_API_KEY` environment variable.

Create a `.env.local` file (alread gitignored) with

```
touch .env.local
```

and then define the `REACT_APP_YOUTUBE_API_KEY` environment variable which is supposed to hold your `Youtube Data v3 API` key in the `.env.local` file like so:

```
REACT_APP_YT_API_KEY=AIzaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 4.3. Installing dependencies

To install the dependencies run

```
npm install
```

## 4.4 Running the application

### 4.4.1 Running locally with local env vars

You can run:
```
npm run dev
```

which will source your `.env.local` file and then start then run `npm start`.

Note that if you change the value of the `.env.local` file, you need to run `npm run dev` again so that the new env var changes are picked up.
