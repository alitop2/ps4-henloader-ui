const status = document.getElementById("status");

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    if (action === "hen") {
      status.textContent = "واجهة HEN جاهزة — لم يتم تنفيذ أي Payload.";
    } else if (action === "payload") {
      status.textContent = "يمكنك إضافة روابط/أزرار Payload هنا لاحقًا.";
    } else {
      status.textContent = "PS4 HenLoader Web UI — نسخة تجريبية.";
    }
  });
});
