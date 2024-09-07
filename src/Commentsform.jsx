import { useState } from "react"

export default function Commentsform() {

    let [formdata, setformdata] = useState({
        username: "",
        remarks: "",
        rating: 5
    })

    let handleinputchange = (event) => {
        setformdata((currdata) => {
            return { ...currdata, [event.target.name]: event.target.value }
        })
    }
    let handlesubmit = (event) => {
        console.log(formdata);
        event.preventDefault();
    }

    return (
        <div> <h4>Give a comment ! </h4>
            <form onSubmit={handlesubmit}>
                <label htmlFor="username">Username: </label>
                <input placeholder="username" type="text" value={formdata.username} onChange={handleinputchange} id="username" name="username" />
                <br /><br />
                <label htmlFor="remarks">Remarks: </label>
                <textarea name="remarks" id="remarks" onChange={handleinputchange} value={formdata.remarks}>Remarks</textarea>
                <br /><br />
                <label htmlFor="rating">Ratings: </label>
                <input id="rating" placeholder="rating" value={formdata.rating} type="number" min={1} max={10} onChange={handleinputchange} name="rating" />
                <br /><br />

                <button>Add comment</button>
            </form>

        </div>
    )
}