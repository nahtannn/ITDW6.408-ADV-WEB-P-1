// webapi.js

import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
        // Supabase project URL
        const supabaseUrl = 'https://ibvbpjrxxfhoxlpjcpcr.supabase.co';
        // Supabase API key
        const supabaseKey = 'sb_publishable_B3HlSi5vvBKU1Ov9ldcukg_zp7EuoFM';
const supabase = createClient(supabaseUrl, supabaseKey);
let allRecords = [];
// Function to fetch data from Supabase
async function getData() {
    const { data, error } = await supabase
        .from('mobiletechnologyform')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching data:', error);
        alert('Error Fetching Data');
        return [];
    }
    return data; 
}
// Function to render cards based on the records
function renderCards(records) {
    const outputElement = document.getElementById('mobiletechnologyform-data');
    outputElement.innerHTML = '';

    if (records.length === 0) {
        outputElement.innerHTML = '<p class="text-muted">No matching results found.</p>';
        return;
    }

    records.forEach(record => {
        const colElement = document.createElement('div');
        colElement.className = 'col-12 col-lg-4 mb-4';

        colElement.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${record.fname} ${record.lname}</h5>
                    <p class="card-text">Gender: ${record.gender}</p>
                    <p class="card-text">Address: ${record.address1} ${record.address2}</p>
                    <p class="card-text">City: ${record.city}</p>
                    <p class="card-text">Mobile Phone Type: ${record.phone_types}</p>
                    <p class="card-text">Mobile Provider: ${record.provider}</p>
                    <p class="card-text">Study Use: ${record.study_use}</p>
                </div>
            </div>
        `;

        outputElement.appendChild(colElement);
    });
}
// Function to filter and display cards based on search input
function displayFilteredCards() {
    const searchInput = document.getElementById('searchInput');
    const term = searchInput.value.trim().toLowerCase();

    if (term === '') {
        renderCards(allRecords);
        return;
    }

    const filtered = allRecords.filter(record => {
        const fname = (record.fname || '').toLowerCase();
        const lname = (record.lname || '').toLowerCase();
        const gender = (record.gender || '').toLowerCase();
        const address1 = (record.address1 || '').toLowerCase();
        const address2 = (record.address2 || '').toLowerCase();
        const city = (record.city || '').toLowerCase();
        const phone_types = Array.isArray(record.phone_types) ? record.phone_types.map(pt => pt.toLowerCase()).join(' ') : '';
        const provider = (record.provider || '').toLowerCase();
        const study_use = (record.study_use || '').toLowerCase();

        return fname.includes(term) || lname.includes(term) || gender.includes(term) || address1.includes(term) || address2.includes(term) || city.includes(term) || phone_types.includes(term) || provider.includes(term) || study_use.includes(term);
    });

    renderCards(filtered);
}

// Expose to global scope so the inline onclick in the HTML can find it
window.displayFilteredCards = displayFilteredCards;

getData().then(data => {
    console.log(JSON.stringify(data, null, 2));
    allRecords = data;
    renderCards(allRecords);
});