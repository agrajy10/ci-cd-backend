# ci-cd-backend

This project is a REST API backend built with Express.js and pg-promise for PostgreSQL database interactions. It is designed to facilitate continuous integration and continuous deployment (CI/CD) processes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ci-cd-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd ci-cd-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables.

## Usage

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /items` - Retrieve a list of items.
- `POST /items` - Create a new item.

## Environment Variables

The following environment variables are required:

- `DATABASE_URL` - Connection string for the PostgreSQL database.

## License

This project is licensed under the MIT License.