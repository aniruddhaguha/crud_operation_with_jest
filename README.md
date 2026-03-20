**Project Overview**

This project demonstrates CRUD operations (Create, Read, Update, Delete) in JavaScript with unit tests using Jest.

It’s designed as a learning & portfolio project to showcase skills in:

1. JavaScript logic implementation

2. Writing clean unit tests

3. Handling edge cases and validations

4. Using Jest CLI for automated testing

**Features**

✅ Create users with validation

✅ Read users by ID

✅ Update user details (partial or full)

✅ Delete users

✅ Handle edge cases (invalid input, non-existent users)

✅ Fully tested using Jest with labeled test case IDs

**Tech Stack**

1. JavaScript (Node.js)

2. Jest for unit testing

**Project Structure**

crud_operation_with_jest/
├── crud.js            # CRUD operations logic
├── crud.test.js       # Jest test cases (with test IDs)
├── package.json       # Project config & dependencies
└── README.md          # Project documentation

**Getting Started**

1️⃣ Clone the repository

git clone https://github.com/aniruddhaguha/crud_operation_with_jest.git

cd crud_operation_with_jest

2️⃣ Install dependencies

npm test

Runs all Jest test cases from crud.test.js.

Test case IDs are labeled like C1, R2, U3, D1, E1 for clarity.

4️⃣ Optional: Run with coverage report

npx jest --coverage

Shows detailed coverage of functions tested.

**Sample Test Cases**

| Test Case | Description                              |
| --------- | ---------------------------------------- |
| C1        | Create user with valid data              |
| C2        | Create user with missing ID throws error |
| R1        | Get existing user by ID                  |
| R2        | Get non-existent user returns null       |
| U1        | Update existing user data                |
| U3        | Partial update adds new field            |
| D1        | Delete existing user successfully        |
| D3        | Delete same user twice                   |
| E1        | Reset users empties store                |

Full test suite is in crud.test.js.

**Why This Project is Portfolio-Ready**

1. Shows JavaScript logic + validation

2. Demonstrates unit testing skills with Jest

3. Includes edge cases & test IDs for clear QA documentation

4. Easy to clone, run, and extend
