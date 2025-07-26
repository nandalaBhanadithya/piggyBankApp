# Online Piggy Bank – React Frontend Application

## Project Overview

This is a simple frontend web application that simulates an Online Piggy Bank.  
Users can add money into the piggy bank, view all deposit transactions, break the piggy bank to withdraw all funds, and start a new piggy bank once the previous one is broken.  

This app is designed as a single page React application with all data mocked and managed on the frontend without any backend.

## Features

- Add money to the current piggy bank.
- View all transactions (with timestamps and amounts).
- Break the piggy bank to withdraw all saved money.
- Start a new piggy bank only after the previous one is broken.
- Only one active piggy bank at a time.
- Friendly piggy bank icons added for visual cues.
- Clean component-based UI structure.
- Styling with CSS Modules.
  
## Screenshots

<img width="927" height="505" alt="Screenshot 2025-07-26 081348" src="https://github.com/user-attachments/assets/30157475-af2b-4244-913d-5e4bea3668b4" />


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or above)
- npm (comes with Node.js) or yarn

### Installation
   
1. Clone the repository:

git clone https://github.com/your-username/piggy-bank-app.git
cd piggy-bank-app

npm install

3. Start the development server:

npm start

4. Open your browser and visit:

http://localhost:3000

text

### Usage

- Use the **input box** to enter an amount to deposit.
- Click **Add Money** to deposit into the piggy bank.
- See all deposits listed as transactions with timestamps.
- Click **Break Piggy Bank** to withdraw all funds and view transaction summary.
- After breaking, click **Start New Piggy Bank** to begin again.

## Project Structure

src/
components/
    AddMoneyForm.jsx # Form and button to add money
    BreakBankDialog.jsx # Dialog showing withdrawn amount and history
    EmptyState.jsx # Message and button when no active piggy bank
    PiggyBank.jsx # Main piggy bank view with balance and controls
    TransactionsList.jsx # Displays list of transactions
    PiggyBank.module.css # CSS Module for PiggyBank styling
    App.jsx # Root component managing state and rendering
index.js # React entry point
public/
index.html # HTML template for React app mount

text

## Technologies Used

- React 18 with functional components and hooks
- CSS Modules for scoped styling
- react-icons for UI icons
- JavaScript (ES6+)

## Notes

- Data is stored in React component state only; no backend or persistence.
- No authentication or authorization as per assignment instructions.
- The app is designed to be simple yet componentized and easily extendable.

