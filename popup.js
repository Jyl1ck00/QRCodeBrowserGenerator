document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const url = tabs[0]?.url; 

        if (url) {
            generateQRCode(url);
        } else {
            console.error("Unable to retrieve URL.");
        }
    });
});

function generateQRCode(url) {
    const qrCodeContainer = document.getElementById("qr-code"); 
    qrCodeContainer.innerHTML = ""; 

    new QRCode(qrCodeContainer, {
        text: url,
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H  
    });
}
