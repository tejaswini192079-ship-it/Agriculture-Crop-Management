// 🌱 AGRICARE - Smart Agriculture Interaction System
// ======================================================
// Features:
// • Field Management
// • Crop Progress
// • Farm Activities
// • Yield Calculator
// • Harvest Progress
// • Live Weather
// • Smart Suggestions
// • Local Storage
// ======================================================


// ======================================================
// 🌱 PAGE LOAD
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌱 AgriCare Platform loaded successfully!");

    loadSavedFields();
    loadSavedHarvestProgress();
    initLiveWeather();

    setTimeout(() => {
        showMessage(
            "🌱 Welcome to AgriCare!",
            "Your smart companion for better crop management."
        );
    }, 800);


    // ==================================================
    // 🌾 GREETING
    // ==================================================

    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "🌅 Good morning, Farmer!";
    } else if (hour < 17) {
        greeting = "☀️ Good afternoon, Farmer!";
    } else {
        greeting = "🌙 Good evening, Farmer!";
    }

    console.log(greeting);


    // ==================================================
    // 🧭 NAVIGATION
    // ==================================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // ==================================================
    // 👨‍🌾 PROFILE
    // ==================================================

    const profileButton =
        document.querySelector(".profile-btn");

    if (profileButton) {

        profileButton.addEventListener("click", () => {

            showMessage(
                "👨‍🌾 Farmer Profile",
                "Welcome to your AgriCare farm dashboard. Manage your crops, fields and activities from one place."
            );

        });

    }

});


// ======================================================
// 🌟 MESSAGE / NOTIFICATION
// ======================================================

function showMessage(title, message) {

    const oldMessage =
        document.querySelector(".agri-message");

    if (oldMessage) {
        oldMessage.remove();
    }


    const box =
        document.createElement("div");

    box.className =
        "agri-message";


    box.innerHTML = `

        <div class="agri-message-content">

            <button class="close-message">
                ×
            </button>

            <h3>${title}</h3>

            <p>${message}</p>

        </div>

    `;


    document.body.appendChild(box);


    const closeButton =
        box.querySelector(".close-message");


    if (closeButton) {

        closeButton.addEventListener("click", () => {
            box.remove();
        });

    }


    setTimeout(() => {

        if (box.parentElement) {
            box.remove();
        }

    }, 5000);

}


// ======================================================
// 🌾 TODAY'S TASKS
// ======================================================

function showTasks() {

    const tasksSection =
        document.getElementById("tasks");

    if (!tasksSection) {
        return;
    }


    tasksSection.style.display =
        "block";


    tasksSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    showMessage(
        "🌾 Today's Farm Tasks",
        "You have irrigation, fertilizer and pest observation activities to complete today."
    );

}


// ======================================================
// ➕ ADD FIELD FORM
// ======================================================

function showAddFieldForm() {

    const form =
        document.getElementById("addFieldForm");

    if (!form) {
        return;
    }


    form.style.display =
        "block";


    form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    const cropInput =
        document.getElementById("cropName");


    if (cropInput) {

        setTimeout(() => {
            cropInput.focus();
        }, 500);

    }

}


// ======================================================
// 🌱 SAVE NEW FIELD
// ======================================================

