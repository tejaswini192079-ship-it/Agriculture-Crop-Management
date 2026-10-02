// 🌱 AGRICARE - Smart Agriculture Management System
// ======================================================
// Features:
// • Field Management
// • Crop Progress
// • Farm Activities
// • Yield Calculator
// • Harvest Progress
// • Live Weather
// • Smart Farm Suggestions
// • Local Storage
// ======================================================


// ======================================================
// 🚀 PAGE LOAD
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌱 AgriCare Platform loaded successfully!");

    // Load saved information
    loadSavedFields();
    loadSavedHarvestProgress();

    // Start weather system
    initLiveWeather();

    // Welcome message
    setTimeout(() => {
        showMessage(
            "🌱 Welcome to AgriCare! Your smart farm dashboard is ready.",
            "success"
        );
    }, 800);

    // Greeting
    updateGreeting();

    // Navigation
    setupNavigation();

    // Profile button
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

    const messageBox =
        document.createElement("div");

    messageBox.className = "agri-message";

    messageBox.textContent = message;

    messageBox.style.position = "fixed";
    messageBox.style.top = "85px";
    messageBox.style.right = "25px";
    messageBox.style.zIndex = "9999";
    messageBox.style.padding = "14px 20px";
    messageBox.style.borderRadius = "12px";
    messageBox.style.background = "#14532d";
    messageBox.style.color = "white";
    messageBox.style.fontWeight = "600";
    messageBox.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.15)";

    document.body.appendChild(messageBox);

    setTimeout(() => {

        messageBox.style.opacity = "0";
        messageBox.style.transition = "0.4s";

        setTimeout(() => {
            messageBox.remove();
        }, 400);

    }, 3000);
}


// ======================================================
// 📝 TASKS
// ======================================================

