# DoodleCollab Backend Setup

Follow these steps to set up the DoodleCollab backend on your local machine.

## Step 1: Navigate to Server Folder

```bash
cd server
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Set Up MongoDB

- Visit [MongoDB](mongodb.com) and create a new MongoDB project (create a free cluster).
- Connect to the cluster using MongoDB Compass and copy the MongoDB Compass string.

## Step 4: Create a dotenv File

- Create a file named .env in the server folder and add the following line, replacing <your_mongodb_compass_string> with the copied MongoDB Compass string:

```dotenv
MONGO_URI=<your_mongodb_compass_string>
```

## Step 5: Start the Backend

Run the following command to start your backend server:

```bash
npm start
```

Now, your backend is all set up, and you can start working on the project.

Happy coding!