function saveField() {

    const cropInput =
        document.getElementById("cropName");

    const acresInput =
        document.getElementById("cropAcres");

    const progressInput =
        document.getElementById("cropProgress");


    if (
        !cropInput ||
        !acresInput ||
        !progressInput
    ) {
        return;
    }


    const crop =
        cropInput.value.trim();

    const acres =
        acresInput.value.trim();

    const progress =
        parseInt(progressInput.value);


    // ==================================================
    // VALIDATION
    // ==================================================

    if (crop === "") {

        showMessage(
            "⚠️ Missing Crop Name",
            "Please enter the crop name."
        );

        cropInput.focus();

        return;
    }


    if (
        acres === "" ||
        Number(acres) <= 0
    ) {

        showMessage(
            "⚠️ Invalid Acres",
            "Please enter a valid number of acres greater than 0."
        );

        acresInput.focus();

        return;
    }


    if (
        isNaN(progress) ||
        progress < 0 ||
        progress > 100
    ) {

        showMessage(
            "⚠️ Invalid Crop Progress",
            "Please enter crop progress between 0 and 100%."
        );

        progressInput.focus();

        return;
    }


    // ==================================================
    // CREATE FIELD OBJECT
    // ==================================================

    const field = {

        id: Date.now(),

        crop: crop,

        acres: acres,

        progress: progress

    };


    // ==================================================
    // SAVE TO LOCAL STORAGE
    // ==================================================

    const savedFields =
        JSON.parse(
            localStorage.getItem("agriCareFields")
        ) || [];


    savedFields.push(field);


    localStorage.setItem(
        "agriCareFields",
        JSON.stringify(savedFields)
    );


    // ==================================================
    // DISPLAY FIELD
    // ==================================================

    displayField(field);


    // ==================================================
    // UPDATE COUNT
    // ==================================================

    updateFieldCount();


    // ==================================================
    // CLEAR FORM
    // ==================================================

    cropInput.value = "";

    acresInput.value = "";

    progressInput.value = "";


    const form =
        document.getElementById("addFieldForm");


    if (form) {
        form.style.display = "none";
    }


    showMessage(
        "🌱 Field Added Successfully!",
        `${crop} field with ${acres} acres and ${progress}% crop progress has been saved.`
    );

}


// ======================================================
// 🌱 DISPLAY FIELD
// ======================================================

function displayField(field) {

    const fieldsContainer =
        document.getElementById("newFields");

    if (!fieldsContainer) {
        return;
    }


    const newField =
        document.createElement("article");

    newField.className =
        "field-card";


    newField.dataset.fieldId =
        field.id;


    newField.innerHTML = `

        <div class="field-top">

            <span class="crop-emoji">
                🌱
            </span>

            <span class="status healthy">
                ● Healthy
            </span>

        </div>


        <h3>
            ${escapeHTML(field.crop)} Field
        </h3>


        <p class="field-location">
            📍 New Field • ${field.acres} Acres
        </p>


        <div class="crop-info">

            <div>

                <span>
                    Crop
                </span>

                <strong>
                    ${escapeHTML(field.crop)}
                </strong>

            </div>


            <div>

                <span>
                    Stage
                </span>

                <strong>
                    🌱 Planting
                </strong>

            </div>

        </div>


        <div class="progress-area">

            <div class="progress-text">

                <span>
                    Crop Progress
                </span>

                <strong>
                    ${field.progress}%
                </strong>

            </div>


            <div class="progress-bar">

                <div
                    style="width:${field.progress}%">
                </div>

            </div>


            <p>
                🌱 Crop Progress: ${field.progress}%
            </p>

        </div>


        <button
            class="card-btn new-field-view">

            View Field →

        </button>

    `;


    fieldsContainer.appendChild(newField);


    // ==================================================
    // VIEW FIELD
    // ==================================================

    const viewButton =
        newField.querySelector(".new-field-view");


    if (viewButton) {

        viewButton.addEventListener("click", () => {

            viewField(
                `${field.crop} Field`,
                field.crop,
                "Planting",
                `${field.progress}%`
            );

        });

    }

}


// ======================================================
// 🔄 LOAD SAVED FIELDS
// ======================================================

function loadSavedFields() {

    const savedFields =
        JSON.parse(
            localStorage.getItem("agriCareFields")
        ) || [];


    savedFields.forEach(field => {

        displayField(field);

    });


    updateFieldCount();

}


// ======================================================
// 🔢 UPDATE FIELD COUNT
// ======================================================

function updateFieldCount() {

    const fieldCount =
        document.getElementById("fieldCount");

    if (!fieldCount) {
        return;
    }


    const savedFields =
        JSON.parse(
            localStorage.getItem("agriCareFields")
        ) || [];


    // Existing fields in your HTML = 3
    const totalFields =
        3 + savedFields.length;


    fieldCount.innerText =
        totalFields;

}


// ======================================================
// 👀 VIEW FIELD DETAILS
// ======================================================

