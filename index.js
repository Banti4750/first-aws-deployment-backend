const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.status(200).send("Hello  World! ")
})

app.listen(80, "0.0.0.0", () => {
 console.log("Server is running on port 80");
});
