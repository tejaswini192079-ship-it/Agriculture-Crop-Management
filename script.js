// ==========================================================
// 🌱 AGRICARE - SMART AGRICULTURE MANAGEMENT SYSTEM
// ==========================================================
// Features:
// ✅ Dashboard
// ✅ Field Management
// ✅ Crop Progress
// ✅ Farm Activities
// ✅ Yield Calculator
// ✅ Harvest Progress
// ✅ City Selection
// ✅ Live Weather
// ✅ Soil Moisture
// ✅ Smart Farm Suggestions
// ✅ Local Storage
// ❌ NO DEVICE LOCATION ACCESS
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("🌱 AgriCare loaded successfully!");

    loadSavedFields();
    loadSavedHarvestProgress();

    createCitySelector();
    initLiveWeather();

    updateGreeting();
    setupNavigation();
    setupProfile();
});


// ==========================================================
// MESSAGE BOX
// ==========================================================

function showMessage(message, type = "success") {

    const oldMessage = document.querySelector(".agri-message");

    if (oldMessage) {
        oldMessage.remove();
    }

    const box = document.createElement("div");

    box.className = "agri-message";
    box.textContent = message;

    box.style.position = "fixed";
    box.style.top = "85px";
    box.style.right = "25px";
    box.style.zIndex = "9999";
    box.style.padding = "14px 20px";
    box.style.borderRadius = "12px";
    box.style.background =
        type === "error" ? "#b91c1c" : "#14532d";
    box.style.color = "white";
    box.style.fontWeight = "600";
    box.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";

    document.body.appendChild(box);

    setTimeout(function () {

        box.style.opacity = "0";
        box.style.transition = "0.4s";

        setTimeout(function () {
            box.remove();
        }, 400);

    }, 3000);
}


// ==========================================================
// CITY DATABASE
// ==========================================================