function viewField(
    name,
    crop,
    stage,
    progress
) {

    const details =
        document.getElementById("fieldDetails");


    if (!details) {
        return;
    }


    const detailName =
        document.getElementById("detailName");

    const detailCrop =
        document.getElementById("detailCrop");

    const detailStage =
        document.getElementById("detailStage");

    const detailProgress =
        document.getElementById("detailProgress");


    if (detailName) {
        detailName.innerText = name;
    }


    if (detailCrop) {
        detailCrop.innerText = crop;
    }


    if (detailStage) {
        detailStage.innerText = stage;
    }


    if (detailProgress) {
        detailProgress.innerText = progress;
    }


    details.style.display =
        "block";


    details.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    showMessage(
        "🌾 Field Details",
        `${name} is growing ${crop}. Current stage: ${stage}. Crop progress: ${progress}.`
    );

}


// ======================================================
// ✅ COMPLETE FARM TASK
// ======================================================

function completeTask(button) {

    if (!button) {
        return;
    }


    if (button.dataset.completed === "true") {
        return;
    }


    button.dataset.completed =
        "true";


    button.innerText =
        "✓ Completed";


    button.disabled =
        true;


    button.style.opacity =
        "0.7";


    button.style.cursor =
        "default";


    showMessage(
        "✅ Task Completed!",
        "Great work, Farmer! Your farm activity has been marked as completed."
    );

}


// ======================================================
// 🧮 CROP YIELD CALCULATOR
// ======================================================

function calculateYield() {

    const acresInput =
        document.getElementById("acres");

    const yieldInput =
        document.getElementById("yieldPerAcre");

    const result =
        document.getElementById("result");


    if (
        !acresInput ||
        !yieldInput ||
        !result
    ) {
        return;
    }


    const acres =
        parseFloat(acresInput.value);

    const yieldPerAcre =
        parseFloat(yieldInput.value);


    if (
        isNaN(acres) ||
        isNaN(yieldPerAcre) ||
        acres <= 0 ||
        yieldPerAcre <= 0
    ) {

        result.innerText =
            "⚠️ Please enter valid values for both fields.";

        return;
    }


    const totalYield =
        acres * yieldPerAcre;


    result.innerText =
        "🌾 Estimated Harvest: " +
        totalYield.toFixed(2) +
        " kg";


    showMessage(
        "🧮 Yield Calculated",
        `Your estimated harvest is ${totalYield.toFixed(2)} kg.`
    );

}


// ======================================================
// 🚜 UPDATE HARVEST PROGRESS
// ======================================================

function updateProgress() {

    const progressInput =
        document.getElementById("progressInput");

    const progressFill =
        document.getElementById("progress-fill");

    const progressText =
        document.getElementById("progress-text");

    const progressMessage =
        document.getElementById("progress-message");

    const currentProgress =
        document.getElementById("currentProgress");

    const harvestPercentage =
        document.getElementById("harvestPercentage");

    const dashboardProgress =
        document.getElementById("dashboardProgress");


    if (
        !progressInput ||
        !progressFill
    ) {
        return;
    }


    const progress =
        parseInt(progressInput.value);


    if (
        isNaN(progress) ||
        progress < 0 ||
        progress > 100
    ) {

        if (progressMessage) {

            progressMessage.innerText =
                "⚠️ Please enter a value between 0 and 100.";

        }

        return;
    }


    // ==================================================
    // SAVE HARVEST PROGRESS
    // ==================================================

    localStorage.setItem(
        "agriCareHarvestProgress",
        progress
    );


    // ==================================================
    // UPDATE UI
    // ==================================================

    progressFill.style.width =
        progress + "%";


    if (currentProgress) {
        currentProgress.innerText =
            progress + "%";
    }


    if (harvestPercentage) {
        harvestPercentage.innerText =
            progress + "%";
    }


    if (dashboardProgress) {
        dashboardProgress.innerText =
            progress + "%";
    }


    if (progressMessage) {

        progressMessage.innerText =
            "🌱 Harvest Readiness: " +
            progress +
            "%";

    }


    if (progressText) {

        progressText.innerText =
            "Harvest Readiness: " +
            progress +
            "%";

    }


    if (progress === 100) {

        showMessage(
            "🎉 Harvest Ready!",
            "Excellent! Your crop has reached 100% harvest readiness."
        );

    } else if (progress >= 80) {

        showMessage(
            "🚜 Harvest Almost Ready!",
            "Your crop is getting close to harvest. Start preparing your harvesting activities."
        );

    } else {

        showMessage(
            "📊 Progress Updated",
            `Harvest readiness is now ${progress}%. Keep monitoring your crop.`
        );

    }

}


