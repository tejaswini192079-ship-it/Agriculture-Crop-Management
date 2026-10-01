// 🌱 AGRICARE - Smart Agriculture Interaction System

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌱 AgriCare Platform loaded successfully!");

    // ==========================================
    // 🌱 WELCOME MESSAGE
    // ==========================================

    setTimeout(() => {
        showMessage(
            "🌱 Welcome to AgriCare!",
            "Your smart companion for better crop management."
        );
    }, 800);


    // ==========================================
    // 🌾 HUMANIZED FARM GREETING
    // ==========================================

    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "🌅 Good morning, Farmer!";
    }
    else if (hour < 17) {
        greeting = "☀️ Good afternoon, Farmer!";
    }
    else {
        greeting = "🌙 Good evening, Farmer!";
    }

    console.log(greeting);


    // ==========================================
    // 🧭 NAVIGATION
    // ==========================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // ==========================================
    // 👨‍🌾 PROFILE BUTTON
    // ==========================================

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

    box.className = "agri-message";


    box.innerHTML = `
        <div class="agri-message-content">

            <button class="close-message">
                ×
            </button>

            <h3>
                ${title}
            </h3>

            <p>
                ${message}
            </p>

        </div>
    `;


    document.body.appendChild(box);


    const closeButton =
        box.querySelector(".close-message");

    closeButton.addEventListener("click", () => {
        box.remove();
    });


    setTimeout(() => {

        if (box.parentElement) {
            box.remove();
        }

    }, 5000);

}



// ======================================================
// 🌾 VIEW TODAY'S TASKS
// ======================================================

function showTasks() {

    const tasksSection =
        document.getElementById("tasks");

    if (!tasksSection) {
        return;
    }


    tasksSection.style.display = "block";


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
// ➕ ADD NEW FIELD FORM
// ======================================================

function showAddFieldForm() {

    const form =
        document.getElementById("addFieldForm");

    if (!form) {
        return;
    }


    form.style.display = "block";


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


    if (!cropInput || !acresInput) {
        return;
    }


    const crop =
        cropInput.value.trim();

    const acres =
        acresInput.value.trim();


    // Validation

    if (crop === "" || acres === "") {

        showMessage(
            "⚠️ Missing Information",
            "Please enter both the crop name and the number of acres."
        );

        return;
    }


    if (Number(acres) <= 0) {

        showMessage(
            "⚠️ Invalid Acres",
            "Please enter a valid number of acres greater than 0."
        );

        return;
    }


    const fieldsContainer =
        document.getElementById("newFields");

    if (!fieldsContainer) {
        return;
    }


    // Create new field

    const newField =
        document.createElement("article");

    newField.className =
        "field-card";


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
            ${crop} Field
        </h3>


        <p class="field-location">
            📍 New Field • ${acres} Acres
        </p>


        <div class="crop-info">

            <div>
                <span>Crop</span>
                <strong>${crop}</strong>
            </div>

            <div>
                <span>Stage</span>
                <strong>🌱 Planting</strong>
            </div>

        </div>


        <div class="progress-area">

            <div class="progress-text">

                <span>
                    Crop Progress
                </span>

                <strong>
                    0%
                </strong>

            </div>


            <div class="progress-bar">

                <div style="width:0%">
                </div>

            </div>

        </div>


        <button class="card-btn new-field-view">
            View Field →
        </button>

    `;


    fieldsContainer.appendChild(newField);


    // View new field

    const viewButton =
        newField.querySelector(".new-field-view");


    viewButton.addEventListener("click", () => {

        viewField(
            `${crop} Field`,
            crop,
            "Planting",
            "0%"
        );

    });


    // Update field count

    const fieldCount =
        document.getElementById("fieldCount");


    if (fieldCount) {

        let currentCount =
            parseInt(fieldCount.innerText);

        if (isNaN(currentCount)) {
            currentCount = 0;
        }

        fieldCount.innerText =
            currentCount + 1;

    }


    // Clear inputs

    cropInput.value = "";
    acresInput.value = "";


    // Hide form

    const form =
        document.getElementById("addFieldForm");

    if (form) {
        form.style.display = "none";
    }


    // Scroll to new field

    newField.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    showMessage(
        "🌱 Field Added Successfully!",
        `${crop} field with ${acres} acres has been added to your farm.`
    );

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


    document.getElementById("detailName").innerText =
        name;

    document.getElementById("detailCrop").innerText =
        crop;

    document.getElementById("detailStage").innerText =
        stage;

    document.getElementById("detailProgress").innerText =
        progress;


    details.style.display = "block";


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


    if (!acresInput || !yieldInput || !result) {
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

    // IMPORTANT:
    // Your HTML uses progressInput

    const progressInput =
        document.getElementById("progressInput");


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


    // Check elements

    if (
        !progressInput ||
        !progressFill ||
        !progressText
    ) {
        return;
    }


    // Get value

    const progress =
        parseInt(progressInput.value);


    // Validation

    if (
        isNaN(progress) ||
        progress < 0 ||
        progress > 100
    ) {

        progressText.innerText =
            "⚠️ Please enter a value between 0 and 100.";

        return;
    }


    // Update progress bar

    progressFill.style.width =
        progress + "%";


    // Update harvest percentage

    if (currentProgress) {

        currentProgress.innerText =
            progress + "%";

    }


    // Update harvest description

    if (harvestPercentage) {

        harvestPercentage.innerText =
            progress + "%";

    }


    // Update dashboard

    if (dashboardProgress) {

        dashboardProgress.innerText =
            progress + "%";

    }


    // Update message

    progressText.innerText =
        "🌱 Harvest Readiness: " +
        progress +
        "%";


    // Success messages

    if (progress === 100) {

        showMessage(
            "🎉 Harvest Ready!",
            "Excellent! Your crop has reached 100% harvest readiness."
        );

    }

    else if (progress >= 80) {

        showMessage(
            "🚜 Harvest Almost Ready!",
            "Your crop is getting close to harvest. Start preparing your harvesting activities."
        );

    }

    else {

        showMessage(
            "📊 Progress Updated",
            `Harvest readiness is now ${progress}%. Keep monitoring your crop.`
        );

    }

}
