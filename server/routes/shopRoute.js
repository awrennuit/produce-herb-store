const shopRouter = require(`express`).Router();
const pool = require(`../modules/pool`);

shopRouter.get(`/`, (req, res)=>{
    let SQLquery = "SELECT * FROM herbs ORDER BY lower(name);";
    pool.query(SQLquery)
    .then(result=>{
        res.send(result.rows);
    }).catch(error=>{
        console.log('ERROR GETTING HERBS --------------------------->', error);
        res.sendStatus(500);
    })
})

shopRouter.post(`/`, (req, res)=>{
    let id = [req.body.name, req.body.quantity, req.body.price, req.body.per, req.body.description, req.body.image_path];
    let SQLquery = `INSERT INTO herbs(name, quantity, price, per, description, image_path) VALUES($1, $2, $3, $4, $5, $6);`;
    pool.query(SQLquery, id)
    .then(result=>{
        res.sendStatus(201);
    }).catch(error=>{
        console.log('ERROR ADDING HERB --------------------------->', error);
        res.sendStatus(500);
    })
})

module.exports = shopRouter;