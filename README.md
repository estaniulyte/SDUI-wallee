# Wallee SDUI task

## How to run the project

### 1. Environment Configuration

  Create a `.env` file in the project root directory and add the following variable:

  `REACT_APP_SCHEMA_URL=https://estaniulyte.github.io/Data/page-schema.json`

### 2. Install Dependencies

   Run the following command to install the required packages:

   `npm i`

### 3. Start the Application

   To launch the project in development mode, execute:
   
   `npm start`


### 4. Access the Application

Open your browser and navigate to http://localhost:3000 to view the application.

## Application Functionality

The application fetches the schema data from page-schema.json (hosted here:  https://estaniulyte.github.io/Data/page-schema.json) and renders components dynamically based on this schema.

For rendering, it utilizes a utility function called `componentRenderer`, which verifies whether the specified component type exists in the codebase before rendering it. Currently, the application supports two component types:

- checkbox-list-panel
- page-title

## Working Demo

Explore the live demo of the application: https://main--wallee-sdui.netlify.app/
