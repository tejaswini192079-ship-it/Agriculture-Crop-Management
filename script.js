// ======================================================
// 🌱 AGRICARE - SMART AGRICULTURE MANAGEMENT SYSTEM
// ======================================================
// Features:
// • Dashboard
// • Field Management
// • Crop Progress
// • Farm Activities
// • Yield Calculator
// • Harvest Progress
// • Live Weather
// • Smart Farm Suggestions
// • Local Storage
// • NO DEVICE LOCATION ACCESS
// ======================================================


// ======================================================
// 🚀 PAGE LOAD
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("🌱 AgriCare loaded successfully!");

    loadSavedFields();

    loadSavedHarvestProgress();

    initLiveWeather();

    updateGreeting();

    setupNavigation();

    setupProfile();

});


// ======================================================
// 💬 MESSAGE SYSTEM
// ======================================================

function showMessage(message, type = "success") {

    const oldMessage =
        document.querySelector(".agri-message");

    if (oldMessage) {
        oldMessage.remove();
    }

    const box =
        document.createElement("div");

    box.className = "agri-message";

    box.textContent = message;

    box.style.position = "fixed";
    box.style.top = "85px";
    box.style.right = "25px";
    box.style.zIndex = "9999";
    box.style.padding = "14px 20px";
    box.style.borderRadius = "12px";
    box.style.background =
        type === "error"
            ? "#b91c1c"
            : "#14532d";
    box.style.color = "white";
    box.style.fontWeight = "600";
    box.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.15)";

    document.body.appendChild(box);

    setTimeout(function () {

        box.style.opacity = "0";
        box.style.transition = "0.4s";

        setTimeout(function () {
            box.remove();
        }, 400);

    }, 3000);
}


// ======================================================
// 📝 TASKS
// ======================================================

function showTasks() {

    const section =
        document.getElementById("tasks");

    if (!section) {

        showMessage(
            "Today's farm tasks are ready to review."
        );

        return;
    }

    section.style.display = "block";

    section.scrollIntoView({
        behavior: "smooth"
    });
}


// ======================================================
// 🌾 ADD FIELD FORM
// ======================================================

