# React Firebase App

This is a React application integrated with Firebase for authentication and data storage.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (version 6 or higher)
- Firebase account

### Installing

1. **Clone the repository:**

    ```sh
    git clone https://github.com/UttomKumarRoy/computer-shop-client
    cd computer-shop-client
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

3. **Set up Firebase:**

    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Navigate to Project Settings > General > Your apps > Firebase SDK snippet > Config.
    - Copy your Firebase configuration credentials.

4. **Create a `.env` file in the root directory of your project:**

    ```sh
    touch .env
    ```

5. **Add your Firebase credentials to the `.env` file:**

    ```env
    VITE_apiKey=your-api-key
    VITE_authDomain=your-auth-domain
    VITE_projectId=your-project-id
    VITE_storageBucket=your-storage-bucket
    VITE_messagingSenderId=your-messaging-sender-id
    VITE_appId=your-app-id
    VITE_measurementId=your-measurement-id
    ```

### Running the App

To start the development server, run:

```sh
npm run dev
