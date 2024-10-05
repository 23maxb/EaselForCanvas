# My Project

## Overview

This project consists of a Deno backend and a Next.js frontend. Below are the instructions to start both the backend
server and the frontend application.

## Extension/Userscript

Most of this repository is a work in progress. There is a prototype extension with a single feature in the extension directory. 
If you're just looking for that download you can go to releases or install from the link below if you have tampermonkey.

https://greasyfork.org/en/scripts/511548-adds-date-time-stamps-and-a-new-scheduling-page-to-canvas


## Prerequisites

- [Deno](https://deno.land/#installation)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Next.js](https://nextjs.org/)

### Setup For Running Locally

1. Clone the repository:
    ```sh
   git clone https://github.com/23maxb/EaselForCanvas.git
   cd EaselForCanvas
   ```
2. Install the dependencies for the frontend and backend:
    ```sh
   npm i
   npm run dependencies
    ```

### Running

1. Run the frontend and backend locally:
    ```sh
   npm run dev
    ```

### Testing Only Frontend or Only Backend

## Backend (Deno)

### Starting only the Deno Server

1. Navigate to the `backend/my-project` directory:
    ```sh
    cd backend/my-project
    ```
2. Run the development server:
    ```sh
    deno task dev
    ```

## Frontend (Next.js)

### Starting ONLY the Next.js Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Run the development server:
    ```sh
    npm run dev
    ```

## Additional Information

- The Deno server will watch for changes and restart automatically.
- The Next.js frontend will be available at `http://localhost:3000`.

Feel free to contribute and open issues if you encounter any problems.