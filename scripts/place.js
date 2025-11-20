document.addEventListener("DOMContentLoaded", function () {
    // --- Footer Dynamic Content ---
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedP = document.getElementById("lastModified");
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }

    // --- Wind Chill Calculation ---
    const temperatureSpan = document.getElementById("temperature");
    const windSpeedSpan = document.getElementById("wind-speed");
    const windChillSpan = document.getElementById("wind-chill");

    const temperature = parseFloat(temperatureSpan.textContent);
    const windSpeed = parseFloat(windSpeedSpan.textContent);

    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillValue = calculateWindChill(temperature, windSpeed);
        windChillSpan.textContent = `${windChillValue}°C`;
    } else {
        windChillSpan.textContent = "N/A";
    }
});

