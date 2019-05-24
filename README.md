# FishingApp
This application is a Redux/React project designed to assist fisherman track their catches using geolocation data. It also calls a Weather API to give a three day forecast so you can better plan your fishing trip!

This application is not yet hosted online so you'll need to follow these steps to run the application locally:

1) Navigate to the Server folder and in your terminal install the required packages using "npm install"
2) After installing the packages type "nodemon app.js" in order to start the server. You should see "Server is running..." in your terminal.
3) Navigate to the Client folder and in your terminal install the required packages using "npm install"
4) After installing the packages type "npm start" in order to start the react app. Please run in Google Chrome if this is not already your default browser.

# Login/Credentials

Username: Admin

Password: 123


# Features
HTML, CSS, JavaScript, React.js, Redux, Node,js, Express, Sequelize, Uber's React Map

# How It Works
**Login**
<img src="Images/Login.png"/>

<p>The user is prompted to either login or register. Newly registered users are saved in the database and will then be able to login and access the other components. The state is destroyed when you navigate away from the page, logout or refresh the application.</p>

**Add Fish**
<img src="Images/Fish.png"/>

<p>Here the user is able to save information related to their catch such as type of fish, size, bait/lure used, line strength etc... This data is then saved to the database with an association to the user.</p>
 
**Previous Fish**
<img src="=Images/Previous.png"/>

<p> On this component the user can see a list of all their previous catches including the geolocation data and time of catch. Clicking on the globe icon will open a new tab that shows the exact coordinates of your catch including a satellite image. The red X icon will delete that catch from your Previous Fish list.</p>


**Weather**
<img src="=Images/Weather.png"/>

<p>The Weather component calls an API using your zipcode to give you a three day forecast of weather conditions that might affect your fishing trip.</p>

**Map**
<img src="=Images/Map.png"/>

<p>This map component uses Uber's React Map in order to display all of your catches on an interactive map. Zoom, scroll and traverse the globe as you see a visual representation of your hardwork!</p>

**Mobile Responsiveness**

<p>It's safe to assume most fisherman won't be bringing their laptops on their excusions so this application would be best suited for a mobile device, however, responsiveness is not perfect in this iteration. I would most likely rewrite the application using React Native if I revisit this project.</p>
