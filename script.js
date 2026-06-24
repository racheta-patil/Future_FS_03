function showMessage() {
    alert("Thank you for choosing ABC Cafe!");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been sent.");

    document.getElementById("contactForm").reset();
});