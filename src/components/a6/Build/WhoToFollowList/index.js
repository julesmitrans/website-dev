import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
            {
                who.map((who, i) => {
                    return(
                        <WhoToFollowListItem key={i} who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;