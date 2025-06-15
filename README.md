Leads Dashboard

A responsive web-based dashboard that displays real-time insights into lead data including total leads, conversion rate, average deal size, open deals, and a chart of monthly leads. It also fetches and displays recent leads from a backend API.

Live Demo

Check out the live version of this dashboard here:  
https://leaderdashboard.netlify.app/


Features

- **Summary Cards**: Show key metrics like Total Leads, Conversion Rate, etc.
- **Interactive Bar Chart**: Monthly lead trends using Chart.js.
- **Recent Leads Table**: Dynamically fetches and displays leads.
- **Responsive Layout**: Mobile-friendly and responsive design.

Technologies Used

- **HTML5**  
- **CSS3**
- **JavaScript (ES6+)**
- **Chart.js** for chart rendering
- **Fetch API** to retrieve data from backend
- **PHP** (on backend) - assumes `getLeads.php` returns JSON data

## File Structure

lead-dashboard/
│
├── index.html # Main dashboard page
├── style.css # Stylesheet
├── script.js # Chart initialization and data fetching
├── backend/
│ └── getLeads.php # Backend script that returns JSON data
└── README.md # Project documentation

## Setup Instructions

1. Clone this repository.
2. Ensure your local server supports PHP (e.g., use XAMPP, MAMP, or a local LAMP server).
3. Place the project folder in your server's root directory.
4. Open `index.html` in a browser.
5. Ensure `backend/getLeads.php` is returning valid JSON data like:

```json
[
  { "name": "John Doe", "email": "john@example.com", "status": "New" },
  { "name": "Jane Smith", "email": "jane@example.com", "status": "Contacted" }
]
