# HouseHue

<span style="font-size: 1.2rem; "> <a href="https://househue.onrender.com/"> Website Link </a> </span>

<span style="font-size: 1.7rem"> About📓 </span>

<hr>

<span style="font-size: 1.2rem">House Hue, is a web platform to help those who want to buy, sell or rent a home. A clear interface and a wide apartment filter make House Hue very welcoming to all visitors. The development utilized some of the most current technologies in both Frontend and Backend development. </span>

<span style="font-size: 1.7rem"> How it works ⚙️ </span>

<hr>

<span style="font-size: 1.7rem"> Back-end 🗄️ </span>

<span style="font-size: 1.2rem"> In the server folder, the index.js file starts the local server on port 3000 and connects to the <a href="https://www.mongodb.com/"> MongoDB </a> database. Create an <a href="https://expressjs.com/en/">Express</a> application that will connect routers in the main application. On the server side I also used such tools as: <a href="https://www.npmjs.com/package/bcrypt"> bcrypt </a> (for encrypting passwords), <a href="https://www.npmjs.com/package/cookie-parser"> cookie-parser </a> (for working with cookies), <a href = "https://www.npmjs.com/package/dotenv"> dotenv </a> (for creating local variables). Something else to note is that server-side scripts are run to bring up the entire website. </span>

<span style="font-size: 1.7rem"> Front-end 🖥️ </span>

<span style="font-size: 1.2rem"> On the client side, I used <a href="https://vitejs.dev/guide/why.html"> React + Vite </a>. After running the "build" script, a new <a href="https://vitejs.dev/guide/static-deploy"> dist </a> folder is created, in which an index.html file is also created, it is this file that is rendered on the site after the build. On the client side I used such tools as: <a href="https://redux-toolkit.js.org/"> Redux/Toolkit</a>(for state management), <a href="https://firebase.google.com/?gad_source=1&gclid=CjwKCAiA04arBhAkEiwAuNOsIgATTPnHWl0X2_otnHS1JrUe5elv8G7v-ChNf5_bWV06a8twaqWt1RoCFNcQAvD_BwE&gclsrc=aw.ds"> Firebase</a>(for uploading and storing images on the cloud), <a href="https://reactrouter.com/en/main"> react-router-dom</a>(for routing), <a href="https://tailwindcss.com/" > TailwindCSS</a>(for styling), <a href="https://www.npmjs.com/package/redux-persist">redux-persist</a>(for saving data to LocalStorage).</span>

<hr>

<span style="font-size: 1.7rem"> How to start locally </span>

<span style="font-size: 1.2rem">I would like to point out that local variables in the <a href="https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj"> .env </a> file, which are not published, were used in the development. Therefore, to connect such modules as MongoDB, Firebase and <a href="https://stackoverflow.com/questions/31309759/what-is-secret-key-for-jwt-based-authentication-and-how-to-generate-it"> secret key for jwt </a> token you need to create .env file, create variables as in .env.example files, which you can see in the project, and assign your values to them. </span>

<hr>

<span style="font-size: 1.7rem"> How to start Front-end side : </span>

1. You must enter the client folder

```bash
  cd client/
```

2. Next, you should install all the dependencies

```bash
  npm install
```

3. And at the end, start the server

```bash
  npm run dev
```

<hr>

<span style="font-size: 1.7rem"> How to start Back-end side : </span>

1. You must enter the server folder

```bash
  cd server/
```

2. Next, you should install all the dependencies

```bash
  npm install
```

3. And at the end, start the server

```bash
  npm run dev
```

<hr>

<span style="font-size: 1.7rem"> Technologies used </span>

<span style="font-size: 1.2rem">
- React.js + Vite <br>
- Redux/Toolkit <br>
- MongoDB / Mongoose <br>
- Firebase <br>
- Node.js <br>
- Express.js <br>
- JWT <br>
- TailwindCSS <br>
- Redux-persist
</span>
