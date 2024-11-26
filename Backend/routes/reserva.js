import express from "express";
import { getReserva } from "../controler/reserva.js";

const router = express.Router();

router.get("/", getReserva);

export default router;