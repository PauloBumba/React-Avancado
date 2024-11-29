import React from "react";
import "./style.scss"
interface Bodyprops {
  id: number;
  title: string;
  url: string;
  summry: string;
  image_url:string
}

export const Body: React.FC<Bodyprops> = ({ id, title, url, summry,image_url }) => {
  return (
    <div className="card my-3 col-4 mx-auto" key={id}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{summry}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Leia Mais
        </a>
        <img src={image_url}alt=""  className="img"/>
      </div>
    </div>
  );
};