const AGRICARE_CITIES = {

    // -------------------------
    // PUNJAB
    // -------------------------

    "Phagwara, Punjab": {
        latitude: 31.2240,
        longitude: 75.7708
    },

    "Jalandhar, Punjab": {
        latitude: 31.3260,
        longitude: 75.5762
    },

    "Ludhiana, Punjab": {
        latitude: 30.9010,
        longitude: 75.8573
    },

    "Amritsar, Punjab": {
        latitude: 31.6340,
        longitude: 74.8723
    },

    "Patiala, Punjab": {
        latitude: 30.3398,
        longitude: 76.3869
    },

    "Bathinda, Punjab": {
        latitude: 30.2110,
        longitude: 74.9455
    },

    "Hoshiarpur, Punjab": {
        latitude: 31.5143,
        longitude: 75.9115
    },

    "Pathankot, Punjab": {
        latitude: 32.2746,
        longitude: 75.6521
    },

    "Mohali, Punjab": {
        latitude: 30.7046,
        longitude: 76.7179
    },

    // -------------------------
    // CHANDIGARH
    // -------------------------

    "Chandigarh": {
        latitude: 30.7333,
        longitude: 76.7794
    },

    // -------------------------
    // HARYANA
    // -------------------------

    "Ambala, Haryana": {
        latitude: 30.3782,
        longitude: 76.7767
    },

    "Karnal, Haryana": {
        latitude: 29.6857,
        longitude: 76.9905
    },

    "Hisar, Haryana": {
        latitude: 29.1492,
        longitude: 75.7217
    },

    // -------------------------
    // DELHI
    // -------------------------

    "New Delhi": {
        latitude: 28.6139,
        longitude: 77.2090
    },

    // -------------------------
    // UTTAR PRADESH
    // -------------------------

    "Lucknow, Uttar Pradesh": {
        latitude: 26.8467,
        longitude: 80.9462
    },

    "Noida, Uttar Pradesh": {
        latitude: 28.5355,
        longitude: 77.3910
    },

    "Varanasi, Uttar Pradesh": {
        latitude: 25.3176,
        longitude: 82.9739
    },

    // -------------------------
    // RAJASTHAN
    // -------------------------

    "Jaipur, Rajasthan": {
        latitude: 26.9124,
        longitude: 75.7873
    },

    "Kota, Rajasthan": {
        latitude: 25.2138,
        longitude: 75.8648
    },

    // -------------------------
    // HIMACHAL PRADESH
    // -------------------------

    "Shimla, Himachal Pradesh": {
        latitude: 31.1048,
        longitude: 77.1734
    },

    // -------------------------
    // MAHARASHTRA
    // -------------------------

    "Mumbai, Maharashtra": {
        latitude: 19.0760,
        longitude: 72.8777
    },

    "Pune, Maharashtra": {
        latitude: 18.5204,
        longitude: 73.8567
    },

    "Nagpur, Maharashtra": {
        latitude: 21.1458,
        longitude: 79.0882
    },

    // -------------------------
    // TELANGANA
    // -------------------------

    "Hyderabad, Telangana": {
        latitude: 17.3850,
        longitude: 78.4867
    },

    // -------------------------
    // ANDHRA PRADESH
    // -------------------------

    "Vijayawada, Andhra Pradesh": {
        latitude: 16.5062,
        longitude: 80.6480
    },

    "Visakhapatnam, Andhra Pradesh": {
        latitude: 17.6868,
        longitude: 83.2185
    },

    // -------------------------
    // KARNATAKA
    // -------------------------

    "Bengaluru, Karnataka": {
        latitude: 12.9716,
        longitude: 77.5946
    },

    // -------------------------
    // TAMIL NADU
    // -------------------------

    "Chennai, Tamil Nadu": {
        latitude: 13.0827,
        longitude: 80.2707
    },

    "Coimbatore, Tamil Nadu": {
        latitude: 11.0168,
        longitude: 76.9558
    },

    // -------------------------
    // KERALA
    // -------------------------

    "Kochi, Kerala": {
        latitude: 9.9312,
        longitude: 76.2673
    },

    "Thiruvananthapuram, Kerala": {
        latitude: 8.5241,
        longitude: 76.9366
    },

    // -------------------------
    // WEST BENGAL
    // -------------------------

    "Kolkata, West Bengal": {
        latitude: 22.5726,
        longitude: 88.3639
    },

    // -------------------------
    // ODISHA
    // -------------------------

    "Bhubaneswar, Odisha": {
        latitude: 20.2961,
        longitude: 85.8245
    },

    // -------------------------
    // GUJARAT
    // -------------------------

    "Ahmedabad, Gujarat": {
        latitude: 23.0225,
        longitude: 72.5714
    },

    "Surat, Gujarat": {
        latitude: 21.1702,
        longitude: 72.8311
    }
};


// ==========================================================
// CITY SELECTOR
// ==========================================================

