const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Plz Write the name before Search`;
    datahide.classList.add('data_hide')
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=016cb4106dc57708c72c91992ae2f9e6`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;

      const tempMode = arrData[0].weather[0].main;

      if (tempMode === "Clear") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-sun' style='color : #eccc68;'></i>";
      } else if (tempMode === "Clouds") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud'></i>";
      } else if (tempMode === "Rain") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-sun'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa-solid fa-sun'></i>";
      }

      datahide.classList.remove('data_hide')

    } catch (error) {
      city_name.innerText = `Plz enter the city name properly`;
      datahide.classList.add('data_hide')
    }
  }
};

submitBtn.addEventListener("click", getInfo);
