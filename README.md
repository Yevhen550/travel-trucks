🚘 Travel Trucks Service - Camper Rental App
📝 Project Overview
The goal of this project is to create the frontend part of a web application for the company "TravelTrucks", which provides camper van rentals. The application consists of several pages:

Home Page
Catalog Page with filtering options
Camper Details Page with gallery, reviews, and booking form
Users can explore available campers, filter results based on specific parameters, view camper details, read reviews, and submit a booking request.

🚀 Getting Started
Installation
Clone the repository:
git clone https://github.com/your-username/travel-trucks-service.git
Install dependencies:
npm install
Run the development server:
npm run dev
Build for production:
npm run build
📅 Note for Vercel deployment:
For smooth deployment on Vercel and to handle peer dependency issues, the custom install command is configured directly in the Vercel project settings:

Navigate to:
Project Settings → Build & Development Settings → Framework Settings → Install Command

Enable the override and set the following command:

npm install --legacy-peer-deps
This ensures the project builds successfully despite any peer dependency conflicts. The command was added specifically to support React Simple Image Viewer, since this library is not fully compatible with React 19.

💻 Application Features
📖 Home Page
Introductory content about the service.
🗂️ Catalog Page
Displays a list of available campers.
Includes an advanced filtering system.
🔍 Filtering Logic Highlights
Location filter:
Works with an input field that updates the URL and Redux state in real-time (onChange) with debounce.
Allows partial matches by city name.
Equipment and Type filters:
Applied upon form submission.
Updates both the URL parameters and Redux state.
URL parameters support deep-linking and reflect the current filtering state.
Reset Filters:
Clears all selected filters from the form, Redux, and URL.
🏗️ Camper Badges (Collapsible Feature)
Each camper card displays key features (badges).
On the catalog page, the badge section is collapsible if there are many badges, allowing users to expand/collapse the list.
🏛️ Camper Details Page
Displays detailed information about the selected camper.
Image Gallery with Lightbox:
Clicking an image opens it in a fullscreen lightbox with navigation.
Booking Form with Date Range Picker:
Users select a booking date range.
Form validates input and displays success messages.
Reviews Section:
Displays camper-specific reviews with ratings and comments.
📱 Responsive Design
⚠️ Currently designed only for desktop view.
📲 Mobile and tablet responsiveness is in progress.
🛠️ Technologies & Libraries Used
Core:
React 19
Redux Toolkit (TypeScript)
React Router DOM v7
Redux Persist for favorites storage
Forms & Validation:
React Hook Form
Date & Time:
React Date Range
Date-fns
HTTP Requests:
Axios (used for data fetching and API communication)
UI / UX Enhancements:
iziToast – for success notifications
React Spinners – loading indicator
React Simple Image Viewer – lightbox gallery preview
CSS Modules – component-based styling
📌 Additional Notes
State Management is implemented via Redux Toolkit with TypeScript.
Filter state is synced between Redux store and URL parameters for better UX and shareable links.
Debounced location input prevents unnecessary re-renders and API calls.
The project includes handling Vercel deployment quirks with a custom build command.
🌟 Project Status
The project is complete, deployed, and ready for further improvements and scaling based on business needs.
