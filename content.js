// Kindroid Continue Conversation Clicker
//
// What this does:
// - Adds an Auto Continue ON/OFF button
// - Clicks the "Continue conversation" button when enabled

let autoClickEnabled = false;
let alreadyClicked = false;

// ---------------------------------------------------------------------------
// UI button
// ---------------------------------------------------------------------------

function baseButtonStyles(bottomPx, background) {
  return {
    position: "fixed",
    bottom: `${bottomPx}px`,
    right: "20px",
    zIndex: "999999",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    background,
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    fontFamily: "Arial, sans-serif"
  };
}

function createToggleButton() {
  const toggle = document.createElement("button");

  toggle.id = "kindroid-auto-continue-toggle";
  toggle.textContent = "Auto Continue: OFF";

  Object.assign(toggle.style, baseButtonStyles(20, "#555"));

  toggle.addEventListener("click", () => {
    autoClickEnabled = !autoClickEnabled;

    toggle.textContent = autoClickEnabled
      ? "Auto Continue: ON"
      : "Auto Continue: OFF";

    toggle.style.background = autoClickEnabled ? "#16a34a" : "#555";

    if (autoClickEnabled) {
      clickContinueConversation();
    }
  });

  document.body.appendChild(toggle);
}

// ---------------------------------------------------------------------------
// Auto-click logic
// ---------------------------------------------------------------------------

function clickContinueConversation() {
  if (!autoClickEnabled || alreadyClicked) return;

  const buttons = [...document.querySelectorAll("button")];

  const continueButton = buttons.find(btn =>
    btn.getAttribute("aria-label") === "Continue conversation" &&
    btn.textContent.trim() === "Continue conversation"
  );

  if (continueButton) {
    alreadyClicked = true;
    continueButton.click();
    console.log("[Kindroid Extension] Clicked Continue conversation button.");

    setTimeout(() => {
      alreadyClicked = false;
    }, 3000);
  }
}

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

function init() {
  if (!document.getElementById("kindroid-auto-continue-toggle")) {
    createToggleButton();
  }

  const observer = new MutationObserver(() => {
    clickContinueConversation();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });

  setInterval(clickContinueConversation, 2000);

  clickContinueConversation();

  console.log("[Kindroid Extension] Initialized.");
}

init();
