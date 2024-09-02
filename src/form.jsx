import { useState } from "react"

export default function Forms() {

    let [formdata, setformdata] = useState({
        username: "",
        fullname: ""
    })
    // let handlenamechange = (event) => {
    //     setfullname(event.target.value)
    // }
    // let handleusername = (event) => {
    //     setusername(event.target.value)
    // }

    let handleinputchange = (event) => {
        let fieldname = event.target.name;
        let newvalue = event.target.value;
        setformdata((currdata) => {
            currdata[fieldname] = newvalue;
            return { ...currdata };
        })

    }
    let handlesubmit = (event) => {
        event.preventDefault();
    }


    return (
        < form onSubmit={handlesubmit}>
            <label htmlFor="fullname">Full name  </label>
            <input placeholder="enter yur name " id="fullname" value={formdata.fullname} onChange={handleinputchange} name="fullname" />
            <br /><br />
            <label htmlFor="username">username  </label>
            <input placeholder="enter username " id="username" value={formdata.username} onChange={handleinputchange} name="username" />

            <br /><br />
            <button>submit</button>
        </form >

    )
}