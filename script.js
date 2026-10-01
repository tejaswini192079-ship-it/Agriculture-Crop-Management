// 🌱 AGRICARE - Smart Agriculture Interaction System

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌱 AgriCare Platform loaded successfully!");

    // ---------- WELCOME MESSAGE ----------
    setTimeout(() => {
        showMessage(
            "🌱 Welcome to AgriCare!",
            "Your smart companion for better crop management."
        );
    }, 800);


    // ---------- BUTTON INTERACTIONS ----------
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const text = button.innerText.toLowerCase();

            // Advisory button
            if (
                text.includes("advisory") ||
                text.includes("recommendation") ||
                text.includes("view")
            ) {
                showAdvisory();
                return;
            }

            // Location button
            if (
                text.includes("location") ||
                text.includes("select")
            ) {
                showMessage(
                    "📍 Select Your Farm",
                    "Choose your location to receive personalized crop recommendations."
                );
                return;
            }

            // General buttons
            showMessage(
                "✅ Action Selected",
                "Your request has been received successfully."
            );
        });

    });


    // ---------- NAVIGATION ----------
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    // ---------- HUMANIZED FARM MESSAGE ----------
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


    // ---------- ADVISORY FUNCTION ----------
    function showAdvisory() {

        showMessage(
            "🌾 Today's Smart Advisory",
            "Weather conditions look suitable for field monitoring. Check soil moisture before irrigation and keep an eye on rainfall conditions."
        );

    }


    // ---------- MESSAGE BOX ----------
    function showMessage(title, message) {

        // Remove previous notification
        const oldMessage = document.querySelector(".agri-message");

        if (oldMessage) {
            oldMessage.remove();
        }

        const box = document.createElement("div");

        box.className = "agri-message";

        box.innerHTML = `
            <div class="agri-message-content">
                <button class="close-message">×</button>
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
        `;

        document.body.appendChild(box);

        box.querySelector(".close-message").addEventListener("click", () => {
            box.remove();
        });

        // Automatically disappear
        setTimeout(() => {
            if (box.parentElement) {
                box.remove();
            }
        }, 5000);
    }

});
function calculateYield() {
    let acres = document.getElementById("acres").value;
    let yieldPerAcre = document.getElementById("yield").value;

    if (acres && yieldPerAcre) {
        let totalYield = acres * yieldPerAcre;
        document.getElementById("result").innerText =
            "🌾 Estimated Harvest: " + totalYield + " kg";
    } else {
        document.getElementById("result").innerText =
            " Please enter both values.";
    }
}
function updateProgress() {
    let progress = document.getElementById("progress").value;

    if (progress >= 0 && progress <= 100) {
        document.getElementById("progress-fill").style.width = progress + "%";
        document.getElementById("progress-text").innerText =
            "🌱 Harvest Readiness: " + progress + "%";
    } else {
        document.getElementById("progress-text").innerText =
            " Please enter a value between 0 and 100.";
    }
}
// Function for "View Today's Tasks"
document.getElementById("viewTasks").addEventListener("click", function() {
    alert("✅ Today's tasks: Irrigation, Fertilizer, Pest Observation");
});

// Function for "Add New Field"
document.getElementById("addField").addEventListener("click", function() {
    alert("🌱 New Field Added Successfully!");
});
document.getElementById("viewTasks").addEventListener("click", function() {
    document.getElementById("tasks").style.display = "block";
});




