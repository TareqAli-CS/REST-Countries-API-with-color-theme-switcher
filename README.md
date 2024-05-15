# Where in the World?

## Table of Contents
- [About](#about)
- [Features](#features)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Screenshot](#screenshot)

## About
**Where in the World?** is a responsive web application that provides detailed information about countries around the globe. Built with React and Material-UI, it leverages the REST Countries API to fetch and display data such as country names, capitals, regions, subregions, populations, areas, timezones, languages, currencies, and bordering countries. The application includes a dark mode toggle for enhanced user experience and aesthetics.

## Features
- **Search Functionality:** Search for countries by name, with results dynamically filtered as you type.
- **Region Filtering:** Filter countries by region using a dropdown select input.
- **Country Details:** View detailed information about a selected country.
- **Dark Mode:** Toggle between light and dark themes with smooth transitions.
- **Responsive Design:** Fully responsive design for seamless experience across various devices and screen sizes.

## Technology
- **ReactJS:**
  - **useState Hook:** Manages state in functional components for controlling inputs, themes, and fetched data.
  - **useEffect Hook:** Handles side effects, such as fetching data from APIs and updating the DOM.
  - **useContext Hook:** Provides a way to share values like theme settings between components without passing props.
  - **React Router DOM:** Implements client-side routing to handle page navigation and dynamic URLs.

- **Material-UI:**
  - **TextField:** Implements search input with customization and styling.
  - **Select:** Creates a dropdown menu for region filtering.
  - **Card:** Displays country details in a card layout.
  - **Grid:** Provides a responsive grid layout for displaying multiple country cards.
  - **ThemeProvider:** Wraps the application to apply theming, including dark and light modes.
  - **AppBar:** Implements the navigation bar with dark mode toggle.
  - **Button:** Used for various clickable elements, including the dark mode toggle and back button.

- **REST Countries API:**
  - Provides comprehensive information about countries, including names, capitals, regions, populations, areas, timezones, languages, currencies, and borders.

## Installation
To install and run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/TareqAli-CS/REST-Countries-API-with-color-theme-switcher.git
    cd REST-Countries-API-with-color-theme-switcher
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173` (default) to view the application.

## Usage
- **Search for a country:** Enter the country name in the search input to filter the list of countries.
- **Filter by region:** Select a region from the dropdown to view countries from that region.
- **View country details:** Click on a country card to view detailed information about the selected country.
- **Toggle dark mode:** Use the button in the navbar to switch between light and dark themes.

## Credits
- Data from [REST Countries API](https://restcountries.com/)
- Implemented by [Tareq Ali](https://github.com/TareqAli-CS)

## Screenshot
![Screenshot](https://raw.githubusercontent.com/TareqAli-CS/REST-Countries-API-with-color-theme-switcher/master/screenshot.png)