// ======================================================
// 🔄 LOAD SAVED HARVEST PROGRESS
// ======================================================

function loadSavedHarvestProgress() {

    const savedProgress =
        localStorage.getItem(
            "agriCareHarvestProgress"
        );


    if (savedProgress === null) {
        return;
    }


    const progress =
        parseInt(savedProgress);


    if (
        isNaN(progress) ||
        progress < 0 ||
        progress > 100
    ) {
        return;
    }


    const progressFill =
        document.getElementById("progress-fill");

    const progressText =
        document.getElementById("progress-text");

    const currentProgress =
        document.getElementById("currentProgress");

    const harvestPercentage =
        document.getElementById("harvestPercentage");

    const dashboardProgress =
        document.getElementById("dashboardProgress");


    if (progressFill) {
        progressFill.style.width =
            progress + "%";
    }


    if (progressText) {
        progressText.innerText =
            "Harvest Readiness: " +
            progress +
            "%";
    }


    if (currentProgress) {
        currentProgress.innerText =
            progress + "%";
    }


    if (harvestPercentage) {
        harvestPercentage.innerText =
            progress + "%";
    }


    if (dashboardProgress) {
        dashboardProgress.innerText =
            progress + "%";
    }

}


// ======================================================
// 🌦️ LIVE WEATHER SYSTEM
// ======================================================

function initLiveWeather() {

    const weatherSection =
        document.getElementById("conditions");


    if (!weatherSection) {
        return;
    }


    const locationText =
        document.getElementById("weather-location");


    if (locationText) {

        locationText.innerText =
            "📍 Requesting your location...";

    }


    if (!navigator.geolocation) {

        showWeatherError(
            "Your browser does not support location services."
        );

        return;
    }


    navigator.geolocation.getCurrentPosition(

        position => {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            console.log(
                "📍 Location:",
                latitude,
                longitude
            );


            getLiveWeather(
                latitude,
                longitude
            );

        },


        error => {

            console.log(
                "Location error:",
                error.message
            );


            showWeatherError(
                "Location permission was not allowed. Please allow location access to see live weather."
            );

        },


        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
        }

    );

}


// ======================================================
// 🌦️ GET LIVE WEATHER
// ======================================================

