# Email Writer – AI-Powered Email Automation

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Email Writer** is a full-stack application that automatically generates intelligent, context-aware email replies. Built with **Spring Boot**, **React**, and the **Gemini API**, it saves time, increases productivity, and now includes a **Chrome Extension** that integrates directly into Gmail/webmail with an **“Auto Reply” button**.

---

## 🚀 Features

* **AI-Powered Replies:** Automatically generate context-aware responses using Gemini API.
* **React Frontend:** Clean UI for composing, reviewing, and sending emails.
* **Spring Boot Backend:** Handles email fetching, processing, and sending.
* **Chrome Extension:** Adds **Auto Reply button** beside the Send button in Gmail/webmail.
* **Customizable Settings:** Adjust tone, signature, and reply preferences.
* **Optional Analytics:** Track email response patterns.

---

## 🛠️ Tech Stack

| Layer          | Technology                        |
| -------------- | --------------------------------- |
| Backend        | Spring Boot, Java, REST APIs      |
| Frontend       | React.js, HTML, CSS, JavaScript   |
| AI Integration | Gemini API (LLM)                  |
| Database       | MySQL / PostgreSQL (optional)     |
| Deployment     | Maven, Node.js, Docker (optional) |

---

## ⚡️ Getting Started

### Prerequisites

* Java 17+
* Node.js & npm
* Maven
* Gemini API Key

---

### Backend Setup (Copyable)

```bash
# Clone the repository
git clone https://github.com/saitejayaruva/Email-Writer.git

# Navigate to backend folder
cd Email-Writer/backend

# Build the project
mvn clean install

# Run the Spring Boot application
mvn spring-boot:run
```

> Add your Gemini API key in `src/main/resources/application.properties`:

```properties
gemini.api.key=YOUR_API_KEY_HERE
```

---

### Frontend Setup (Copyable)

```bash
# Navigate to frontend folder
cd ../frontend

# Install dependencies
npm install

# Start the React app
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Chrome Extension – Smart Auto Reply

The Chrome Extension enhances Gmail/webmail:

* Detects the reply box when a user clicks **Reply**.
* Adds an **“Auto Reply” button** next to the Send button.
* Generates an **AI-powered reply** using Gemini API.
* Users can **review or edit** the response before sending.

#### Installation (Developer Mode)

```bash
# 1. Open Chrome -> chrome://extensions/
# 2. Enable Developer Mode
# 3. Click "Load unpacked" and select the chrome-extension folder
```

> GUI-based; no Bash commands required for running the extension.

---

## 🎯 Usage

1. Connect Gmail or Outlook via the frontend.
2. Incoming emails appear in your dashboard.
3. Click **Generate Reply** for AI-powered responses.
4. Review and send manually or automatically.
5. Use the Chrome extension to generate **auto-replies directly in Gmail/webmail**.

---

## 📊 Future Enhancements

* Multi-language replies
* Sentiment-aware tone customization
* Bulk email processing
* Slack, Teams, or Outlook plugin integration
* Scheduled/automated responses

---

## 🎥 Demo

Include a GIF/video showing:

* React frontend in action
* Email selection & AI reply generation
* Chrome extension **Auto Reply** button in Gmail

---

## 🤝 Contributing

Open issues or submit pull requests to improve the project.

---

## 📜 License

MIT License – see [LICENSE](LICENSE) file.

---

## 💡 Recruiter Highlights

* **Full-Stack Development:** Spring Boot + React
* **AI/LLM Integration:** Gemini API for context-aware replies
* **Chrome Extension:** Auto Reply button with Gmail/webmail integration
* **Real-World Application:** Automates email replies efficiently
