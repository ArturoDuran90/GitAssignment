const routes = require('./routes/routes')

const express = require('express');

const app = express();

app.get('/', routes.index);

//DO NOT DO ALL PAGES INTO A SINGLE SCRIPT
//Using modules to clean it up
//As follows
    //New folder -- routes


//How to insert an HTML file into this.
//ADD A VIEW ENGINE!!!!
app.listen(3000);