# This lab assignment focuses on using Jest to perform Automated unit tests.

The overview of all tests is in tests-overview.pdf file.

---

# 🧪 Jest Unit Testing Lab

## 📘 Overview
This lab is an assignment to practice **Unit Testing** in a **Node.js** environment using **Jest**.  
It demonstrates how to write, configure, and generate automated test reports — including coverage and detailed HTML reports.


---

## ⚙️ Files Description

### 🧾 `average.test.js`
This file contains all **unit test cases** written with **Jest**.  
It tests the functionality of `average.js` with various input cases — including normal values, empty arrays, and invalid inputs.

---

### 📦 `package.json`
Defines the project setup, dependencies, and Jest configuration.

**Key Sections:**

| Section | Description |
|----------|-------------|
| `"scripts"` | Contains commands for running tests and generating reports. |
| `"devDependencies"` | Includes Jest and Jest Stare for testing and reporting. |
| `"jest"` | Configures Jest to collect coverage and generate HTML reports. |

**Main Scripts:**
```bash
npm test        # Run all Jest tests
npm run coverage # Run tests and generate coverage report
