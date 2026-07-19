# Kindroid Group Chat Continue Conversation Clicker
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=tomsegura2_Kindroid-AI-Group-Chat-Auto-Continue)
An unofficial Chrome extension designed to streamline your group chat experience on Kindroid AI by automating the "Continue conversation" button.

---

## ⚠️ Disclaimer

**This extension is an independent, community-made project and is NOT affiliated with, authorized, maintained, or endorsed by Kindroid AI.** 

Use this extension at your own risk. Automated interaction with web interfaces can sometimes conflict with platform updates or terms of service. The developers are not responsible for any issues arising from the use of this software.

---

## Features

*   **Toggleable Automation:** Easily turn the auto-clicker ON or OFF directly from the page.
*   **Smart Detection:** Uses an active MutationObserver and fallback timers to detect the "Continue conversation" button the moment it appears.
*   **Rate Limiting:** Built-in cooldown safety to prevent accidental double-clicks or spamming the interface.
*   **Seamless Integration:** Blends quietly into the bottom-right corner of your Kindroid interface.

---

## Installation Instructions

Since this extension is not currently hosted on the Chrome Web Store, you can install it manually using Chrome's Developer Mode:

### Step 1: Download the Extension Files
1. Create a new folder on your computer and name it something like `kindroid-clicker`.
2. Inside that folder, create two files:
   *   `manifest.json` (Paste the manifest code here)
   *   `content.js` (Paste the script logic here)

### Step 2: Enable Developer Mode in Chrome
1. Open Google Chrome.
2. Navigate to the extensions page by typing `chrome://extensions/` into your URL bar and pressing **Enter**.
3. In the top-right corner of the Extensions page, toggle the switch that says **Developer mode** to **ON**.

### Step 3: Load the Extension
1. In the top-left corner, click the **Load unpacked** button.
2. Select the `kindroid-clicker` folder you created in Step 1.
3. The extension is now installed and active!

---

## How to Use

1. Navigate to your chat interface on [Kindroid AI](https://kindroid.ai/).
2. You will see a small gray button in the bottom-right corner labeled **Auto Continue: OFF**.
3. Click the button to toggle it to **Auto Continue: ON** (it will turn green).
4. Sit back and enjoy uninterrupted group chats—the extension will automatically click the continue button whenever your group stops to wait for input!

---

## File Structure

For the extension to load properly, ensure your repository or local folder looks like this:

```text
kindroid-clicker/
├── manifest.json      # Extension configuration and permissions
└── content.js         # Core automation and UI logic
