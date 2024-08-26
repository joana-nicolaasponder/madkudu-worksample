# 🦌 Antelope Data Dash

Welcome to the **Antelope Data Dash** project! This web application is designed to visualize and compare various antelope species through interactive data tables, charts, and fact cards, giving users insights into the unique characteristics of each species.

## 🛠️ Tech Stack

- **Frontend:** React.js, ChakraUI, Recharts
- **Backend:** Node.js, Express.js

## 🌟 Features

- **Data Table:** Displays a comprehensive list of antelope species with key attributes like name, weight, height, horn type, and continent.
- **Interactive Charts:**
  - **Bar Chart:** Visualizes the weight per species.
  - **Pie Chart:** Illustrates the distribution of species across continents.
  - **Scatter Plot Chart:** Shows the correlation between weight and height of different species.
- **Fact Cards:** Presents interesting facts and images for each antelope species.
- **User Interaction:** Allows users to select different charts and components through dropdowns and tabs for a customized viewing experience.

## 🚀 Process

Starting with the frontend, I built a React.js application using ChakraUI for UI components and Recharts for data visualization. The backend was developed with Node.js and Express.js to serve the antelope data. The development process involved creating modular, reusable components for the frontend and a simple, efficient server structure for the backend. 

## 📚 Learnings

- **Data Visualization:** Enhanced my skills in creating dynamic and interactive charts using Recharts.
- **Component-Based Architecture:** Gained deeper insights into organizing a React.js project with reusable components and custom hooks.
- **Efficient Data Handling:** Recognized and addressed inefficiencies in data fetching, specifically reducing the number of antelopes fetched from six to two by passing antelopedata as a prop to the main component. Additionally, when strict mode is disabled, this results in rendering only one antelope, which minimizes unnecessary processing.

## 🔧 Improvements

- **Advanced Filtering:** Adding more sophisticated filtering options for users to customize their data views.
- **Expanded Dataset:** Incorporating additional data points or species to provide more comprehensive comparisons.
- **Scalability Considerations:** The current implementation, which re-renders frequently, could become a bottleneck with larger datasets. To address this, the logic would ideally be moved to the server-side, and a paginated view would be implemented to efficiently handle large volumes of data. However, given that there are only 25 datasets at present, it made sense to manage this on the frontend for simplicity and speed.

## 🛠️ Running the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/joana-nicolaasponder/madkudu-worksample.git

2. **Install the dependencies:**
    ```bash
    cd madkudu-worksample
    npm install
    
3. **Run the project:**
    ```bash
    npm run dev

## 🎥 Video or Image
Check out the screenshot below to get a quick overview of the Antelope Data Dash project in action!
![Antelope Data Dash](./public/screenshot.png)

