const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const request = require("supertest");
const app = express();
const route = require('./routes/User');
app.use(cors());
app.use(express.json());
app.use('/User', route);

    describe("Task 01", () => {
        test("It should respond to the POST method", async () => {
            const response = await request("http://localhost:4000/User").post("/add").send({
                "Name": 'Muhammad Ahmed',
                "Email": 'MA@nu.edu.pk',
                "Age": 21,
                "Contact": 456
            })
            expect(response.statusCode).toBe(200);
        })
    })
