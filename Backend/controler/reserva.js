import {db} from "../db.js"; //importe do banco=

export const getReserva = (_, res) => { //get da querry
    const q = "SELECT * FROM reserva";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        
        return res.status(200).json(data); //retorno de falha
    });

}