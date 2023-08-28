document.addEventListener("DOMContentLoaded", function () {
    const inputTemperature = document.getElementById("inputTemperature");
    const inputScale = document.getElementById("inputScale");
    const convertButton = document.getElementById("convertButton");
    const resultParagraph = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(inputTemperature.value);
        const inputUnit = inputScale.value;
        const result = convertTemperature(temperature, inputUnit);

        if (!isNaN(result)) {
            resultParagraph.textContent = `Result: ${result.toFixed(2)} ${getOutputUnit(inputUnit)}`;
        } else {
            resultParagraph.textContent = "Invalid input";
        }
    });

    function convertTemperature(temperature, inputUnit) {
        // Implement your conversion logic here
        // Example conversion formulas:
        if (inputUnit === "celsius") {
            return (temperature * 9/5) + 32; // Celsius to Fahrenheit
        } else if (inputUnit === "fahrenheit") {
            return (temperature - 32) * 5/9; // Fahrenheit to Celsius
        } else if (inputUnit === "kelvin") {
            return temperature - 273.15; // Kelvin to Celsius
        }
        return NaN; // Return NaN for unsupported conversions
    }

    function getOutputUnit(inputUnit) {
        // Determine the corresponding output unit based on input unit
        if (inputUnit === "celsius") {
            return "Fahrenheit";
        } else if (inputUnit === "fahrenheit") {
            return "Celsius";
        } else if (inputUnit === "kelvin") {
            return "Celsius";
        }
        return "";
    }
});
