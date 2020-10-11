// CONST
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// DEPEND
const axios = require('axios');
const Inquirer = require("inquirer");
const Jest = require('jest');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

let managerArr = [];
let engineerArr = [];
let internArr = [];
let employeeInfo = [];



// ????
const adminChoices = [{
    type: "list",
    message: "What would you like to do?",
    name: "adminchoice",
    choices: [
        'Add an employee to the team?',
        'create HTML page?'
    ]
}]



const adminQuestions = [{
        type: "input",
        message: "Hello manager, What is your Name?",
        name: "name"
    }

    {
        type: "input",
        message: "What is your id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "confirm",
        message: "Are you a manager?",
        name: "position",
        choices: [
            'Yes',
            'No'
        ]
    }
];

const questions = [{
    type: "input",
    mesage: "What is the employee's name?",
    name: "name"
} {
    type: "input",
    mesage: "What is the employee's id?",
    name: "id"
} {
    type: "input",
    mesage: "What is the employee's email?",
    name: "email"
} {
    type: "list",
    mesage: "What is the employee's title?",
    name: "title"
    choices: [
        'engineer',
        'intern'
    ]
}];

const managerQuestion = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }

];

const engineerQuestion = [{
        type: "input",
        message: "What is the employee's GitHUb username?",
        name: "gitname"
    }

];

const internQuestion = [{
        type: "input",
        message: "What school did the employee go to?",
        name: "school"
    }

];






let start =
    async function adminStart() {

        await Inquirer
            .prompt(adminQuestions)

        .then(async function(userData) {
            let managerInfo = {
                'name': userData.name,
                'id': JSON.parse(userData.id),
                'email': userData.email,
                'role': 'employee',
                'title': 'manager',
                'officeNumber': '',
                'gitname': '',
                'github': '',
                'school': ''
            }
            if (position = true) {
                employeeInfo.push(managerInfo)
                newemo()
            }
        })
    }





let next =
    async function adminNext() {
        await Inquirer
            .prompt(adminChoices)
            .then(async function(answer) {
                if (answers.adminchoice === 'add an employee to the team?') {
                    employeeInfo.length = 0;
                    Input()
                }
                if (answers.adminchoice === 'create HTML page?') {
                    fs.createReadStream()
                }
            })
    };

let input =
    async function init() {
        await Inquirer
            .prompt(questions)

        .then(async function(userData) {
            let userInfo = {
                'name': userData.name,
                'id': JSON.parse(userData.id),
                'email': userData.email,
                'role': 'employee', // DEFAULT
                'title': userData.title,
                'officeNumber': '',
                'gitname': '',
                'github': '',
                'school': ''
            }
            employeeInfo.push(userInfo)
            newemp()
        })
    };

let newemo =
    async function employeeprofile() {
        const name = employeeInfo[0].name;
        const id = employeeInfo[0].id;
        const email = employeeInfo[0].email;
        const role = employeeInfo[0].role;

        const employee = new Employee(name, id, email, role)
        classdir()
    };

let classdir =
    async function bytitle() {

        if (employeeInfo[0].title === "manager") {
            buildManager()
        }
        if (employeeInfo[0].title === "engineer") {
            buildEngineer()
        }
        if (employeeInfo[0].title === "intern") {
            buildIntern()
        }
    };

async function buildManager() {
    await Inquirer
        .prompt(managerQuestion)

    .then(async function(userData) {
        let managerAns = {
            'officeNumber': JSON.parse(userData.officeNumber)
        }
        employeeInfo[0].officeNumber = managerAns.officeNumber;

        const name = employeeInfo[0].name;
        const id = employeeInfo[0].id;
        const email = employeeInfo[0].email;
        const role = employeeInfo[0].role;
        const officeNumber = employeeInfo[0].officeNumber;

        const manager = new Manager(name, id, email, officeNumber)
        managerArr.push(manager);

    })

    next()
};



















// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```