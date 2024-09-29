# Price Tracker

This is a **Price Tracker** application built using **React** and **Tailwind CSS**. The application visualizes price data over time using charts and allows users to interact with the data through various features like toggling between different views, fullscreen mode, and more. The application fetches data from the **Mobula API**.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

### Features

- **Real-time Data**: The application fetches live data from the [Mobula API](https://api.mobula.io) to display price movements and volume over time.
- **Interactive Charts**: The chart component allows users to view different time ranges and compare data points.
- **Fullscreen and Comparison Modes**: Users can switch the chart to fullscreen mode and compare different data sets on the same chart.
- **Custom Components**: Modular components like `Button`, `Tabs`, `ToggleButton`, and `ChartView` are used throughout the app for consistency and reusability.
- **Tailwind CSS Styling**: All UI elements are styled using Tailwind CSS for a responsive and clean design.

## Technologies Used

- React: The primary library for building the UI.

- Tailwind CSS: For styling the components and maintaining responsive design.

- ECharts: A charting library for the price and volume data visualization.

- TypeScript: Provides static typing for improved code quality and development experience.

- Mobula API: Source of live price data for rendering the charts.

- View Prices: Navigate to the "Chart" tab to view the price trends over a selected time range.

- Compare Data: Use the "Compare" button to overlay two data points on the same chart.

- Fullscreen Mode: Click on the "Fullscreen" button to expand the chart for better visibility.

- Setting tabs: Use the toggle for hide tabs.

### Conclusion

The Price Tracker application leverages the power of React, Tailwind CSS, and the Mobula API, tracking price data. By combining modular components with efficient state management and data visualization, the application delivers an intuitive user experience. With features like fullscreen mode, data comparison, and interactive charts, this tool offers a dynamic and scalable solution for price tracking in various use cases.
