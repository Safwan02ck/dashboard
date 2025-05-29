document.addEventListener('DOMContentLoaded', function() {
  // Initialize chart
  const ctx = document.getElementById('leadsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Leads',
        data: [167, 190, 210, 252, 265, 280],
        backgroundColor: '#adfa1d'
      }]
    },
    options: {
      scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true }
      }
    }
  });
// FILEPATH: /Users/hamza/lead_dashboard/lead-dashboard/script.js

document.addEventListener('DOMContentLoaded', function() {
  // Initialize chart
  const ctx = document.getElementById('leadsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Leads',
        data: [167, 190, 210, 252, 265, 280],
        backgroundColor: '#adfa1d'
      }]
    },
    options: {
      scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true }
      }
    }
  });

  // Fetch leads data from backend
  fetchLeads();

  function fetchLeads() {
    fetch('backend/getLeads.php')
      .then(response => response.json())
      .then(data => {
        const leadsTable = document.getElementById('leadsTable');
        data.forEach(lead => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td><span class="status">${lead.status}</span></td>
          `;
          leadsTable.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching leads:', error));
  }
});

  // Fetch leads data from backend
  fetchLeads();

  function fetchLeads() {
    fetch('backend/getLeads.php')
      .then(response => response.json())
      .then(data => {
        const leadsTable = document.getElementById('leadsTable');
        data.forEach(lead => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td><span class="status">${lead.status}</span></td>
          `;
          leadsTable.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching leads:', error));
  }
});
