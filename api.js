const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/email", (req, res) =>{
    return res.json(req.body);
    
});

app.listen(port, () => {
    console.log("Servidor está rodando...");
});
