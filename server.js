const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

app.get('/api/getUser', (req, res) => {
    const input = req.query.input;
  
    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }

    fetch("https://api.github.com/users/"+input+"")
        .then((result) => result.json())
        .then((data) => {
            console.log(data); // Log the fetched data to the console
            res.json(data); // Send the fetched data as a JSON response
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
        });
});

app.get('/api/getRepos', (req, res) => {
    const input = req.query.input;
  
    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }

    fetch("https://api.github.com/users/"+input+"/repos")
        .then((result) => result.json())
        .then((data) => {
            console.log(data); // Log the fetched data to the console
            res.json(data); // Send the fetched data as a JSON response
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
        });

});

app.get('/api/getOrganization', (req, res) => {
    const input = req.query.input;
  
    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }

    fetch("https://api.github.com/users/"+input+"/orgs")
        .then((result) => result.json())
        .then((data) => {
            console.log(data); // Log the fetched data to the console
            res.json(data); // Send the fetched data as a JSON response
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
        });

});

app.get('/api/getGists', (req, res) => {
    const input = req.query.input;
  
    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }

    fetch("https://api.github.com/users/"+input+"/gists")
        .then((result) => result.json())
        .then((data) => {
            console.log(data); // Log the fetched data to the console
            res.json(data); // Send the fetched data as a JSON response
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
        });

});

app.get("/api", (req, res) => {
    fetch("https://api.github.com/users/DanielBretz95")
        .then((result) => result.json())
        .then((data) => {
            console.log(data); // Log the fetched data to the console
            res.json(data); // Send the fetched data as a JSON response
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
        });
});

fetch("https://api.github.com/users/DanielBretz95")
.then((result)=> result.json())
.then((data) =>{
    console.log(data)
})


app.listen(5000, () => {console.log("Server started on port 5000")})