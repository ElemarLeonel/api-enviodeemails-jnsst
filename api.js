const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const port = 5000;

app.post("/email", (req, res) =>{
    const fullname = req.body.fullname;
    const email = req.body.email;
    const title = req.body.title;
    const message = req.body.message;

    require('./services/mailServices')(fullname, email, title, message)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

app.listen(port, () => {
    console.log("Servidor está rodando...");
});
