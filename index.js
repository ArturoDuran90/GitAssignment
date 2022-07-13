const routes = require('./routes/routes')

const express = require('express');

const app = express();
const router = express.Router();
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/game', routes.game_screen);
app.get('/options', routes.options_screen);

// router.get('/game', (req, res) => {
//     app.get('/game', routes.game_screen);//adding stuff not so successfully
// });

router.post('/game', (req, res) => {
    app.get('/game', routes.game_screen);//adding stuff not so successfully
});

//DO NOT DO ALL PAGES INTO A SINGLE SCRIPT
//Using modules to clean it up
//As follows
    //New folder -- routes


//How to insert an HTML file into this.
//ADD A VIEW ENGINE!!!!
app.listen(3000);