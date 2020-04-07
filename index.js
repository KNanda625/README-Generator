const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

async function main() {
    console.log(`starting`);

    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "Enter your GitHub username: ",
            name: "user"
        },

        {
            type: "input",
            message: "Enter title of app: ",
            name: "title"
        },

        {
            type: "input",
            message: "Enter description of application: ",
            name: "description"
        },

        {
            type: "input",
            message: "Enter steps to install app: ",
            name: "install"
        },

        {
            type: "input",
            message: "Enter instructions to use app: ",
            name: "instruction"
        },

        {
            type: "input",
            message: "Enter license name and url: ",
            name: "license"
        },

        {
            type: "input",
            message: "Enter GitHub usernames for any contributors: ",
            name: "contributors"
        },

        {
            type: "input",
            message: "Enter examples for running tests: ",
            name: "tests"
        }
        ]);

        console.log(`starting`);
        console.log(userResponse);
        
        function writeToFile(fileName, data) {
            return fs.writeFileSync(path.join(process.cwd(), fileName), data);
          }
        api.getUser(userResponse.user).then(({ data }) => {
            console.log(data)
            writeToFile("README.md", generateMarkdown({ ...userResponse, ...data }));
          });
         
    
}

main();


