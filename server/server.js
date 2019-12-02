const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const shopRoute = require(`./routes/shopRoute`);
const PORT = process.env.PORT || 5000;

app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({extended:true}));
app.use(`/herbs`, shopRoute);

app.listen(PORT, ()=>{
    console.log('server up on:', PORT);
})