function showAddFieldForm() {

    const form =
        document.getElementById("addFieldForm");

    if (!form) return;

    if (
        form.style.display === "none" ||
        form.style.display === ""
    ) {

        form.style.display = "block";

        form.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {

        form.style.display = "none";

    }
}


// ======================================================
// 🌱 SAVE NEW FIELD
// ======================================================

function saveField() {

    const cropName =
        document.getElementById("cropName").value.trim();

    const acres =
        Number(
            document.getElementById("cropAcres").value
        );

    const progress =
        Number(
            document.getElementById("cropProgress").value
        );


    if (!cropName) {

        showMessage(
            "Please enter the crop name.",
            "error"
        );

        return;
    }


    if (!acres || acres <= 0) {

        showMessage(
            "Please enter valid acres.",
            "error"
        );

        return;
    }


    if (
        isNaN(progress) ||
        progress < 0 ||
        progress > 100
    ) {

        showMessage(
            "Progress must be between 0 and 100.",
            "error"
        );

        return;
    }


    const field = {

        id: Date.now(),

        crop: cropName,

        acres: acres,

        progress: progress

    };


    let fields = [];

    try {

        fields =
            JSON.parse(
                localStorage.getItem(
                    "agriCareFields"
                )
            ) || [];

    } catch (error) {

        fields = [];

    }


    fields.push(field);


    localStorage.setItem(
        "agriCareFields",
        JSON.stringify(fields)
    );


    displayField(field);

    updateFieldCount();


    document.getElementById(
        "cropName"
    ).value = "";

    document.getElementById(
        "cropAcres"
    ).value = "";

    document.getElementById(
        "cropProgress"
    ).value = "";


    const form =
        document.getElementById("addFieldForm");

    if (form) {
        form.style.display = "none";
    }


    showMessage(
        `🌱 ${cropName} field added successfully!`
    );
}


// ======================================================
// 🌾 DISPLAY FIELD
// ======================================================

function displayField(field) {

    const container =
        document.getElementById("newFields");

    if (!container) return;


    let stage = "Planning";


    if (field.progress >= 80) {

        stage = "Maturity";

    } else if (field.progress >= 50) {

        stage = "Flowering";

    } else if (field.progress >= 20) {

        stage = "Vegetative";

    }


    const card =
        document.createElement("div");

    card.className = "field-card";


    card.innerHTML = `

        <div class="field-card-content">

            <div>

                <h3>
                    🌱 ${escapeHTML(field.crop)}
                </h3>

                <p>
                    ${field.acres} acres
                </p>

                <p>
                    Stage: ${stage}
                </p>

            </div>

            <div class="field-progress">

                <strong>
                    ${field.progress}%
                </strong>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${field.progress}%"
                    ></div>

                </div>

            </div>

            <button
                class="primary-btn"
                onclick="viewField(${field.id})"
            >
                View Field
            </button>

        </div>

    `;


    container.appendChild(card);
}


// ======================================================
// 📂 LOAD SAVED FIELDS
// ======================================================

function loadSavedFields() {

    let fields = [];

    try {

        fields =
            JSON.parse(
                localStorage.getItem(
                    "agriCareFields"
                )
            ) || [];

    } catch (error) {

        fields = [];

    }


    fields.forEach(function (field) {

        displayField(field);

    });


    updateFieldCount();
}


// ======================================================
// 🔢 FIELD COUNT
// ======================================================

function updateFieldCount() {

    const count =
        document.getElementById("fieldCount");

    if (!count) return;


    let fields = [];

    try {

        fields =
            JSON.parse(
                localStorage.getItem(
                    "agriCareFields"
                )
            ) || [];

    } catch (error) {

        fields = [];

    }


    count.textContent =
        3 + fields.length;
}


// ======================================================
// 👀 VIEW FIELD
// ======================================================

function viewField(id) {

    let fields = [];

    try {

        fields =
            JSON.parse(
                localStorage.getItem(
                    "agriCareFields"
                )
            ) || [];

    } catch (error) {

        fields = [];

    }


    const field =
        fields.find(function (item) {

            return item.id === id;

        });


    if (!field) return;


    const details =
        document.getElementById(
            "fieldDetails"
        );


    if (!details) {

        showMessage(
            `${field.crop} • ${field.acres} acres • ${field.progress}% complete`
        );

        return;
    }


    details.innerHTML = `

        <h3>
            🌱 ${escapeHTML(field.crop)}
        </h3>

        <p>
            Area: ${field.acres} acres
        </p>

        <p>
            Crop Progress: ${field.progress}%
        </p>

    `;


    details.style.display = "block";

    details.scrollIntoView({
        behavior: "smooth"
    });
}


// ======================================================
// ✅ COMPLETE TASK
// ======================================================

function completeTask(button) {

    if (!button) return;

    button.textContent =
        "✓ Completed";

    button.disabled = true;

    button.style.opacity = "0.7";


    showMessage(
        "✅ Farm task completed!"
    );
}


// ======================================================
// 🧮 YIELD CALCULATOR
// ======================================================

function calculateYield() {

    const acres =
        Number(
            document.getElementById(
                "acres"
            ).value
        );

    const yieldPerAcre =
        Number(
            document.getElementById(
                "yieldPerAcre"
            ).value
        );

    const result =
        document.getElementById(
            "result"
        );


    if (
        !acres ||
        acres <= 0 ||
        !yieldPerAcre ||
        yieldPerAcre <= 0
    ) {

        result.textContent =
            "Please enter valid values.";

        return;
    }


    const total =
        acres * yieldPerAcre;


    result.textContent =
        `Estimated Total Yield: ${total.toFixed(2)} units`;
}


// ======================================================
// 🌽 HARVEST PROGRESS
// ======================================================

function updateProgress() {

    const input =
        document.getElementById(
            "progressInput"
        );

    if (!input) return;


    let progress =
        Number(input.value);


    if (
        isNaN(progress) ||
        progress < 0 ||
        progress > 100
    ) {

        showMessage(
            "Please enter progress between 0 and 100.",
            "error"
        );

        return;
    }


    progress =
        Math.round(progress);


    localStorage.setItem(
        "agriCareHarvestProgress",
        progress
    );


    updateHarvestUI(progress);


    showMessage(
        "🌾 Harvest progress updated!"
    );
}


// ======================================================
// 📊 UPDATE HARVEST UI
// ======================================================

function updateHarvestUI(progress) {

    const fill =
        document.getElementById(
            "progress-fill"
        );

    if (fill) {

        fill.style.width =
            `${progress}%`;

    }


    const current =
        document.getElementById(
            "currentProgress"
        );

    if (current) {

        current.textContent =
            `${progress}%`;

    }


    const percentage =
        document.getElementById(
            "harvestPercentage"
        );

    if (percentage) {

        percentage.textContent =
            `${progress}%`;

    }


    const dashboard =
        document.getElementById(
            "dashboardProgress"
        );

    if (dashboard) {

        dashboard.textContent =
            `${progress}%`;

    }


    const text =
        document.getElementById(
            "progress-text"
        );

    if (text) {

        text.textContent =
            `${progress}% complete`;

    }


    const message =
        document.getElementById(
            "progress-message"
        );


    if (!message) return;


    if (progress >= 100) {

        message.textContent =
            "🎉 Harvest completed!";

    } else if (progress >= 80) {

        message.textContent =
            "🌾 Harvest is almost ready.";

    } else if (progress >= 50) {

        message.textContent =
            "🌱 Crop is progressing well.";

    } else {

        message.textContent =
            "🌱 Crop is still developing.";

    }
}


// ======================================================
// 📂 LOAD HARVEST PROGRESS
// ======================================================

function loadSavedHarvestProgress() {

    const saved =
        localStorage.getItem(
            "agriCareHarvestProgress"
        );


    if (saved === null) return;


    const progress =
        Number(saved);


    if (
        isNaN(progress) ||
        progress < 0 ||
        progress > 100
    ) return;


    updateHarvestUI(progress);
}


// ======================================================
// 🌦️ LIVE WEATHER
// ======================================================
// 📍 Fixed location: Phagwara, Punjab
// ❌ No browser location
// ❌ No location permission
// ======================================================

function initLiveWeather() {

    const latitude =
        31.2240;

    const longitude =
        75.7708;


    const location =
        document.getElementById(
            "weather-location"
        );


    if (location) {

        location.textContent =
            "📍 Phagwara, Punjab";

    }


    getLiveWeather(
        latitude,
        longitude
    );
}


// ======================================================
// 🌦️ FETCH WEATHER
// ======================================================

async function getLiveWeather(
    latitude,
    longitude
) {

    try {

        const url =
            "https://api.open-meteo.com/v1/forecast" +
            "?latitude=" + latitude +
            "&longitude=" + longitude +
            "&current=" +
            "temperature_2m," +
            "relative_humidity_2m," +
            "apparent_temperature," +
            "weather_code," +
            "wind_speed_10m" +
            "&hourly=precipitation_probability" +
            "&forecast_days=1" +
            "&timezone=auto";


        console.log(
            "🌦️ Requesting weather..."
        );


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Weather API returned " +
                response.status
            );

        }


        const data =
            await response.json();


        console.log(
            "✅ Weather received:",
            data
        );


        displayWeather(data);

    }

    catch (error) {

        console.error(
            "❌ Weather error:",
            error
        );


        showWeatherError();
    }
}


