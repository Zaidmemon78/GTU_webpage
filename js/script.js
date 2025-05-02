// Wait for the HTML document to be fully loaded before running script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Define Fake Company Data (Company Name and approx CPI cutoff)
    const companies = [
        { name: "Tech Mahindra", cutoff: 6.0 },
        { name: "Infosys", cutoff: 6.5 },
        { name: "Wipro", cutoff: 6.5 },
        { name: "Tata Consultancy Services (TCS)", cutoff: 6.8 },
        { name: "Capgemini", cutoff: 7.0 },
        { name: "Accenture", cutoff: 7.2 },
        { name: "Cognizant (GenC)", cutoff: 7.0 },
        { name: "Mindtree", cutoff: 7.0 },
        { name: "Local IT Solutions Gujarat", cutoff: 6.0 },
        { name: "Ahmedabad Tech Park Pvt Ltd", cutoff: 6.2 },
        { name: "eInfochips", cutoff: 7.0 },
        { name: "Cybage", cutoff: 6.8 },
        // Add more companies as needed for a better list
    ];

    // 2. Get references to HTML elements
    const cpiInput = document.getElementById('cpiInput');
    const suggestBtn = document.getElementById('suggestBtn');
    const companyListUl = document.getElementById('companyList');

    // 3. Add event listener to the button
    suggestBtn.addEventListener('click', function() {
        // 4. Get CPI value from input
        const userCpi = parseFloat(cpiInput.value); // Convert input string to a number

        // --- Input Validation ---
        if (isNaN(userCpi) || userCpi <= 0 || userCpi > 10) {
            // Clear previous results
            companyListUl.innerHTML = '';
            // Show error message
            const errorLi = document.createElement('li');
            errorLi.classList.add('list-group-item', 'list-group-item-danger'); // Use Bootstrap's danger style
            errorLi.textContent = 'Please enter a valid CPI/CGPA between 0 and 10.';
            companyListUl.appendChild(errorLi);
            return; // Stop the function here if input is invalid
        }

        // --- Filter Companies ---
        const eligibleCompanies = companies.filter(company => userCpi >= company.cutoff);

        // --- Display Results ---
        // Clear previous results/placeholder
        companyListUl.innerHTML = '';

        if (eligibleCompanies.length > 0) {
            // Sort companies by cutoff (optional, but good)
             eligibleCompanies.sort((a, b) => a.cutoff - b.cutoff);

            eligibleCompanies.forEach(company => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item'); // Bootstrap class for styling list items
                // Display company name and its cutoff criteria
                listItem.textContent = `${company.name} (Approx. Cutoff: ${company.cutoff.toFixed(1)})`;
                companyListUl.appendChild(listItem);
            });
        } else {
            // Show message if no companies match
            const noMatchLi = document.createElement('li');
            noMatchLi.classList.add('list-group-item', 'list-group-item-warning'); // Use Bootstrap's warning style
            noMatchLi.textContent = 'No companies found matching this CPI cutoff in our sample list. Keep working hard!';
            companyListUl.appendChild(noMatchLi);
        }
    });

}); // End of DOMContentLoaded