function createCitySelector() {

    const conditionsSection =
        document.getElementById("conditions");

    if (!conditionsSection) {
        console.log("Farm Conditions section not found.");
        return;
    }

    // Prevent duplicate selector
    if (document.getElementById("agriCitySelector")) {
        return;
    }

    const heading =
        conditionsSection.querySelector(".section-heading");

    if (!heading) {
        return;
    }

    const selectorBox = document.createElement("div");

    selectorBox.id = "agriCitySelector";

    selectorBox.style.marginTop = "18px";
    selectorBox.style.padding = "18px";
    selectorBox.style.background = "#ffffff";
    selectorBox.style.border = "1px solid #dfeadf";
    selectorBox.style.borderRadius = "16px";
    selectorBox.style.boxShadow =
        "0 6px 18px rgba(40,70,45,0.06)";

    selectorBox.innerHTML = `
        <div style="
            display:flex;
            align-items:center;
            gap:12px;
            flex-wrap:wrap;
        ">

            <div style="
                width:45px;
                height:45px;
                border-radius:12px;
                background:#e8f7e5;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:22px;
            ">
                📍
            </div>

            <div style="flex:1; min-width:220px;">

                <div style="
                    font-size:11px;
                    font-weight:800;
                    letter-spacing:1px;
                    color:#4d9b45;
                    margin-bottom:5px;
                ">
                    SELECT FARM LOCATION
                </div>

                <select
                    id="agriCitySelect"
                    style="
                        width:100%;
                        max-width:420px;
                        padding:12px 14px;
                        border:1px solid #cfe2cd;
                        border-radius:10px;
                        background:#f9fcf8;
                        color:#14532d;
                        font-size:15px;
                        font-weight:600;
                        outline:none;
                        cursor:pointer;
                    "
                >
                </select>

            </div>

            <button
                id="refreshWeatherButton"
                type="button"
                style="
                    padding:12px 18px;
                    border:none;
                    border-radius:10px;
                    background:#14532d;
                    color:white;
                    font-weight:700;
                    cursor:pointer;
                "
            >
                🔄 Refresh Weather
            </button>

        </div>

        <p id="citySelectorMessage"
           style="
                margin:12px 0 0 57px;
                color:#68776c;
                font-size:13px;
           ">
            Select a city to view its current farm conditions.
        </p>
    `;

    heading.appendChild(selectorBox);

    const select =
        document.getElementById("agriCitySelect");

    const refreshButton =
        document.getElementById("refreshWeatherButton");

    const savedCity =
        localStorage.getItem("agriCareSelectedCity");

    Object.keys(AGRICARE_CITIES).forEach(function (city) {

        const option =
            document.createElement("option");

        option.value = city;
        option.textContent = city;

        select.appendChild(option);
    });

    if (
        savedCity &&
        AGRICARE_CITIES[savedCity]
    ) {

        select.value = savedCity;

    } else {

        select.value = "Phagwara, Punjab";
    }

    select.addEventListener("change", function () {

        const selectedCity = select.value;

        localStorage.setItem(
            "agriCareSelectedCity",
            selectedCity
        );

        const cityData =
            AGRICARE_CITIES[selectedCity];

        if (!cityData) return;

        const message =
            document.getElementById(
                "citySelectorMessage"
            );

        if (message) {

            message.textContent =
                `🌦️ Loading live weather for ${selectedCity}...`;
        }

        getLiveWeather(
            cityData.latitude,
            cityData.longitude,
            selectedCity
        );
    });

    refreshButton.addEventListener("click", function () {

        const selectedCity =
            select.value;

        const cityData =
            AGRICARE_CITIES[selectedCity];

        if (!cityData) return;

        getLiveWeather(
            cityData.latitude,
            cityData.longitude,
            selectedCity
        );
    });
}


// ==========================================================
// INITIAL WEATHER
// ==========================================================

function initLiveWeather() {

    let selectedCity =
        localStorage.getItem(
            "agriCareSelectedCity"
        );

    if (
        !selectedCity ||
        !AGRICARE_CITIES[selectedCity]
    ) {

        selectedCity =
            "Phagwara, Punjab";

        localStorage.setItem(
            "agriCareSelectedCity",
            selectedCity
        );
    }

    const cityData =
        AGRICARE_CITIES[selectedCity];

    const select =
        document.getElementById(
            "agriCitySelect"
        );

    if (select) {
        select.value = selectedCity;
    }

    getLiveWeather(
        cityData.latitude,
        cityData.longitude,
        selectedCity
    );
}


// ==========================================================
// LIVE WEATHER API
// ==========================================================

