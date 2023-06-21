import React from "react";

export default function Die(props)
{
    const styles = {
        backgroundColor: props.held ? "#59E391" : "#ffffff"
    }
    return(
        <div className="die" style={styles} onClick={props.handler}>
            <h3>{props.value}</h3>
        </div>
    )
}