const display = document.getElementById("display");

        // Add value to display
        function appendValue(value) {

            if (display.value === "0" || display.value === "Error") {
                display.value = value;
            } 
            else {
                display.value += value;
            }

            // Real-time result
            if (/[+\-*/]$/.test(display.value) === false) {
                try {
                    display.value = eval(display.value);
                } catch {
                    // Wait until expression is complete
                }
            }
        }


        // Clear calculator
        function clearDisplay() {
            display.value = "0";
        }


        // Delete last character
        function deleteLast() {

            if (display.value.length > 1) {
                display.value = display.value.slice(0, -1);
            } 
            else {
                display.value = "0";
            }
        }


        // Calculate result
        function calculate() {

            try {
                display.value = eval(display.value);
            } 
            catch {
                display.value = "Error";
            }
        }


        // Keyboard support
        document.addEventListener("keydown", function(event) {

            const key = event.key;

            if (
                (key >= "0" && key <= "9") ||
                key === "+" ||
                key === "-" ||
                key === "*" ||
                key === "/" ||
                key === "." ||
                key === "%"
            ) {
                appendValue(key);
            }

            else if (key === "Enter" || key === "=") {
                calculate();
            }

            else if (key === "Escape") {
                clearDisplay();
            }

            else if (key === "Backspace") {
                deleteLast();
            }

        });