async function getLiveWeather(
    latitude,
    longitude,
    cityName
) {

    try {

        updateWeatherLoading(cityName);

        /*
        Open-Meteo provides:
        - Temperature
        - Humidity
        - Apparent temperature
        - Weather code
        - Wind
        - Rain probability
        - Soil moisture
        */

        const url =
            "https://api.open-meteo.com/v1/forecast" +
            "?latitude=" + latitude +
            "&longitude=" + longitude +
            "&current=" +
            "temperature_2m," +
            "relative_humidity_2m," +
            "apparent_temperature," +
            "weather_code," +
            "wind_speed_10m," +
            "soil_moisture_0_to_7cm" +
            "&hourly=" +
            "precipitation_probability" +
            "&forecast_days=1" +
            "&timezone=auto";

        console.log(
            "🌦️ Requesting live weather:",
            cityName
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

        displayWeather(
            data,
            cityName
        );

    } catch (error) {

        console.error(
            "❌ Weather error:",
            error
        );

        showWeatherError(cityName);
    }
}


// ==========================================================
// LOADING STATE
// ==========================================================

function updateWeatherLoading(cityName) {

    const location =
        document.getElementById(
            "weather-location"
        );

    if (location) {

        location.textContent =
            `📍 ${cityName} • Loading live weather...`;
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

    if (temperature) temperature.textContent = "...";
    if (humidity) humidity.textContent = "...";
    if (weather) weather.textContent = "Loading";
    if (rain) rain.textContent = "...";
    if (wind) wind.textContent = "...";
    if (soil) soil.textContent = "...";
}


// ==========================================================
// WEATHER ERROR
// ==========================================================

function showWeatherError(cityName) {

    const location =
        document.getElementById(
            "weather-location"
        );

    if (location) {

        location.textContent =
            `📍 ${cityName} • Weather temporarily unavailable`;
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

    const messages = [
        "temperature-message",
        "humidity-message",
        "rain-message",
        "wind-message"
    ];

    messages.forEach(function (id) {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent =
                "Live data temporarily unavailable.";
        }
    });

    const weatherMessage =
        document.getElementById(
            "weather-message"
        );

    if (weatherMessage) {

        weatherMessage.textContent =
            "Weather service unavailable.";
    }

    const soilMessage =
        document.getElementById(
            "soil-message"
        );

    if (soilMessage) {

        soilMessage.textContent =
            "Soil data temporarily unavailable.";
    }
}


// ==========================================================
// DISPLAY WEATHER
// ==========================================================

function displayWeather(
    data,
    cityName
) {

    if (
        !data ||
        !data.current
    ) {

        showWeatherError(cityName);
        return;
    }

    const current =
        data.current;


    // ------------------------------------------------------
    // LOCATION
    // ------------------------------------------------------

    const location =
        document.getElementById(
            "weather-location"
        );

    if (location) {

        location.textContent =
            `📍 ${cityName} • Live weather`;
    }


    // ------------------------------------------------------
    // TEMPERATURE
    // ------------------------------------------------------

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


    // ------------------------------------------------------
    // HUMIDITY
    // ------------------------------------------------------

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

        if (humidity >= 80) {

            humidityMessage.textContent =
                "High humidity";

        } else if (humidity >= 50) {

            humidityMessage.textContent =
                "Moderate humidity";

        } else {

            humidityMessage.textContent =
                "Low humidity";
        }
    }


    // ------------------------------------------------------
    // WEATHER CONDITION
    // ------------------------------------------------------

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


    // ------------------------------------------------------
    // RAIN PROBABILITY
    // ------------------------------------------------------

    let rainChance = 0;

    if (
        data.hourly &&
        data.hourly.precipitation_probability &&
        data.hourly.precipitation_probability.length > 0
    ) {

        rainChance =
            data.hourly
                .precipitation_probability[0];
    }

    if (
        rainChance === null ||
        rainChance === undefined
    ) {

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

        if (rainChance >= 60) {

            rainMessage.textContent =
                "High chance of rain";

        } else if (rainChance >= 30) {

            rainMessage.textContent =
                "Possible rain";

        } else {

            rainMessage.textContent =
                "Low chance of rain";
        }
    }


    // ------------------------------------------------------
    // WIND
    // ------------------------------------------------------

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

        if (wind >= 25) {

            windMessage.textContent =
                "Strong winds";

        } else if (wind >= 15) {

            windMessage.textContent =
                "Moderate winds";

        } else {

            windMessage.textContent =
                "Normal wind conditions";
        }
    }


    // ------------------------------------------------------
    // SOIL MOISTURE
    // ------------------------------------------------------

    const soilMoisture =
        current.soil_moisture_0_to_7cm;

    const soilValue =
        document.getElementById(
            "soil-value"
        );

    const soilMessage =
        document.getElementById(
            "soil-message"
        );

    if (
        soilMoisture !== null &&
        soilMoisture !== undefined &&
        !isNaN(soilMoisture)
    ) {

        /*
        Open-Meteo gives soil moisture
        as volumetric water content (m³/m³).

        Convert to percentage for
        farmer-friendly display.
        */

        const soilPercentage =
            Math.round(
                Number(soilMoisture) * 100
            );

        if (soilValue) {

            soilValue.textContent =
                `${soilPercentage}%`;
        }

        if (soilMessage) {

            if (soilPercentage >= 40) {

                soilMessage.textContent =
                    "High soil moisture";

            } else if (soilPercentage >= 20) {

                soilMessage.textContent =
                    "Moderate soil moisture";

            } else {

                soilMessage.textContent =
                    "Low soil moisture";
            }
        }

    } else {

        if (soilValue) {
            soilValue.textContent = "N/A";
        }

        if (soilMessage) {

            soilMessage.textContent =
                "Soil model data unavailable";
        }
    }


    // ------------------------------------------------------
    // SMART FARM SUGGESTIONS
    // ------------------------------------------------------

    updateSmartSuggestions(
        temperature,
        humidity,
        rainChance,
        wind,
        weather,
        soilMoisture
    );
}


