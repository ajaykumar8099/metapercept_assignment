import "./index.css"

const CardItem = props => {
    const{itemData} = props 
    const{Name,ImageUrl,ShortDesc} = itemData 
    return (
        <li className="list-item">
            <img src={ImageUrl} alt={Name}/>
            <div className="sub-list-item">
                <h1 className="li-item-head">{Name}</h1>
                <p className="li-item-para">{ShortDesc}</p>
                <button type="button" className="view-button">
                    view more
                </button>
            </div>
        </li>
    )

}
export default CardItem