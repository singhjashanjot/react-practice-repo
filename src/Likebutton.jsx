import { useState } from "react"
export default function Likebutton() {
    let [isLiked, setisLiked] = useState(false)

    let toggleLike = () => {
        setisLiked(!isLiked)
    }

    let likestyle = {color:"red"}
    return (
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? (<i className="fa-solid fa-heart" style={likestyle}></i>) : (<i className="fa-regular fa-heart"></i>)
                }
            </p>
        </div>
    )
} 