// ==========================================================
// WEATHER DESCRIPTION
// ==========================================================

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

        56: "Freezing Drizzle",

        57: "Heavy Freezing Drizzle",

        61: "Light Rain",

        63: "Moderate Rain",

        65: "Heavy Rain",

        66: "Freezing Rain",

        67: "Heavy Freezing Rain",

        71: "Light Snow",

        73: "Moderate Snow",

        75: "Heavy Snow",

        77: "Snow Grains",

        80: "Light Rain Showers",

        81: "Moderate Rain Showers",

        82: "Heavy Rain Showers",

        85: "Light Snow Showers",

        86: "Heavy Snow Showers",

        95: "Thunderstorm",

        96: "Thunderstorm with Hail",

        99: "Heavy Thunderstorm"
    };

    return codes[code] ||
        "Unknown Weather";
}


// ==========================================================
// SMART FARM SUGGESTIONS
// ==========================================================

function updateSmartSuggestions(
    temperature,
    humidity,
    rainChance,
    wind,
    weather,
    soilMoisture
) {

    // ------------------------------------------------------
    // IRRIGATION
    // ------------------------------------------------------

    const irrigationTitle =
        document.getElementById(
            "irrigation-suggestion"
        );

    const irrigationText =
        document.getElementById(
            "irrigation-text"
        );

    const soilPercent =
        soilMoisture !== null &&
        soilMoisture !== undefined
            ? soilMoisture * 100
            : null;

    if (
        irrigationTitle &&
        irrigationText
    ) {

        if (rainChance >= 60) {

            irrigationTitle.textContent =
                "Delay Irrigation";

            irrigationText.textContent =
                "Rain is likely, so irrigation may not be necessary.";

        } else if (
            soilPercent !== null &&
            soilPercent < 20
        ) {

            irrigationTitle.textContent =
                "Irrigation Recommended";

            irrigationText.textContent =
                "Soil moisture is low. Consider checking the field and irrigating if required.";

        } else if (
            temperature >= 32 &&
            humidity < 60
        ) {

            irrigationTitle.textContent =
                "Monitor Irrigation";

            irrigationText.textContent =
                "Hot and relatively dry conditions may increase crop water demand.";

        } else {

            irrigationTitle.textContent =
                "Normal Irrigation";

            irrigationText.textContent =
                "Current conditions do not indicate unusually high water demand.";
        }
    }


    // ------------------------------------------------------
    // WEATHER SUGGESTION
    // ------------------------------------------------------

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

        } else if (wind >= 25) {

            weatherTitle.textContent =
                "Windy Conditions";

            weatherText.textContent =
                "Monitor young plants and support vulnerable crops.";

        } else {

            weatherTitle.textContent =
                "Favorable Conditions";

            weatherText.textContent =
                `Current weather: ${weather}.`;
        }
    }


    // ------------------------------------------------------
    // CROP CARE
    // ------------------------------------------------------

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

        } else if (humidity >= 80) {

            cropTitle.textContent =
                "Humidity Monitoring";

            cropText.textContent =
                "High humidity can increase the risk of fungal crop diseases.";

        } else if (
            soilPercent !== null &&
            soilPercent < 20
        ) {

            cropTitle.textContent =
                "Dry Soil Alert";

            cropText.textContent =
                "Soil moisture is low. Check the field before deciding irrigation.";

        } else {

            cropTitle.textContent =
                "Crop Conditions Normal";

            cropText.textContent =
                "Continue regular crop monitoring and farm activities.";
        }
    }
}


