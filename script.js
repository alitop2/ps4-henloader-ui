document.addEventListener("DOMContentLoaded", function () {

    const status = document.getElementById("status");
    const buttons = document.querySelectorAll("button[data-action]");


    function setStatus(message) {

        if (!status) {
            return;
        }

        status.textContent = message;
    }


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const action = button.dataset.action;


            /* تشغيل HEN */

            if (action === "hen") {

                setStatus(
                    "تم اختيار تشغيل HEN لنظام PS4 12.52."
                );

                return;
            }


            /* Payloads */

            if (action === "payload") {

                setStatus(
                    "Payloads — اختر الـ Payload المطلوب."
                );

                return;
            }


            /* GoldHEN */

            if (action === "goldhen") {

                setStatus(
                    "GoldHEN — تم اختيار GoldHEN."
                );

                return;
            }


            /* معلومات النظام */

            if (action === "info") {

                setStatus(
                    "PS4 HenLoader — إصدار تجريبي لنظام PS4 12.52."
                );

                return;
            }


            /* استعادة المضيف */

            if (action === "restore") {

                setStatus(
                    "تم اختيار استعادة المضيف."
                );

                return;
            }


            /* إعادة تحميل */

            if (action === "reload") {

                setStatus(
                    "جاري إعادة تحميل الصفحة..."
                );

                setTimeout(function () {

                    window.location.reload();

                }, 500);

                return;
            }


            /* أي زر غير معروف */

            setStatus(
                "تم اختيار: " +
                button.textContent.trim()
            );

        });

    });

});
