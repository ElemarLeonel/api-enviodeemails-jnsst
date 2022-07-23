const express = require("express");

const app = express();
app.use(require("cors")());
app.use(express.json());

const port = process.env.PORT || 4000;

app.post("/email", (req, res, next) =>{
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
