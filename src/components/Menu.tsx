import React, { useState } from "react"
import cn from 'classnames';

export interface MenuItem {
    key: string,
    text: string,
    url: string
}

export interface MenuProps {
    items: MenuItem[],
    onItemClicked: (url: string) => void
}


export const Menu: React.FC<MenuProps> = (props) => {

const [opened, setOpened]   = useState<boolean>(false);  
const toggle = () => {
    setOpened(!opened);
}



return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<div className="container-fluid">
  <div className={cn('navbar-brand',{'opened-brand': opened})}  
  onMouseOver={()=> setOpened(true)}
  onMouseOut={() => setOpened(false)}
  onClick={toggle} >Corso React</div>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav me-auto">
      {
          props.items.map( (item) => {
                return (
                    <li key={item.key} className="nav-item" 
                        onClick={() => props.onItemClicked(item.url)}>
                        <div className="nav-link active">{item.text}
                        <span className="visually-hidden">(current)</span>
                        </div>
                    </li>
                );
          })
      }
    </ul>
  </div>
</div>
</nav>
}

