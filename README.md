### Pool Management System Client (pms-client)
This is the frontend for a Pool Management System, an ongoing project for managing a pool facility, including user registrations, reservations, and more.

### Test deployed app @ https://www.pool-ms.com/
### Test with user credentials
### Admin User
Username: admin

Password: 123456

### Regular User
Username: user1

Password: 123456


### Features
User registration and authentication
Reservation system for pool activities
Payment account management
Check-in and activity tracking


### Technologies Used
React Js
JavaScript
Pure Css

### Getting Started:

Prerequisites
Node.js
PostgreSQL instance

### Clone the repository pms-server and pms-client in the same project directory 
git clone https://github.com/your-username/pms-server.git
git clone https://github.com/your-username/pms-client.git

Install the dependencies for both the client and server:
npm install


### Create a .env file in the server directory using the following template:

DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_HOST=your_db_host

DB_PORT=5432

PORT=5000
TOKEN_KEY='your_secret_token_key'

JWT_SECRET='your_jwt_secret'

SESSION_SECRET='your_session_secret'

SALT=10

#initial admin user
ADMIN_USERNAME='admin'
ADMIN_PASSWORD='admin_password'
ADMIN_FIRST_NAME='AdminFirstName'
ADMIN_LAST_NAME='AdminLastName'
ADMIN_EMAIL='admin@example.com'
ADMIN_DATE_OF_BIRTH='1980-01-01'
ADMIN_ADDRESS='Admin Address'

#initial public user called user1
PUBLIC_USERNAME='user1'
PUBLIC_PASSWORD='user1_password'
PUBLIC_FIRST_NAME='UserFirstName'
PUBLIC_LAST_NAME='UserLastName'
PUBLIC_EMAIL='user1@example.com'
PUBLIC_DATE_OF_BIRTH='1980-01-01'
PUBLIC_ADDRESS='User Address'
Build the client:


### Start the Server in the server directory
npm run server


### Run the client locally:
npm run start


#### Open the running app
http://localhost:3000.


