async function rocketData() {
  try {
    const response = await fetch("https://dknl.onrender.com/api/rocket");
    const userData = await response.json();
    console.log(userData);
    createHomeHTML(userData, userData.length - 1);
  } catch (error) {
    console.log(error);
  }
}

function createHomeHTML(userData, index) {
  const nav = document.getElementById("nav");
  const grid = document.getElementById("container");
  let currentItem = index;
  let date = new Date(userData[currentItem].created_at);
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  let year = date.getFullYear();
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');

  let formattedDate = `${day}-${month}/${year} at ${hours}:${minutes}:${seconds} GMT`;

  nav.innerHTML = `
    <div class="nav-container">
        <div class="nav-wrapper">
            <a href="../home/index.html" class="nav-link active">Home</a>
            <a href="../catalogue/index.html" class="nav-link">Catalogue    </a>
            <a href="../specs/index.html" class="nav-link">Specs</a>
            <a href="../aboutUs/index.html" class="nav-link">About us</a>
            <a href="../settings/index.html" class="nav-link">Settings</a>
        </div>
    </div>`;

  grid.innerHTML = `       
    <div class="home-container">
        <div class="pfAngle">
            <label class="infoLabel">
            <img src="../assets/SVG/info.svg">
            <div class="textContainer">
                <p id="launchBool">SUCCESS</p>
                <p id="text">The Launching platform is at a perfect angle, Get ready to take flight!</p>
            </div>
            </label>
        </div>   
    <div class="Launch">
        <label class="infoLabel2">You are clear for lift off</label>
        <button class="launchBTN">Launch</button>
    </div>
    <div class="sensorInfo">
        <p id="sensorName">Launch ID</p>
        <p id="sensorData">${userData[currentItem].launch_id}</p>
        <p id="sensorName">Launch date</p>
        <p id="sensorData">${formattedDate}</p>
        <p id="sensorName">Height reached</p>
        <p id="sensorData">${userData[currentItem].altitude}</p>
        <p id="sensorName">Temperature</p>
        <p id="sensorData">${userData[currentItem].temperature}</p>
        <p id="sensorName">Latitude change</p>
        <p id="sensorData">${userData[currentItem].start_latitude} - ${userData[currentItem].end_latitude}</p>
        <p id="sensorName">Longitude change</p>
        <p id="sensorData">${userData[currentItem].start_longitude} - ${userData[currentItem].end_longitude}</p>
    </div>
</div>`;
}

window.onload = function () {
  rocketData();
};
