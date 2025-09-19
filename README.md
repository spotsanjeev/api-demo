# API Demo Project

## Description

This project demonstrates how CRUD operations happen on the users collection using Docker.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/spotsanjeev/api-demo
   ```

## Run the Application on Linux/Mac

```bash
docker compose up
```

## Run the Application on Windows

```bash
docker-compose up
```

## Stop the Application

```bash
docker compose down
```

## API Endpoints (Optional)

* `GET /api/users` - Get all users

* `POST /api/users` - Create a new user

   **Request Body (JSON):**
   ```json
   {
   "firstName": "John",
   "lastName": "Doe",
   "email": "john.doe@example.com"
   }


* `GET /api/users/:id` - Get user by ID

* `PUT /api/users/:id` - Update user by ID

   
   **Request Body (JSON):**
   ```json
   {
   "id": "lbdskjlbdslvbs",
   "firstName": "John",
   "lastName": "Doe",
   "age": 28
   }


* `DELETE /api/users/:id` - Delete user by ID
