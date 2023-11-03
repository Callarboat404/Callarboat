// Event listener for Monthly subscription click
document.getElementById('monthly').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    const subplanInput = document.getElementById('subplan');
    const subdateInput = document.getElementById('subdate');
    const subdaterenewInput = document.getElementById('subdaterenew');

    // Set subscription plan
    subplanInput.value = 'Monthly Plan';

    const currentDate = new Date();

    // Calculate the date for the next month
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    // Format current and next month's date
    const formattedCurrentDate = formatDate(currentDate);
    const formattedNextMonthDate = formatDate(nextMonth);

    // Display current date and set the renewal date to next month
    subdateInput.value = formattedCurrentDate;
    subdaterenewInput.value = formattedNextMonthDate;
});

// // Event listener for Yearly subscription click
document.getElementById('yearly').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    const subplanInput = document.getElementById('subplan');
    const subdateInput = document.getElementById('subdate');
    const subdaterenewInput = document.getElementById('subdaterenew');

    // Set subscription plan
    subplanInput.value = 'Yearly Plan';

    const currentDate = new Date();

    // Calculate the date for next year
    const nextYear = new Date(currentDate);
    nextYear.setFullYear(nextYear.getFullYear() + 1);

    // Format current date and date for next year
    const formattedCurrentDate = formatDate(currentDate);
    const formattedNextYearDate = formatDate(nextYear);

    // Display current date and set the renewal date to next year
    subdateInput.value = formattedCurrentDate;
    subdaterenewInput.value = formattedNextYearDate;
});

// Function to format date to 'YYYY-MM-DDTHH:MM' for input value
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}



