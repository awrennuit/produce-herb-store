const shopRouter = require(`express`).Router();
const pool = require(`../modules/pool`);

shopRouter.delete(`/:id`, (req, res)=>{
    let SQLquery = `DELETE FROM herbs WHERE id = $1;`;
    pool.query(SQLquery, [req.params.id])
    .then(result=>{
        res.sendStatus(200)
    }).catch(error=>{
        console.log('ERROR DELETING HERB --------------------------->', error);
        res.sendStatus(500);
    })
})

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

shopRouter.get(`/:id`, (req, res)=>{
    let SQLquery = `SELECT description FROM herbs WHERE id = $1;`;
    pool.query(SQLquery, [req.params.id])
    .then(result=>{
        res.send(result.rows);
    }).catch(error=>{
        console.log('ERROR GETTING HERB DESCRIPTION --------------------------->', error);
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

shopRouter.post(`/search`, (req, res)=>{
    let SQLquery = `SELECT * FROM herbs WHERE lower(name) SIMILAR TO $1 ORDER BY name;`;
    pool.query(SQLquery, ['%' + req.body.search + '%'])
    .then(result=>{
        res.send(result.rows);
    }).catch(error=>{
        console.log('ERROR SEARCHING HERBS --------------------------->', error);
        res.sendStatus(500);
    })
})

shopRouter.put(`/:id`, (req, res)=>{
    let id = [req.body.price, req.params.id];
    let SQLquery = `UPDATE herbs SET price = $1 WHERE id = $2;`;
    pool.query(SQLquery, id)
    .then(result=>{
        res.sendStatus(201);
    }).catch(error=>{
        console.log('ERROR UPDATING HERB --------------------------->', error);
        res.sendStatus(500);
    })
})

module.exports = shopRouter;