// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Donation Form Display
function showDonationForm(type) {
    let formHTML = `<form>`;
    if (type === 'money') {
        formHTML += `
            <label>Amount:</label>
            <input type="number" placeholder="Enter amount" required>
            <button type="submit">Donate Money</button>
        `;
    } else if (type === 'food') {
        formHTML += `
            <label>Food Details:</label>
            <input type="text" placeholder="Type of food" required>
            <button type="submit">Donate Food</button>
        `;
    } else if (type === 'clothes') {
        formHTML += `
            <label>Clothing Details:</label>
            <input type="text" placeholder="Type of clothes" required>
            <button type="submit">Donate Clothes</button>
        `;
    } else if (type === 'medicine') {
        formHTML += `
            <label>Medicine Details:</label>
            <input type="text" placeholder="Type of medicine" required>
            <button type="submit">Donate Medicine</button>
        `;
    }
    formHTML += `</form>`;
    document.getElementById('donation-form-container').innerHTML = formHTML;
}

// Swiper Carousel Init
const teamSwiper = new Swiper('.team-carousel', {
    loop: true,
    autoplay: { delay: 2000 },
    slidesPerView: 1,
    breakpoints: {
        768: { slidesPerView: 3 }
    }
});
