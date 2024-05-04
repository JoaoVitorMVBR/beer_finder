const { Pool } = require('pg');

const pool = new Pool({
    user: "jhon",
    database: "beer_finder_bd",
    password: "senha",
    port: 5432,
    host: "localhost",
});

// async function insertData(){
//     try{
//         const query = ` 
//             INSERT INTO bares (nome, bairro, rua, numero)
//             VALUES ($1, $2, $3, $4)
//             RETURNING *;
//         `

//         const values = ['Bar do Dudu', 'Riacho das Pedras', 'Rua Rio Madeira', '766'];
    
//         const result = await pool.query(query, values);

//         console.log(result.rows[0]);
//     }catch (error){
//         console.log(error);
//     }
// }



// async function insertData(){
//     try {
//         const query = `
//             INSERT INTO bar_bebida (id_bar, id_bebida, preco)
//             VALUES ($1, $2, $3)
//             RETURNING *;
//         `
//         const values = ['1', '1', ''];

//         const result = await pool.query(query, values);

//         console.log(result.rows[0]);
//     }catch(error){
//         console.log(error);
//     }
// }

// insertData();