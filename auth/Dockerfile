# 
FROM node:alpine
# Setup working directory
WORKDIR /app
# Copy package.json to app
COPY package.json .
# Install all dependencies
RUN npm install
# Copy everything else from project directory to app
COPY . .
# Setup command to run when container starts up
CMD ["npm", "start"]