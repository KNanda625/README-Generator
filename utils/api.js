const axios = require("axios");

const api = {
    getUser(username) {
        return axios.get(`https://api.github.com/users/${username}/?client_id=${
            process.env.CLIENT_ID
        }`).catch(err => {
            console.log(`User not found`);
            process.exit(1);
          });
    }
  };

  module.exports = api;