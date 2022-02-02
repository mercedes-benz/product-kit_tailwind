const plugin = require("tailwindcss/plugin")

const darkMode = plugin(
    function ({ addComponents, addUtilities, theme, variants, config }) {
        const darkSelector = ".dark";
        const darkColorClasses = [];
        const colors = theme("colors");
        const prefixes = ["text", "bg", "border", "ring", "from", "to", "via", "placeholder", "ring-offset", "divide"];

        // Compose color classes

        const generateClass = (property, colorClass, colorValue) => {
            return {
                [`${darkSelector} .${colorClass}`]: {
                    [`${property}`]: colorValue,
                }
            }
        }

        function hexToRGB(h, alpha) {
            if (h.includes("var(--")) {
                return h
            }
            if (h.length == 4) {
                let rh = h[1] + h[1]
                let gh = h[2] + h[2]
                let bh = h[3] + h[3]
                var r = parseInt(rh, 16),
                    g = parseInt(gh, 16),
                    b = parseInt(bh, 16)
            }
            if (h.length == 7) {
                var r = parseInt(h.slice(1, 3), 16),
                    g = parseInt(h.slice(3, 5), 16),
                    b = parseInt(h.slice(5, 7), 16)
            }

            if (alpha) {
                return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
            } else {
                return "rgb(" + r + ", " + g + ", " + b + ")"
            }
        }

         const generateDarkClasses = (colorValue, colorClass) => {
            if (colorValue) {
                if (colorClass.includes("text-")) {
                    darkColorClasses.push(generateClass("color", colorClass, colorValue));
                } else if (colorClass.includes("bg-")) {
                    darkColorClasses.push(generateClass("backgroundColor", colorClass, colorValue))
                } else if (colorClass.includes("border-")) {
                    darkColorClasses.push(generateClass("borderColor", colorClass, colorValue))
                } else if (colorClass.includes("ring-")) {
                    darkColorClasses.push(generateClass("--tw-ring-color", colorClass, colorValue))
                } else if (colorClass.includes("divide-")) {
                    darkColorClasses.push( {
                        [`${darkSelector} .${colorClass} > :not([hidden]) ~ :not([hidden])`]: {
                            borderColor: colorValue,
                        }
                    })
                } else if (colorClass.includes("placeholder-")) {
                    darkColorClasses.push( {
                        [`${darkSelector} .${colorClass}::placeholder`]: {
                            color: colorValue,
                        }
                    })
                } else if (colorClass.includes("ring-offset-")) {
                    darkColorClasses.push({
                        [`${darkSelector} .${colorClass}`]: {
                            "--tw-ring-offset-color": colorValue,
                        }
                    })
                } else if (colorClass.includes("from-")) {
                    darkColorClasses.push( {
                        [`${darkSelector} .${colorClass}`]: {
                            "--tw-gradient-from": colorValue,
                            "--tw-gradient-stops":
                                `var(--tw-gradient-from), var(--tw-gradient-to, ${hexToRGB(
                                    `${colorValue}`,
                                    "0"
                                )})`,
                        }
                    })
                } else if (colorClass.includes("via-")) {
                    darkColorClasses.push( {
                        [`${darkSelector} .${colorClass}`]: {
                            "--tw-gradient-stops":
                                `var(--tw-gradient-from), ${colorValue}, var(--tw-gradient-to, ${hexToRGB(
                                    `${colorValue}`,
                                    "0"
                                )})`,
                        }
                    })
                } else if (colorClass.includes("to-")) {
                    darkColorClasses.push( {
                        [`${darkSelector} .${colorClass}`]: {
                            "--tw-gradient-to": colorValue,
                        }
                    })
                }
            }
         }


        prefixes.forEach((prefix) => {

            for (const [color, value] of Object.entries(colors)) {
                let base = prefix + "-" + color;
                let colorClass = base;
                let colorValue = value.dark;
                if (Object.keys(value).length > 3) {
                    const nestedKey = color;
                    for (const [color, nValue] of Object.entries(value)) {
                        let colorClass = prefix + "-" + nestedKey + "-" + color
                        let colorValue = nValue.dark;
                        generateDarkClasses(colorValue, colorClass)
                    }
                }

                generateDarkClasses(colorValue, colorClass)
            }
        })

        addComponents(darkColorClasses, { variants: ["responsive"] })
    },
);

module.exports = darkMode;