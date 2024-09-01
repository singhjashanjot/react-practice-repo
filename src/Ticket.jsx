import "./Ticket.css"
import Ticketnum from "./Ticketnum"
export default function Ticket({ ticket }) {
    return (
       
        <div className="Ticket">
             <p>Ticket</p>
            {ticket.map((num, idx) => (
                <Ticketnum key={idx} num={num } /> 
                
            ))}

        </div>
    );
}