// ======================================================
// ❌ WEATHER ERROR
// ======================================================

function showWeatherError() {

    const location =
        document.getElementById(
            "weather-location"
        );


    if (location) {

        location.textContent =
            "📍 Phagwara, Punjab • Live weather unavailable";

    }


    const temperature =
        document.getElementById(
            "temperature-value"
        );


    const humidity =
        document.getElementById(
            "humidity-value"
        );


    const weather =
        document.getElementById(
            "weather-value"
        );


    const rain =
        document.getElementById(
            "rain-value"
        );


    const wind =
        document.getElementById(
            "wind-value"
        );


    const soil =
        document.getElementById(
            "soil-value"
        );


    if (temperature) {

        temperature.textContent =
            "--°C";

    }


    if (humidity) {

        humidity.textContent =
            "--%";

    }


    if (weather) {

        weather.textContent =
            "Unavailable";

    }


    if (rain) {

        rain.textContent =
            "--%";

    }


    if (wind) {

        wind.textContent =
            "-- km/h";

    }


    if (soil) {

        soil.textContent =
            "N/A";

    }


    const temperatureMessage =
        document.getElementById(
            "temperature-message"
        );


    const humidityMessage =
        document.getElementById(
            "humidity-message"
        );


    const weatherMessage =
        document.getElementById(
            "weather-message"
        );


    const rainMessage =
        document.getElementById(
            "rain-message"
        );


    const windMessage =
        document.getElementById(
            "wind-message"
        );


    if (temperatureMessage) {

        temperatureMessage.textContent =
            "Live data unavailable.";

    }


    if (humidityMessage) {

        humidityMessage.textContent =
            "Live data unavailable.";

    }


    if (weatherMessage) {

        weatherMessage.textContent =
            "Weather service unavailable.";

    }


    if (rainMessage) {

        rainMessage.textContent =
            "Live data unavailable.";

    }


    if (windMessage) {

        windMessage.textContent =
            "Live data unavailable.";

    }
}


