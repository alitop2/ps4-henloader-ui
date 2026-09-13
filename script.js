document.addEventListener("DOMContentLoaded", () => {

    const status = document.getElementById("status");
    const buttons = document.querySelectorAll("button");

    function setStatus(message) {
        if (status) {
            status.textContent = message;
        }
    }

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const action = (button.dataset.action || "").toLowerCase();
            const text = button.textContent.trim().toLowerCase();

            // تشغيل HEN
            if (
                action === "hen" ||
                text.includes("تشغيل hen") ||
                text.includes("hen")
            ) {
                setStatus("جاهز — تم اختيار تشغيل HEN.");
                return;
            }

            // Payloads
            if (
                action === "payload" ||
                text.includes("payload")
            ) {
                setStatus("Payloads — اختر الـ Payload المطلوب.");
                return;
            }

            // GoldHEN
            if (text.includes("goldhen")) {
                setStatus("GoldHEN — جاهز للاختيار.");
                return;
            }

            // معلومات النظام
            if (
                text.includes("معلومات") ||
                text.includes("النظام")
            ) {
                setStatus("PS4 HenLoader — واجهة ويب تجريبية لنظام PS4 12.52.");
                return;
            }

            // استعادة المضيف
            if (text.includes("استعادة المضيف")) {
                setStatus("تم اختيار استعادة المضيف.");
                return;
            }

            // إعادة تحميل الصفحة
            if (
                text.includes("إعادة تحميل") ||
                text.includes("تحميل الصفحة")
            ) {
                setStatus("جاري إعادة تحميل الصفحة...");
                setTimeout(() => {
                    location.reload();
                }, 500);
                return;
            }

            // أي زر آخر
            setStatus("تم اختيار: " + button.textContent.trim());
        });

    });

});
