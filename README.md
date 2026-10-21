# 🧮 GDG Calculator

A simple, interactive calculator built with **HTML, CSS, and vanilla JavaScript** as part of the **GDG Algiers Integration Program (GIP)**.

Featuring a custom interface inspired by Google Developer Groups colors, keyboard support, error handling, and light and dark themes.

## ✨ Features

- **Basic arithmetic:** Addition, subtraction, multiplication, and division.
- **Operator precedence:** Evaluates expressions according to standard arithmetic precedence.
- **Parentheses:** Supports parentheses for grouping calculations.
- **Keyboard support:** Perform calculations using your keyboard.
- **Delete (`DEL`):** Remove the last character.
- **All Clear (`AC`):** Clear the current calculation.
- **Error handling:** Displays syntax errors and mathematical errors, such as division by zero.
- **Floating-point rounding:** Rounds calculated results to avoid displaying common floating-point precision artifacts.
- **Light and dark modes:** Switch between themes with a dedicated toggle.
- **Responsive styling:** Adapts the calculator layout to smaller screens.
- **GDG-inspired design:** Custom colors and GDG Algiers branding.

## 🛠️ Technologies

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or external JavaScript libraries are required.

## ⌨️ Keyboard Shortcuts

| Key            | Action                    |
| -------------- | ------------------------- |
| `0`–`9`        | Enter a number            |
| `+`            | Addition                  |
| `-`            | Subtraction               |
| `*` or `x`     | Multiplication            |
| `/`            | Division                  |
| `.`            | Decimal point             |
| `(` and `)`    | Parentheses               |
| `Enter` or `=` | Calculate the result      |
| `Backspace`    | Delete the last character |
| `Escape`       | Clear the calculation     |

## 🚀 Getting Started

### Prerequisites

A modern web browser is all you need. Python is optional and can be used to run a local development server.

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YuniqueCode07/gdg-calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd gdg-calculator
   ```

3. Start a local server:

   ```bash
   python -m http.server 8000
   ```

4. Open the following address in your browser:

   ```text
   http://localhost:8000
   ```

Alternatively, open `index.html` directly in your browser.

## 📁 Project Structure

```text
gdg-calculator/
├── index.html    # Calculator structure and interface
├── index.css     # Styling, layout, and themes
├── index.js      # Calculator logic and keyboard events
└── README.md     # Project documentation
```

## 🌐 Live Demo

Try the calculator online:

[https://yuniquecode07.github.io/GDG-Calculator/](https://yuniquecode07.github.io/GDG-Calculator/)

## 🎨 Design

The interface combines a dark calculator body with a display and buttons styled for clarity and usability. Its background uses the red, blue, green, and yellow colors associated with Google Developer Groups.

A theme toggle lets users switch between light and dark modes.

## 🙌 Acknowledgements

- **GDG Algiers** — For the Integration Program (GIP).
- **Ant Design Icons** — For the calculator SVG icon used as the website favicon.

## 👨‍💻 Author

**AIT MESSAOUD Yanis**

Created as part of the **GDG Algiers Integration Program (GIP)**.

---

*Built with HTML, CSS, and JavaScript.*