// ======================================================
// ☁️ WEATHER DESCRIPTION
// ======================================================

function getWeatherDescription(code) {

    const codes = {

        0: "Clear Sky",

        1: "Mainly Clear",

        2: "Partly Cloudy",

        3: "Overcast",

        45: "Foggy",

        48: "Rime Fog",

        51: "Light Drizzle",

        53: "Moderate Drizzle",

        55: "Heavy Drizzle",

        61: "Light Rain",

        63: "Moderate Rain",

        65: "Heavy Rain",

        71: "Light Snow",

        73: "Moderate Snow",

        75: "Heavy Snow",

        80: "Light Rain Showers",

        81: "Moderate Rain Showers",

        82: "Heavy Rain Showers",

        95: "Thunderstorm",

        96: "Thunderstorm with Hail",

        99: "Heavy Thunderstorm"

    };


    return codes[code] || "Unknown Weather";
}


// ======================================================
// 🌦️ DISPLAY WEATHER
// ======================================================

function displayWeather(data) {

    const current =
        data.current;


    // 🌡️ Temperature

    const temperature =
        Math.round(
            current.temperature_2m
        );


    const temperatureValue =
        document.getElementById(
            "temperature-value"
        );


    if (temperatureValue) {

        temperatureValue.textContent =
            `${temperature}°C`;

    }


    const temperatureMessage =
        document.getElementById(
            "temperature-message"
        );


    if (temperatureMessage) {

        temperatureMessage.textContent =
            `Feels like ${Math.round(
                current.apparent_temperature
            )}°C`;

    }


    // 💧 Humidity

    const humidity =
        Math.round(
            current.relative_humidity_2m
        );


    const humidityValue =
        document.getElementById(
            "humidity-value"
        );


    if (humidityValue) {

        humidityValue.textContent =
            `${humidity}%`;

    }


    const humidityMessage =
        document.getElementById(
            "humidity-message"
        );


    if (humidityMessage) {

        humidityMessage.textContent =

            humidity >= 80
                ? "High humidity"
                : humidity >= 50
                    ? "Moderate humidity"
                    : "Low humidity";

    }


    // ☁️ Weather

    const weather =
        getWeatherDescription(
            current.weather_code
        );


    const weatherValue =
        document.getElementById(
            "weather-value"
        );


    if (weatherValue) {

        weatherValue.textContent =
            weather;

    }


    const weatherMessage =
        document.getElementById(
            "weather-message"
        );


    if (weatherMessage) {

        weatherMessage.textContent =
            "Current conditions";

    }


    // 🌧️ Rain probability

    let rainChance = 0;


    if (
        data.hourly &&
        data.hourly.precipitation_probability
    ) {

        rainChance =
            data.hourly
                .precipitation_probability[0];

    }


    if (rainChance === undefined) {

        rainChance = 0;

    }


    const rainValue =
        document.getElementById(
            "rain-value"
        );


    if (rainValue) {

        rainValue.textContent =
            `${rainChance}%`;

    }


    const rainMessage =
        document.getElementById(
            "rain-message"
        );


    if (rainMessage) {

        rainMessage.textContent =

            rainChance >= 60
                ? "High chance of rain"
                : rainChance >= 30
                    ? "Possible rain"
                    : "Low chance of rain";

    }


    // 💨 Wind

    const wind =
        Math.round(
            current.wind_speed_10m
        );


    const windValue =
        document.getElementById(
            "wind-value"
        );


    if (windValue) {

        windValue.textContent =
            `${wind} km/h`;

    }


    const windMessage =
        document.getElementById(
            "wind-message"
        );


    if (windMessage) {

        windMessage.textContent =

            wind >= 25
                ? "Strong winds"
                : "Normal wind conditions";

    }


    // 🌱 Soil moisture

    const soilValue =
        document.getElementById(
            "soil-value"
        );


    const soilMessage =
        document.getElementById(
            "soil-message"
        );


    if (soilValue) {

        soilValue.textContent =
            "N/A";

    }


    if (soilMessage) {

        soilMessage.textContent =
            "No live soil sensor connected";

    }


    // 💡 Suggestions

    updateSmartSuggestions(
        temperature,
        humidity,
        rainChance,
        wind,
        weather
    );
}


