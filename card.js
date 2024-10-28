function updateCard() {
  const name = document.getElementById("nameInput").value;
  const job = document.getElementById("jobInput").value;
  const linkedin = document.getElementById("linkedinInput").value;
  const web = document.getElementById("webInput").value;
  const github = document.getElementById("githubInput").value;
  const location = document.getElementById("locationInput").value;
  const email = document.getElementById("emailInput").value;
  const phone = document.getElementById("phoneInput").value;

  document.getElementById("cardName").innerText = name || "Your Name";
  document.getElementById("cardJob").innerText = job || "Your Job Title";

  // Toggle visibility based on input
  document
    .getElementById("cardLinkedin")
    .classList.toggle("card-hidden", !linkedin);
  document.getElementById("cardWeb").classList.toggle("card-hidden", !web);
  document
    .getElementById("cardGithub")
    .classList.toggle("card-hidden", !github);
  document
    .getElementById("cardLocation")
    .classList.toggle("card-hidden", !location);
  document.getElementById("cardEmail").classList.toggle("card-hidden", !email);
  document.getElementById("cardPhone").classList.toggle("card-hidden", !phone);

  document.getElementById("linkedinText").innerText = linkedin || "LinkedIn";
  document.getElementById("webText").innerText = web || "Web Page";
  document.getElementById("githubText").innerText = github || "GitHub";
  document.getElementById("locationText").innerText = location || "Location";
  document.getElementById("emailText").innerText = email || "Email";
  document.getElementById("phoneText").innerText = phone || "Phone";
}

function setTheme(theme) {
  const cardPreview = document.getElementById("cardPreview");
  cardPreview.className = "card-preview " + theme;
  updateCard(); // Update card information if necessary
}

function downloadCard(format) {
  const cardElement = document.getElementById("cardPreview");
  html2canvas(cardElement, {
    scale: 2,
  })
    .then((canvas) => {
      const downloadLink = document.createElement("a");

      if (format === "png" || format === "jpg") {
        const imgType = format === "png" ? "image/png" : "image/jpeg";
        downloadLink.href = canvas.toDataURL(imgType);
        downloadLink.download = `business-card.${format}`;
        downloadLink.click();
      } else if (format === "pdf") {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new window.jspdf.jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [3.5, 2],
          putOnlyUsedFonts: true,
          floatPrecision: 16, 
        });
        pdf.addImage(imgData, "PNG", 0, 0, 3.5, 2); 
        pdf.save("business-card.pdf");
      }
    })
    .catch((error) => console.error("Error generating file:", error));
}








