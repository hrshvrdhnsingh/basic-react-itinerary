import {useState} from 'react';

function Card({id, name, info, image, price, deleteHandler}) {
   
   const[readmore, setReadMore] = useState(false);
   const description = readmore? info: `${info.substring(0,200)}....`;
   function readmoreListener() {
    setReadMore(!readmore);
   }

   return (
      <div className="card">
          <img src={image} alt="" className="image"></img>
          <div className="tour-info">
            <div className="tour-details">
              <h4 className="tour-price">₹ {price}</h4>
              <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
              {description}
              <span className="read-more" onClick= {readmoreListener}>{readmore? 'show less': 'show-more'}</span>
            </div>
            <button className="btn-not-interested" onClick= {() => deleteHandler(id)}>Not interested</button>
          </div>
      </div>
   );
}

export default Card;