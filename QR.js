const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector("#generate"),
downloadBtn = wrapper.querySelector("#download"),
qrImg = wrapper.querySelector(".QR-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generate QR code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR code";
        downloadBtn.disabled = false;
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
        downloadBtn.disabled = true;
    }
});

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = "QRCode.png";
    link.click();
});
