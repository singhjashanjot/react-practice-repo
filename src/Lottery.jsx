import { useState } from "react"
import "./Lottery.css"
import { genticket, sum } from "./helper"
import Ticket from "./Ticket"

export default function Lottery({ n, winningsum }) {
    let [ticket, setticket] = useState(genticket(n))
    let iswinning = sum(ticket) === winningsum;
    let buyticket = () => {
        setticket(genticket(n));
    }
    return (
        <div className="Lottery">
            <h1>Lottery Game </h1>
            <Ticket ticket={ticket} /> <br />
            <button onClick={buyticket}>Buy new Ticket </button>
            <h3>{iswinning && "Congratulations , you won!"}</h3>
        </div>
    )
}