const status = document.getElementById("status");

const HEN_RELEASE =
  "https://github.com/GoldHEN/henloader_lp/releases/latest";

const GOLDHEN =
  "https://github.com/GoldHEN/GoldHEN";

function setStatus(message) {
  status.textContent = message;
}

document.querySelectorAll(".menu-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "hen") {
      setStatus("🟢 فتح HENloader LP الرسمي لـ PS4 12.52...");
      window.location.href = HEN_RELEASE;

    } else if (action === "payload") {
      setStatus("📦 فتح إصدارات HENloader...");
      window.location.href = HEN_RELEASE;

    } else if (action === "goldhen") {
      setStatus("🟢 فتح GoldHEN الرسمي...");
      window.location.href = GOLDHEN;

    } else if (action === "info") {
      setStatus("ℹ️ PS4 12.52 — Poops exploit.");

    } else if (action === "restore") {
      setStatus("♻️ لا يوجد مضيف محفوظ.");

    } else if (action === "reload") {
      location.reload();
    }
  });
});
