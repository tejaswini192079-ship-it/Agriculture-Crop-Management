# Harvestly — Farm Management Platform (HTML, CSS and JavaScript)

A responsive, front-end-only farm management prototype built using **plain HTML, CSS and vanilla JavaScript**. It does not use React, Vite, a backend server, or an external database.

## Files

- `index.html` — page structure and modal shell
- `styles.css` — responsive layout, colors, tables, forms, charts and components
- `app.js` — sample data, navigation, form handling, filtering, charts, exports and browser storage

## Run it

1. Extract the ZIP file.
2. Open `index.html` in a recent browser (Chrome, Edge, Firefox or Safari).
3. Use the role selector in the top bar to switch between the Farmer and Administrator demo views.

No package installation or build step is required. You can also run it with the VS Code Live Server extension if you prefer.

## Features

- Dashboard summaries, CSS donut chart, growth-stage bar chart and rule-based alerts
- Farms and fields: create, edit, delete, search and filter
- Crop cycles with crop-specific growth-stage options
- Irrigation, fertilizer and pest-observation forms
- Harvest records, reports, CSV export and JSON backup/import
- Simulated farmer / administrator roles
- Browser `localStorage` persistence and a reset-demo-data option
- Responsive desktop and mobile navigation

## Notes / limitations

- Sample farmers and activities are fictional demonstration data. Do not enter real personal or sensitive information.
- Role selection is a user-interface simulation, not real authentication or secure access control.
- Local changes are saved only in the current browser profile. They do not sync between devices.
- Charts and alerts are calculated from records entered in the prototype. No live weather, sensors, pest diagnosis or agronomic recommendations are provided.
- The Google Fonts stylesheet is optional. The app remains functional with local system fonts if internet access is unavailable.
