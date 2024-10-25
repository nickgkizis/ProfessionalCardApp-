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

function downloadCard() {
  html2canvas(document.getElementById("cardPreview")).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "business_card.png";
    link.click();
  });
}

function toggleMenu() {
  const menu = document.querySelector(".theme-buttons");
  menu.classList.toggle("show");
}
