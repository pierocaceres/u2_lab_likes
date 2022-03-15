import React, { useState } from 'react';

function Likes(props) {

    let [likes, totalLikes] = useState(0)
    console.log(likes)
    const addLikes = () => {
        likes++
        totalLikes(likes)
    }

    const subtractLikes = () => {
        if(likes > 0){likes--}
        totalLikes(likes)
    }
    return (
        <div className="like">
            <p className="likes-view">{likes}</p>
            <button className="button" id="plus" onClick={addLikes}>+</button>
            <button className="button" id="minus" onClick={subtractLikes}>-</button>
        </div>
    );
}

export default Likes;