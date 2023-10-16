# Use the official Node.js runtime as the base image
FROM --platform=linux/amd64 node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching for npm install
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

COPY .env.production .env

# Build the React appn
RUN npm run build

# Install a lightweight HTTP server to serve the built React app
RUN npm install -g serve

WORKDIR /app/build
# Expose the port that the app will run on
EXPOSE 3000

# Command to run when the container starts
CMD ["npm", "start"]
