# Cryptocurrency App

This project is a simple cryptocurrency application that uses Node.js for the backend, Vite for the frontend, and Tailwind CSS for styling. It includes basic blockchain functionality with mining and transactions.

## Features
**Blockchain Backend**: Implements a basic blockchain with blocks, proof-of-work mining, and transaction handling.

**Frontend**: Interacts with the blockchain via API endpoints, styled with Tailwind CSS.

**REST API**: Manage the blockchain and transactions through HTTP requests.\n\n

## Prerequisites
    - Node.js (v14 or later)
    - npm or yarn

## Installation
   1. Clone the repository:
      ```sh
      git clone https://github.com/your-repo/cryptocurrency-app.git
      cd cryptocurrency-app\n   
      ```
   2. Install dependencies:
      ```sh\n   npm install\n   ```
   3. Set up Tailwind CSS:
      ```sh\n   npx tailwindcss init\n   ```
   4. Run the development server:
      ```sh\n   npm run dev\n   ```
   5. Start the backend server:
      ```sh\n   node server.js\n   ```

## API Endpoints
- `GET /chain`: Retrieve the current blockchain.
- `POST /transactions`: Add a new transaction. Payload format:
  ```json
    {
    "sender": "Alice",
    "receiver": "Bob",
    "amount": 10  }  ```

- `POST /mine`: Mine pending transactions. Payload format:  
  ```json\n  {
     "rewardAddress": "Miner1"
       }
  ```
  
## Frontend Usage
- Open the frontend app at `http://localhost:3000`.
- Use the "Mine Block" button to mine blocks and interact with the blockchain.
  
## File Structure
```
project-root/
|-- server.js            # Backend logic for the blockchain
|-- vite.config.js       # Vite configuration for frontend proxy
|-- src/
|   |-- main.js          # Frontend JavaScript
|   |-- index.css        # Tailwind CSS styling
|-- tailwind.config.js   # Tailwind CSS configuration
```