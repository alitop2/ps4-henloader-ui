const status = document.getElementById("status");

const HENLOADER = "https://github.com/GoldHEN/henloader_lp";
const GOLDHEN = "https://github.com/GoldHEN/GoldHEN";

function setStatus(message) {
  status.textContent = message;
}

document.querySelectorAll(".menu-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "hen") {
      setStatus("🟢 HEN 12.52: فتح مصدر HENloader LP الرسمي...");
      window.open(HENLOADER, "_blank");
    } else if (action === "payload") {
      setStatus("📦 Payloads: راجع قسم الإصدارات في HENloader LP أو GoldHEN.");
      window.open(HENLOADER, "_blank");
    } else if (action === "goldhen") {
      setStatus("🟢 GoldHEN: فتح المستودع الرسمي...");
      window.open(GOLDHEN, "_blank");
    } else if (action === "info") {
      setStatus("ℹ️ Firmware المستهدف: PS4 12.52 — Poopsploit هو مسار HENloader المستخدم لهذا النطاق.");
    } else if (action === "restore") {
      setStatus("♻️ تم اختيار استعادة المضيف. لا يوجد مضيف محفوظ داخل هذه الواجهة.");
    } else if (action === "reload") {
      setStatus("🔄 جاري إعادة تحميل الصفحة...");
      setTimeout(() => location.reload(), 500);
    }
  });
});
