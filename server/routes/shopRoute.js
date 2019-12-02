const shopRouter = require(`express`).Router();
const pool = require(`../modules/pool`);

shopRouter.get(`/`, (req, res)=>{
    let SQLquery = "SELECT * FROM herbs ORDER BY name;";
    pool.query(SQLquery)
    .then(result=>{
        res.send(result.rows);
    }).catch(error=>{
        console.log('ERROR GETTING HERBS --------------------------->', error);
        res.sendStatus(500);
    })
})

module.exports = shopRouter;