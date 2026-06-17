function validateEnquiryForm() {
    let name = document.forms["enquiryForm"]["name"].value;
    let email = document.forms["enquiryForm"]["email"].value;

    if (name == "" || email == "") {
        alert("Please fill in all fields");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }

    alert("Enquiry submitted successfully!");
    return true;// SEARCH PRODUCTS
function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });

}