function showTasks() {

    const taskSection =
        document.getElementById("tasks");

    if (!taskSection) {
        showMessage(
            "Today's farm tasks are ready to review.",
            "success"
        );
        return;
    }

    taskSection.style.display = "block";

    taskSection.scrollIntoView({
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

    const cropAcres =
        document.getElementById("cropAcres").value;

    const cropProgress =
        document.getElementById("cropProgress").value;

    // Validation
    if (!cropName) {

        showMessage(
            "Please enter the crop name.",
            "error"
        );

        return;
    }

    if (
        cropAcres === "" ||
        Number(cropAcres) <= 0
    ) {

        showMessage(
            "Please enter valid acres.",
            "error"
        );

        return;
    }

    if (
        cropProgress === "" ||
        Number(cropProgress) < 0 ||
        Number(cropProgress) > 100
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

        acres: Number(cropAcres),

        progress: Number(cropProgress)

    };


    // Get existing fields
    let fields = [];

    try {

        fields =
            JSON.parse(
                localStorage.getItem("agriCareFields")
            ) || [];

    } catch (error) {

        fields = [];
    }


    // Add new field
    fields.push(field);


    // Save
    localStorage.setItem(
        "agriCareFields",
        JSON.stringify(fields)
    );


    // Display
    displayField(field);


    // Update count
    updateFieldCount();


    // Clear form
    document.getElementById("cropName").value = "";
    document.getElementById("cropAcres").value = "";
    document.getElementById("cropProgress").value = "";


    // Hide form
    const form =
        document.getElementById("addFieldForm");

    if (form) {
        form.style.display = "none";
    }


    showMessage(
        `🌱 ${cropName} field added successfully!`,
        "success"
    );
}


// ======================================================
// 🌾 DISPLAY NEW FIELD
// ======================================================

function displayField(field) {

    const container =
        document.getElementById("newFields");

    if (!container) return;


    const card =
        document.createElement("div");

    card.className = "field-card";


    let stage = "Planning";

    if (field.progress >= 80) {
        stage = "Maturity";
    } else if (field.progress >= 50) {
        stage = "Flowering";
    } else if (field.progress >= 20) {
        stage = "Vegetative";
    }


    card.innerHTML = `

        <div class="field-card-content">

            <div>

                <h3>🌱 ${escapeHTML(field.crop)}</h3>

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
                localStorage.getItem("agriCareFields")
            ) || [];

    } catch (error) {

        fields = [];
    }


    fields.forEach(field => {

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

    if (!fieldCount) return;


    let savedFields = [];

    try {

        savedFields =
            JSON.parse(
                localStorage.getItem("agriCareFields")
            ) || [];

    } catch (error) {

        savedFields = [];
    }


    // Three original fields already present
    const total =
        3 + savedFields.length;


    fieldCount.textContent = total;
}


// ======================================================
// 👀 VIEW FIELD
// ======================================================

function viewField(id) {

    let fields = [];

    try {

        fields =
            JSON.parse(
                localStorage.getItem("agriCareFields")
            ) || [];

    } catch (error) {

        fields = [];
    }


    const field =
        fields.find(item => item.id === id);


    if (!field) return;


    const details =
        document.getElementById("fieldDetails");


    if (!details) {

        showMessage(
            `${field.crop} • ${field.acres} acres • ${field.progress}% complete`,
            "success"
        );

        return;
    }


    details.innerHTML = `

        <h3>🌱 ${escapeHTML(field.crop)}</h3>

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


    button.textContent = "✓ Completed";

    button.disabled = true;

    button.style.opacity = "0.7";


    showMessage(
        "✅ Farm task completed!",
        "success"
    );
}


// ======================================================
// 🧮 YIELD CALCULATOR
// ======================================================

function calculateYield() {

    const acres =
        Number(
            document.getElementById("acres").value
        );

    const yieldPerAcre =
        Number(
            document.getElementById("yieldPerAcre").value
        );

    const result =
        document.getElementById("result");


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
        document.getElementById("progressInput");

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


    // Save progress
    localStorage.setItem(
        "agriCareHarvestProgress",
        progress
    );


    // Update progress bar
    const fill =
        document.getElementById("progress-fill");

    if (fill) {
        fill.style.width =
            `${progress}%`;
    }


    // Update percentage
    const currentProgress =
        document.getElementById("currentProgress");

    if (currentProgress) {
        currentProgress.textContent =
            `${progress}%`;
    }


    const harvestPercentage =
        document.getElementById("harvestPercentage");

    if (harvestPercentage) {
        harvestPercentage.textContent =
            `${progress}%`;
    }


    const dashboardProgress =
        document.getElementById("dashboardProgress");

    if (dashboardProgress) {
        dashboardProgress.textContent =
            `${progress}%`;
    }


    const progressText =
        document.getElementById("progress-text");

    if (progressText) {
        progressText.textContent =
            `${progress}% complete`;
    }


    const message =
        document.getElementById("progress-message");

    if (message) {

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


    showMessage(
        "🌾 Harvest progress updated!",
        "success"
    );
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


    const fill =
        document.getElementById("progress-fill");

    if (fill) {
        fill.style.width =
            `${progress}%`;
    }


    const currentProgress =
        document.getElementById("currentProgress");

    if (currentProgress) {
        currentProgress.textContent =
            `${progress}%`;
    }


    const harvestPercentage =
        document.getElementById("harvestPercentage");

    if (harvestPercentage) {
        harvestPercentage.textContent =
            `${progress}%`;
    }


    const dashboardProgress =
        document.getElementById("dashboardProgress");

    if (dashboardProgress) {
        dashboardProgress.textContent =
            `${progress}%`;
    }


    const progressText =
        document.getElementById("progress-text");

    if (progressText) {
        progressText.textContent =
            `${progress}% complete`;
    }
}


// ======================================================
// 🌦️ LIVE WEATHER
// 📍 Fixed location: Phagwara, Punjab
// ❌ No browser location permission
// ======================================================

function initLiveWeather() {

    // Phagwara, Punjab coordinates
    const latitude = 31.2240;
    const longitude = 75.7708;


    const locationElement =
        document.getElementById(
            "weather-location"
        );


    if (locationElement) {

        locationElement.textContent =
            "📍 Phagwara, Punjab";

    }


    getLiveWeather(
        latitude,
        longitude
    );
}


// ======================================================
// 🌦️ GET WEATHER FROM OPEN-METEO
// ======================================================

async function getLiveWeather(
    latitude,
    longitude
) {

    try {

        const url =
            `https://api.open-meteo.com/v1/forecast?` +
            `latitude=${latitude}` +
            `&longitude=${longitude}` +
            `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,wind_speed_10m` +
            `&hourly=precipitation_probability,soil_moisture_0_to_1cm` +
            `&forecast_days=1` +
            `&timezone=auto`;


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Weather API request failed"
            );

        }


        const data =
            await response.json();


        updateWeatherUI(data);

    }

    catch (error) {

        console.error(
            "Weather Error:",
            error
        );


        const locationElement =
            document.getElementById(
                "weather-location"
            );


        if (locationElement) {

            locationElement.textContent =
                "📍 Phagwara, Punjab • Weather unavailable";

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


        if (temperature)
            temperature.textContent = "--°C";

        if (humidity)
            humidity.textContent = "--%";

        if (weather)
            weather.textContent = "Unavailable";

        if (rain)
            rain.textContent = "--%";

        if (wind)
            wind.textContent = "-- km/h";

        if (soil)
            soil.textContent = "--";
    }
}


// ======================================================
// ☁️ WEATHER DESCRIPTION
// ======================================================

function getWeatherDescription(code) {

    const weatherCodes = {

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


    return (
        weatherCodes[code] ||
        "Unknown Weather"
    );
}


// ======================================================
// 🌦️ UPDATE WEATHER CARDS
// ======================================================

function updateWeatherUI(data) {

    const current =
        data.current;


    // 🌡️ TEMPERATURE
    const temperature =
        Math.round(
            current.temperature_2m
        );


    document.getElementById(
        "temperature-value"
    ).textContent =
        `${temperature}°C`;


    document.getElementById(
        "temperature-message"
    ).textContent =
        `Feels like ${Math.round(
            current.apparent_temperature
        )}°C`;


    // 💧 HUMIDITY
    const humidity =
        Math.round(
            current.relative_humidity_2m
        );


    document.getElementById(
        "humidity-value"
    ).textContent =
        `${humidity}%`;


    document.getElementById(
        "humidity-message"
    ).textContent =

        humidity > 80
            ? "High humidity"
            : humidity > 50
                ? "Moderate humidity"
                : "Low humidity";


    // ☁️ WEATHER
    const weather =
        getWeatherDescription(
            current.weather_code
        );


    document.getElementById(
        "weather-value"
    ).textContent =
        weather;


    document.getElementById(
        "weather-message"
    ).textContent =
        "Current conditions";


    // 🌧️ RAIN CHANCE
    let rainChance = 0;


    if (
        data.hourly &&
        data.hourly.precipitation_probability
    ) {

        rainChance =
            data.hourly
                .precipitation_probability[0] || 0;
    }


    document.getElementById(
        "rain-value"
    ).textContent =
        `${rainChance}%`;


    document.getElementById(
        "rain-message"
    ).textContent =

        rainChance > 60
            ? "High chance of rain"
            : rainChance > 30
                ? "Possible rain"
                : "Low chance of rain";


    // 💨 WIND
    const wind =
        Math.round(
            current.wind_speed_10m
        );


    document.getElementById(
        "wind-value"
    ).textContent =
        `${wind} km/h`;


    document.getElementById(
        "wind-message"
    ).textContent =

        wind > 25
            ? "Strong winds"
            : "Normal wind conditions";


    // 🌱 SOIL MOISTURE
    let soilMoisture = null;


    if (
        data.hourly &&
        data.hourly.soil_moisture_0_to_1cm
    ) {

        soilMoisture =
            data.hourly
                .soil_moisture_0_to_1cm[0];
    }


    if (soilMoisture !== null) {

        const soilPercent =
            Math.round(
                soilMoisture * 100
            );


        document.getElementById(
            "soil-value"
        ).textContent =
            `${soilPercent}%`;


        document.getElementById(
            "soil-message"
        ).textContent =
            "Model-based estimate";

    }


    // 💡 SMART SUGGESTIONS

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


    if (!irrigationTitle ||
        !irrigationText) {

        return;
    }


    // 💧 IRRIGATION

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


    // 🌦️ WEATHER SUGGESTION

    const weatherTitle =
        document.getElementById(
            "weather-suggestion"
        );


    const weatherText =
        document.getElementById(
            "weather-suggestion-text"
        );


    if (weatherTitle &&
        weatherText) {


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


    // 🌱 CROP CARE

    const cropTitle =
        document.getElementById(
            "crop-suggestion"
        );


    const cropText =
        document.getElementById(
            "crop-suggestion-text"
        );


    if (cropTitle &&
        cropText) {


        if (temperature >= 35) {

            cropTitle.textContent =
                "Heat Monitoring";


            cropText.textContent =
                "High temperature may increase crop stress. Monitor soil moisture and irrigation needs.";

        }

        else if (humidity >= 80) {

            cropTitle.textContent =
                "Humidity Monitoring";


            cropText.textContent =
                "High humidity can increase the risk of fungal crop diseases. Monitor plants regularly.";

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


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                links.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                link.classList.add(
                    "active"
                );

            }
        );

    });
}


// ======================================================
// 👨‍🌾 PROFILE BUTTON
// ======================================================

function setupProfile() {

    const profileButton =
        document.querySelector(
            ".profile-btn"
        );


    if (!profileButton) return;


    profileButton.addEventListener(
        "click",
        () => {

            showMessage(
                "👨‍🌾 Farmer Profile • AgriCare Dashboard",
                "success"
            );

        }
    );
}


// ======================================================
// 🛡️ SECURITY
// ======================================================

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}