// ==========================================================
// ADD FIELD
// ==========================================================

function showAddFieldForm() {

    const form =
        document.getElementById(
            "addFieldForm"
        );

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


// ==========================================================
// SAVE FIELD
// ==========================================================

function saveField() {

    const cropName =
        document.getElementById(
            "cropName"
        ).value.trim();

    const acres =
        Number(
            document.getElementById(
                "cropAcres"
            ).value
        );

    const progress =
        Number(
            document.getElementById(
                "cropProgress"
            ).value
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
        document.getElementById(
            "addFieldForm"
        );

    if (form) {
        form.style.display = "none";
    }

    showMessage(
        `🌱 ${cropName} field added successfully!`
    );
}


// ==========================================================
// DISPLAY FIELD
// ==========================================================

function displayField(field) {

    const container =
        document.getElementById(
            "newFields"
        );

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

    card.className =
        "field-card";

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


// ==========================================================
// LOAD SAVED FIELDS
// ==========================================================

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


// ==========================================================
// FIELD COUNT
// ==========================================================

function updateFieldCount() {

    const count =
        document.getElementById(
            "fieldCount"
        );

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


// ==========================================================
// VIEW FIELD
// ==========================================================

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

    details.style.display =
        "block";

    details.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// COMPLETE TASK
// ==========================================================

function completeTask(button) {

    if (!button) return;

    button.textContent =
        "✓ Completed";

    button.disabled = true;

    button.style.opacity =
        "0.7";

    showMessage(
        "✅ Farm task completed!"
    );
}


// ==========================================================
// YIELD CALCULATOR
// ==========================================================

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


// ==========================================================
// HARVEST PROGRESS
// ==========================================================

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
    ) {

        return;
    }

    updateHarvestUI(progress);
}


// ==========================================================
// TODAY'S TASKS
// ==========================================================

function showTasks() {

    const section =
        document.getElementById(
            "tasks"
        );

    if (!section) {

        showMessage(
            "Today's farm tasks are ready to review."
        );

        return;
    }

    section.style.display =
        "block";

    section.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================================
// GREETING
// ==========================================================

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

    } else if (hour < 17) {

        greeting.textContent =
            "Good Afternoon, Farmer ☀️";

    } else {

        greeting.textContent =
            "Good Evening, Farmer 🌙";
    }
}


// ==========================================================
// NAVIGATION
// ==========================================================

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


// ==========================================================
// PROFILE
// ==========================================================

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


// ==========================================================
// HTML SECURITY
// ==========================================================

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
