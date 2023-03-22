import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import user from "./library/user.json"
import 'bootstrap/dist/css/bootstrap.min.css';



const Card = () => { return(
 user.map((photo) =>{
  return(
  <div key={photo.id} className="card" style={{width: "18rem"}}>
    <img src={photo.avatar} className="card-img-top card__img" alt={photo.username} />
    <div className="card-body">
      <p className="card-text name-text">{photo.username}</p>
      <p className="name-text name-tag">#{photo.tag}</p>
      <p className="text-location">{photo.location}</p>
    </div>
    <ul className = "stats-list">
      <li className="stats-item">
        <span>followers</span>
        <span>{photo.stats.followers}</span>
      </li>
      <li className="stats-item"><span>views</span>
        <span>{photo.stats.views}</span></li>
      <li className="stats-item"><span>likes</span>
        <span>{photo.stats.likes}</span></li>
    </ul>
  </div>
  )
}))}

ReactDOM.createRoot(document.getElementById('root')).render(<Card />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
