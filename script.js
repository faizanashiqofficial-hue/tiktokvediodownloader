function downloadVideo() {

    const url = document.getElementById("videoUrl").value.trim();

    if (!url) {
        alert("Please enter a TikTok URL.");
        return;
    }

    const validDomains = [
        "tiktok.com",
        "vm.tiktok.com",
        "vt.tiktok.com"
    ];

    const isValid = validDomains.some(domain =>
        url.includes(domain)
    );

    if (!isValid) {
        alert("Please enter a valid TikTok URL.");
        return;
    }

    alert(
        "Backend API required to fetch and download TikTok videos."
    );
}

async function pasteUrl() {

    try {
        const text = await navigator.clipboard.readText();

        document.getElementById("videoUrl").value = text;

    } catch (error) {

        alert("Clipboard access denied.");

    }
}

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
            button.nextElementSibling;

        if (content.style.display === "block") {

            content.style.display = "none";

        } else {

            content.style.display = "block";

        }
    });

});