# CAR REACT APP 
Car Race App is a web application that provides an ultimate hub for motorsports enthusiasts. It allows users to explore in-depth statistics on drivers, circuits, and racing history. The app provides real-time stats, track records, and performance analytics of various racers and teams.

## Features
- Home Page: Displays featured race cars with images and descriptions.
- Drivers Page: Lists all drivers and allows adding new drivers.
- Circuits Page: Lists all circuits and allows adding new circuits.
- Stats Page: Provides an overview of racing statistics.
- Search Functionality: Allows users to search for specific content.
- Responsive Design: Ensures the app looks great on all devices.

## Technologies Used
- React (Frontend library)

- Vite (Bundler & Development tool)

- React Router (Client-side routing)

- Formik (Form validation)

- Yup (Schema-based validation)

## Project Structure
-  .gitignore
- index.html
- package.json
- public/
    - assets/
- src/
    - api.js
    - App.jsx
    - assets/
    - components/
        - Card.jsx
        - CircuitForm.jsx
        - CircuitList.jsx
        - DriverForm.jsx
        - DriverList.jsx
        - Footer.jsx
        - Navbar.jsx
        - SearchBar.jsx
    - counter.js
    - main.jsx
    - pages/
        - Drivers.jsx
        - Circuits.jsx
        - Home.jsx
        - Stats.jsx
    - style.css
- vite.config.js

## Installation
1. Clone the repository:
`git clone git@github.com:MarionNafula/My_Car_Race_Project_React.git`
`cd car-race-app`

2. Clone the backend repository:
` git clone git@github.com:MarionNafula/My_Car_Race_Project.git` 
` cd My_Car_Race_Project`

3. Install dependencies:
`npm install`

4. Start the development server:
`npm run dev`

5. Open your browser and navigate to http://localhost:5173.

## Usage
- Navigate through different pages using the navbar.
- View and add drivers and circuits.
- Explore featured race cars on the home page.
- Use the search bar to find specific content

## API Endpoints
The app interacts with a backend server to fetch and add data. The API endpoints are defined in api.js

- Drivers:
- GET /drivers: Fetch all drivers.
- POST /drivers: Add a new driver.

- Circuits:
- GET /circuits: Fetch all circuits.
- POST /circuits: Add a new circuit.

## Components
- Card: Displays a card with an image, name, and description.
- CircuitForm: Form to add a new circuit.
- CircuitList: Lists all circuits.
- DriverForm: Form to add a new driver.
- DriverList: Lists all drivers.
- Footer: Footer component with links and social media icons.
- Navbar: Navigation bar with links to different pages.
- SearchBar: Search bar component.

## Pages
- Home: Home page with featured race cars.
- Drivers: Page to view and add drivers.
- Circuits: Page to view and add circuits.
- Stats: Page with an overview of racing statistics.

## Styling
The app uses a custom CSS file for styling. The styles are defined in style.css.

## Configuration
The app uses Vite for development and build configuration. The configuration is defined in vite.config.js.

## Backend API
- The backend API can be viewed at [https://my-car-race-project.onrender.com]
- Backend repository `git@github.com:MarionNafula/My_Car_Race_Project.git`

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to contribute to this project by submitting issues or pull requests. Enjoy exploring the world of motorsports with Car Race App!