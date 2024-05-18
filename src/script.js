// script.js

// Function to switch tabs and display corresponding content
function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Activate the clicked tab link
    event.currentTarget.classList.add("active");
}

// Function to show content based on service id
function showContent(serviceId) {
    var contents = document.getElementsByClassName('service-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(serviceId).style.display = 'block';
}

// Optional: Activate the "Home" tab by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablink').click();
});