// ======================================================
// 💡 SMART FARM SUGGESTIONS
// ======================================================

function updateSmartSuggestions(
    temperature,
    humidity,
    rainChance,
    wind,
    weather
) {

    const irrigationTitle =
        document.getElementById(
            "irrigation-suggestion"
        );


    const irrigationText =
        document.getElementById(
            "irrigation-text"
        );


    if (
        irrigationTitle &&
        irrigationText
    ) {

        if (rainChance >= 60) {

            irrigationTitle.textContent =
                "Delay Irrigation";

            irrigationText.textContent =
                "Rain is likely, so irrigation may not be necessary.";

        }

        else if (
            temperature >= 32 &&
            humidity < 60
        ) {

            irrigationTitle.textContent =
                "Irrigation Recommended";

            irrigationText.textContent =
                "Hot and relatively dry conditions may increase crop water demand.";

        }

        else {

            irrigationTitle.textContent =
                "Normal Irrigation";

            irrigationText.textContent =
                "Current weather does not indicate unusually high water demand.";

        }
    }


    const weatherTitle =
        document.getElementById(
            "weather-suggestion"
        );


    const weatherText =
        document.getElementById(
            "weather-suggestion-text"
        );


    if (
        weatherTitle &&
        weatherText
    ) {

        if (rainChance >= 60) {

            weatherTitle.textContent =
                "Rain Expected";

            weatherText.textContent =
                "Consider protecting harvested crops and avoiding unnecessary field operations.";

        }

        else if (wind >= 25) {

            weatherTitle.textContent =
                "Windy Conditions";

            weatherText.textContent =
                "Monitor young plants and support vulnerable crops.";

        }

        else {

            weatherTitle.textContent =
                "Favorable Conditions";

            weatherText.textContent =
                `Current weather: ${weather}.`;

        }
    }


    const cropTitle =
        document.getElementById(
            "crop-suggestion"
        );


    const cropText =
        document.getElementById(
            "crop-suggestion-text"
        );


    if (
        cropTitle &&
        cropText
    ) {

        if (temperature >= 35) {

            cropTitle.textContent =
                "Heat Monitoring";

            cropText.textContent =
                "High temperature may increase crop stress. Monitor irrigation needs.";

        }

        else if (humidity >= 80) {

            cropTitle.textContent =
                "Humidity Monitoring";

            cropText.textContent =
                "High humidity can increase the risk of fungal crop diseases.";

        }

        else {

            cropTitle.textContent =
                "Crop Conditions Normal";

            cropText.textContent =
                "Continue regular crop monitoring and farm activities.";

        }
    }
}


// ======================================================
// 👋 GREETING
// ======================================================

function updateGreeting() {

    const greeting =
        document.getElementById(
            "greeting"
        );


    if (!greeting) return;


    const hour =
        new Date().getHours();


    if (hour < 12) {

        greeting.textContent =
            "Good Morning, Farmer 🌅";

    }

    else if (hour < 17) {

        greeting.textContent =
            "Good Afternoon, Farmer ☀️";

    }

    else {

        greeting.textContent =
            "Good Evening, Farmer 🌙";

    }
}


// ======================================================
// 🧭 NAVIGATION
// ======================================================

function setupNavigation() {

    const links =
        document.querySelectorAll(
            ".navbar nav a"
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                links.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    });
}


// ======================================================
// 👨‍🌾 PROFILE
// ======================================================

function setupProfile() {

    const button =
        document.querySelector(
            ".profile-btn"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        function () {

            showMessage(
                "👨‍🌾 Farmer Profile • AgriCare Dashboard"
            );

        }
    );
}


// ======================================================
// 🛡️ ESCAPE HTML
// ======================================================

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}
