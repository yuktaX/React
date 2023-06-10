import React from "react";

export default function Card(props) {
    let badgeText
    if (props.card.openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className='card-img'src={require(`../images/${props.card.coverImg}`)}/>
                <div className="card-stats">
                    <img className='card-star'src={require('../images/star.png')} />
                    <span>{props.card.stats.rating}</span>
                    <span className="gray">({props.card.stats.reviewCount}) • </span>
                    <span className="gray">{props.card.location}</span>
                </div>
                <p className="card-title">{props.card.title}</p>
                <p className="card-price"><span className="bold">From ${props.card.price} / person</span></p>
        </section>
    )
}