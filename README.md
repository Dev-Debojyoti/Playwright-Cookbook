# 🎭 Playwright-Cookbook

Welcome to my personal Playwright automation repository! This project serves as a centralized hub for all my hands-on test scripts, daily exercise workflows, and end-to-end (E2E) automation demos compiled while mastering modern web automation testing.

## 🚀 Project Goals & Milestones
*   **Core API Mastery:** Practical handling of specialized browser actions like pop-ups, frames, dynamic networks, and file uploads.
*   **Data-Driven Automation:** Decoupling test code execution logic from test datasets utilizing dynamic iterations.
*   **Scalable Architecture:** Actively refactoring flat test designs into a clean, maintainable **Page Object Model (POM)** structure.

---

## 📁 Repository Structure

```text
├── pages/                       # 🏗️ Page Object Model (POM) Classes (In Progress)
│   ├── LoginPage.js             # Encapsulated locators and actions for Login screen
│   └── DashboardPage.js         # Encapsulated locators and actions for Dashboard screen
├── testdata/                    # External datasets for framework validation
│   ├── testdata.json
│   └── testDataLogin.json       # Structured login credentials for data-driven specs
├── tests/                       # Main automation test suite folder
│   ├── codegen.spec.js          # Auto-generated code records using Playwright Inspector
│   ├── datadrivenlogin.spec.js  # Dynamic test loop iterating over login credentials
│   ├── demo.spec.js             # Basic assertion and script checkpoints
│   ├── dropdown.spec.js         # Dropdown select and index picking workflows
│   ├── errormessage1.spec.js    # UI boundary error validations
│   ├── errormessage2.spec.js
│   ├── fileupload.spec.js       # File attachment workflows targeting local upload assets
│   ├── google.spec.js           # Global navigation sanity validation
│   ├── handlealerts.spec.js     # Intercepting native JavaScript popups and confirmation dialogs
│   ├── handleautosuggestions.spec.js # Dynamic dropdown filtering and selection
│   ├── handleDynamicNetworkCall.spec.js # Handling dynamic backend api wait sequences
│   ├── handleframes.spec.js     # Switching contexts and interacting with nested iFrames
│   ├── handlemultiplewindow.spec.js # Managing concurrent browser contexts and multi-tabs
│   ├── keyboardactions.spec.js  # Simulating specialized modifier keys and raw input typing
│   ├── login.spec.js            # Standard base application authentication flow
│   ├── maximizewindow.spec.js   # Browser viewport sizing configuration validations
│   ├── mousehover.spec.js       # Hover states, tooltips, and action menu triggers
│   ├── register.spec.js         # New user creation workflows
│   ├── retryfailcase.spec.js    # Testing auto-retry mechanisms for flaky test environments
│   └── testdatadrivendemo.spec.js
├── uploads/                     # Storage for mock attachment assets used in tests
├── .gitignore                   # Excludes node_modules, reports, and environment secrets
├── package.json                 # Node dependencies and execution script shortcuts
└── README.md                    # Framework implementation documentation
```

---

## 🛠️ Tech Stack & Configurations
*   **Framework:** [Playwright Automation](https://playwright.dev) (JavaScript / ES6+)
*   **Test Runner:** Playwright Runner (Parallel execution enabled by default)
*   **Debugging Tooling:** Playwright Trace Viewer / Interactive UI Mode
*   **Target Practice Application:** [Freelance Learn Automation Portal](https://vercel.app)

---

## ⚡ Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v16 or higher recommended) installed on your system.

### 2. Framework Installation
Clone this repository locally, navigate into the project directory, and initialize the dependencies:

```bash
# Clone the project code
git clone https://github.com

# Move into the working directory
cd LEARNING-PLAYWRIGHT

# Install node dependencies
npm install

# Download the bundled web browser engines (Chromium, Firefox, WebKit)
npx playwright install
```

### 3. Running the Automation Scripts

You can execute your tests using any of the following terminal commands:

```bash
# Run the entire test suite across all headless browsers
npx playwright test

# Run a specific test script (e.g., Data Driven Login)
npx playwright test tests/datadrivenlogin.spec.js

# Launch the interactive graphical UI Mode runner
npx playwright test --ui

# Open the auto-generated HTML test execution report
npx playwright show-report
```

---

## 💡 Highlighted Mastered Concepts
*   **No Flaky Pauses:** Abandoned rigid thread sleeps (`page.waitForTimeout()`) in favor of Playwright's native auto-waiting locator capabilities.
*   **Parallel Execution Handling:** Leveraging JavaScript `for...of` loops alongside template literal string injection to build dynamically isolated test titles for seamless parallel grid executions.
*   **Context Control:** Isolating multi-window behaviors cleanly using customized asynchronous execution states.

---
⭐ *Feel free to explore the `tests/` directory to view the specific logic configurations for individual test files!*