async function getLiveWeather(
    latitude,
    longitude
) {

    try {

        const weatherURL =
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,wind_speed_10m` +
            `&hourly=precipitation_probability,soil_moisture_0_to_1cm` +
            `&forecast_days=1` +
            `&timezone=auto`;


        const response =
            await fetch(weatherURL);


        if (!response.ok) {

            throw new Error(
                "Weather service unavailable."
            );

        }


        const data =
            await response.json();


        console.log(
            "🌦️ Live Weather Data:",
            data
        );


        updateWeatherUI(
            data,
            latitude,
            longitude
        );


    } catch (error) {

        console.error(
            "Weather error:",
            error
        );


        showWeatherError(
            "Live weather could not be loaded right now."
        );

    }

}


// ======================================================
// 🌤️ WEATHER DESCRIPTION
// ======================================================

function getWeatherDescription(code) {

    const weatherCodes = {

        0: "Clear Sky ☀️",

        1: "Mainly Clear 🌤️",
        2: "Partly Cloudy ⛅",
        3: "Overcast ☁️",

        45: "Foggy 🌫️",
        48: "Foggy 🌫️",

        51: "Light Drizzle 🌦️",
        53: "Drizzle 🌦️",
        55: "Heavy Drizzle 🌧️",

        61: "Light Rain 🌦️",
        63: "Rain 🌧️",
        65: "Heavy Rain 🌧️",

        71: "Light Snow ❄️",
        73: "Snow ❄️",
        75: "Heavy Snow ❄️",

        80: "Rain Showers 🌦️",
        81: "Rain Showers 🌧️",
        82: "Heavy Rain Showers 🌧️",

        95: "Thunderstorm ⛈️",
        96: "Thunderstorm with Hail ⛈️",
        99: "Severe Thunderstorm ⛈️"

    };


    return weatherCodes[code] ||
        "Weather data available";

}


// ======================================================
// 🌦️ UPDATE WEATHER UI
// ======================================================

function updateWeatherUI(
    data,
    latitude,
    longitude
) {

    const current =
        data.current || {};

    const hourly =
        data.hourly || {};


    const temperature =
        current.temperature_2m;

    const humidity =
        current.relative_humidity_2m;

    const wind =
        current.wind_speed_10m;

    const weatherCode =
        current.weather_code;


    const weatherDescription =
        getWeatherDescription(
            weatherCode
        );


    // ==================================================
    // 📍 LOCATION
    // ==================================================

    const locationElement =
        document.getElementById(
            "weather-location"
        );


    if (locationElement) {

        locationElement.innerText =
            `📍 Live weather near your current location (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`;

    }


    // ==================================================
    // 🌡️ TEMPERATURE
    // ==================================================

    const temperatureElement =
        document.getElementById(
            "temperature-value"
        );

    const temperatureMessage =
        document.getElementById(
            "temperature-message"
        );


    if (temperatureElement) {

        temperatureElement.innerText =
            `${Math.round(temperature)}°C`;

    }


    if (temperatureMessage) {

        if (temperature >= 35) {

            temperatureMessage.innerText =
                "High heat — monitor crops.";

        } else if (temperature <= 15) {

            temperatureMessage.innerText =
                "Cool conditions.";

        } else {

            temperatureMessage.innerText =
                "Current outdoor temperature.";

        }

    }


    // ==================================================
    // 💧 HUMIDITY
    // ==================================================

    const humidityElement =
        document.getElementById(
            "humidity-value"
        );

    const humidityMessage =
        document.getElementById(
            "humidity-message"
        );


    if (humidityElement) {

        humidityElement.innerText =
            `${Math.round(humidity)}%`;

    }


    if (humidityMessage) {

        if (humidity >= 80) {

            humidityMessage.innerText =
                "High humidity — monitor fungal risk.";

        } else if (humidity <= 35) {

            humidityMessage.innerText =
                "Low humidity — crops may lose moisture.";

        } else {

            humidityMessage.innerText =
                "Current outdoor humidity.";

        }

    }


    // ==================================================
    // ☁️ WEATHER
    // ==================================================

    const weatherElement =
        document.getElementById(
            "weather-value"
        );

    const weatherMessage =
        document.getElementById(
            "weather-message"
        );


    if (weatherElement) {

        weatherElement.innerText =
            weatherDescription;

    }


    if (weatherMessage) {

        weatherMessage.innerText =
            "Live weather condition.";

    }


    // ==================================================
    // 🌧️ RAIN PROBABILITY
    // ==================================================

    let rainProbability = 0;


    if (
        hourly.precipitation_probability &&
        hourly.time
    ) {

        const now =
            new Date();


        let closestIndex = 0;

        let smallestDifference =
            Infinity;


        hourly.time.forEach(
            (time, index) => {

                const forecastTime =
                    new Date(time);


                const difference =
                    Math.abs(
                        forecastTime - now
                    );


                if (
                    difference <
                    smallestDifference
                ) {

                    smallestDifference =
                        difference;

                    closestIndex =
                        index;

                }

            }
        );


        rainProbability =
            hourly.precipitation_probability[
                closestIndex
            ] ?? 0;

    }


    const rainElement =
        document.getElementById(
            "rain-value"
        );

    const rainMessage =
        document.getElementById(
            "rain-message"
        );


    if (rainElement) {

        rainElement.innerText =
            `${Math.round(rainProbability)}%`;

    }


    if (rainMessage) {

        if (rainProbability >= 70) {

            rainMessage.innerText =
                "High chance of rain.";

        } else if (rainProbability >= 40) {

            rainMessage.innerText =
                "Possible rainfall.";

        } else {

            rainMessage.innerText =
                "Low chance of rain.";

        }

    }


    // ==================================================
    // 💨 WIND
    // ==================================================

    const windElement =
        document.getElementById(
            "wind-value"
        );

    const windMessage =
        document.getElementById(
            "wind-message"
        );


    if (windElement) {

        windElement.innerText =
            `${Math.round(wind)} km/h`;

    }


    if (windMessage) {

        if (wind >= 30) {

            windMessage.innerText =
                "Strong wind — avoid spraying.";

        } else if (wind >= 15) {

            windMessage.innerText =
                "Moderate wind conditions.";

        } else {

            windMessage.innerText =
                "Light wind conditions.";

        }

    }


    // ==================================================
    // 🌱 SOIL MOISTURE ESTIMATE
    // ==================================================

    let soilMoisture = null;


    if (
        hourly.soil_moisture_0_to_1cm &&
        hourly.time
    ) {

        const now =
            new Date();


        let closestIndex = 0;

        let smallestDifference =
            Infinity;


        hourly.time.forEach(
            (time, index) => {

                const forecastTime =
                    new Date(time);


                const difference =
                    Math.abs(
                        forecastTime - now
                    );


                if (
                    difference <
                    smallestDifference
                ) {

                    smallestDifference =
                        difference;

                    closestIndex =
                        index;

                }

            }
        );


        soilMoisture =
            hourly.soil_moisture_0_to_1cm[
                closestIndex
            ];

    }


    const soilElement =
        document.getElementById(
            "soil-value"
        );

    const soilMessage =
        document.getElementById(
            "soil-message"
        );


    if (soilMoisture !== null) {

        const soilPercent =
            Math.round(
                soilMoisture * 100
            );


        if (soilElement) {

            soilElement.innerText =
                `${soilPercent}%`;

        }


        if (soilMessage) {

            if (soilPercent < 25) {

                soilMessage.innerText =
                    "Dry soil estimate.";

            } else if (soilPercent < 60) {

                soilMessage.innerText =
                    "Moderate moisture estimate.";

            } else {

                soilMessage.innerText =
                    "Moist soil estimate.";

            }

        }

    } else {

        if (soilElement) {
            soilElement.innerText = "N/A";
        }

        if (soilMessage) {

            soilMessage.innerText =
                "Soil sensor data unavailable.";

        }

    }


    // ==================================================
    // 💡 SMART SUGGESTIONS
    // ==================================================

    updateSmartSuggestions(
        temperature,
        humidity,
        rainProbability,
        wind
    );

}


// ======================================================
// 💡 SMART FARM SUGGESTIONS
// ======================================================

function updateSmartSuggestions(
    temperature,
    humidity,
    rainProbability,
    wind
) {

    const irrigationSuggestion =
        document.getElementById(
            "irrigation-suggestion"
        );

    const irrigationText =
        document.getElementById(
            "irrigation-text"
        );

    const weatherSuggestion =
        document.getElementById(
            "weather-suggestion"
        );

    const weatherSuggestionText =
        document.getElementById(
            "weather-suggestion-text"
        );

    const cropSuggestion =
        document.getElementById(
            "crop-suggestion"
        );

    const cropSuggestionText =
        document.getElementById(
            "crop-suggestion-text"
        );


    // ==================================================
    // 💧 IRRIGATION
    // ==================================================

    if (rainProbability >= 70) {

        if (irrigationSuggestion) {
            irrigationSuggestion.innerText =
                "Delay irrigation";
        }

        if (irrigationText) {
            irrigationText.innerText =
                "Rain is likely. Avoid unnecessary watering and check field drainage.";
        }

    } else if (
        rainProbability <= 20 &&
        temperature >= 30
    ) {

        if (irrigationSuggestion) {
            irrigationSuggestion.innerText =
                "Check irrigation";
        }

        if (irrigationText) {
            irrigationText.innerText =
                "Low rain chance with warm conditions. Check soil moisture before watering.";
        }

    } else {

        if (irrigationSuggestion) {
            irrigationSuggestion.innerText =
                "Monitor soil moisture";
        }

        if (irrigationText) {
            irrigationText.innerText =
                "Use current weather and field conditions to decide the next irrigation cycle.";
        }

    }


    // ==================================================
    // 🌦️ WEATHER
    // ==================================================

    if (rainProbability >= 70) {

        if (weatherSuggestion) {
            weatherSuggestion.innerText =
                "Rain expected";
        }

        if (weatherSuggestionText) {
            weatherSuggestionText.innerText =
                "Plan field work around rainfall and keep drainage channels clear.";
        }

    } else if (wind >= 30) {

        if (weatherSuggestion) {
            weatherSuggestion.innerText =
                "Strong wind";
        }

        if (weatherSuggestionText) {
            weatherSuggestionText.innerText =
                "Avoid spraying and secure young plants where possible.";
        }

    } else {

        if (weatherSuggestion) {
            weatherSuggestion.innerText =
                "Weather suitable";
        }

        if (weatherSuggestionText) {
            weatherSuggestionText.innerText =
                "Current conditions can be used to plan routine farm activities.";
        }

    }


    // ==================================================
    // 🌱 CROP CARE
    // ==================================================

    if (
        humidity >= 80 &&
        rainProbability >= 50
    ) {

        if (cropSuggestion) {
            cropSuggestion.innerText =
                "Monitor disease risk";
        }

        if (cropSuggestionText) {
            cropSuggestionText.innerText =
                "Warm, humid and wet conditions can increase fungal disease risk. Inspect crops regularly.";
        }

    } else if (wind >= 30) {

        if (cropSuggestion) {
            cropSuggestion.innerText =
                "Protect crops from wind";
        }

        if (cropSuggestionText) {
            cropSuggestionText.innerText =
                "Strong winds may damage tender plants. Avoid unnecessary field spraying.";
        }

    } else if (temperature >= 35) {

        if (cropSuggestion) {
            cropSuggestion.innerText =
                "Monitor heat stress";
        }

        if (cropSuggestionText) {
            cropSuggestionText.innerText =
                "High temperature can increase crop water demand. Check plants and soil regularly.";
        }

    } else {

        if (cropSuggestion) {
            cropSuggestion.innerText =
                "Continue crop monitoring";
        }

        if (cropSuggestionText) {
            cropSuggestionText.innerText =
                "Monitor crop growth, pests and field conditions regularly.";
        }

    }

}


// ======================================================
// ⚠️ WEATHER ERROR
// ======================================================

function showWeatherError(message) {

    const locationElement =
        document.getElementById(
            "weather-location"
        );


    if (locationElement) {

        locationElement.innerText =
            "📍 Live weather unavailable";

    }


    const weatherElement =
        document.getElementById(
            "weather-value"
        );


    if (weatherElement) {
        weatherElement.innerText = "Unavailable";
    }


    const temperatureElement =
        document.getElementById(
            "temperature-value"
        );


    if (temperatureElement) {
        temperatureElement.innerText = "--°C";
    }


    const humidityElement =
        document.getElementById(
            "humidity-value"
        );


    if (humidityElement) {
        humidityElement.innerText = "--%";
    }


    const rainElement =
        document.getElementById(
            "rain-value"
        );


    if (rainElement) {
        rainElement.innerText = "--%";
    }


    const windElement =
        document.getElementById(
            "wind-value"
        );


    if (windElement) {
        windElement.innerText = "-- km/h";
    }


    const soilElement =
        document.getElementById(
            "soil-value"
        );


    if (soilElement) {
        soilElement.innerText = "N/A";
    }


    const weatherMessage =
        document.getElementById(
            "weather-message"
        );


    if (weatherMessage) {

        weatherMessage.innerText =
            message;

    }


    const temperatureMessage =
        document.getElementById(
            "temperature-message"
        );


    if (temperatureMessage) {

        temperatureMessage.innerText =
            "Live data unavailable.";

    }


    const humidityMessage =
        document.getElementById(
            "humidity-message"
        );


    if (humidityMessage) {

        humidityMessage.innerText =
            "Live data unavailable.";

    }


    const rainMessage =
        document.getElementById(
            "rain-message"
        );


    if (rainMessage) {

        rainMessage.innerText =
            "Live data unavailable.";

    }


    const windMessage =
        document.getElementById(
            "wind-message"
        );


    if (windMessage) {

        windMessage.innerText =
            "Live data unavailable.";

    }


    const soilMessage =
        document.getElementById(
            "soil-message"
        );


    if (soilMessage) {

        soilMessage.innerText =
            "No live soil data.";

    }


    console.log(
        "⚠️ Weather:",
        message
    );

}


// ======================================================
// 🔐 BASIC HTML SAFETY
// ======================================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
