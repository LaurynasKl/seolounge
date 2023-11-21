import { FaAngleRight } from 'react-icons/fa'

export function ServiceBlock({ data }){
  const {icon, title, description, link, price} = data;
   
      return(
             <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2">
          {icon}
        </div>
        <h3 className="fs-2 text-body-emphasis">{title}</h3>
        <p>{price} Eur</p>
        <p>{description}</p>
        <a href={link} className="icon-link">
          Call to action <FaAngleRight />
        </a>
      </div>
    );
}