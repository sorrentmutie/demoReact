import { useState } from "react"
import cn from 'classnames';

export const Menu = () => {

const [opened, setOpened]   = useState<boolean>(false);  
const toggle = () => {
    setOpened(!opened);
}
// const cls = opened ? 'navbar-brand opened-brand': 'navbar-brand';
// const cls = cn('navbar-brand',{'opened-brand': opened});

console.log('render: ' + opened);

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
      <li className="nav-item">
        <div className="nav-link active">Home
          <span className="visually-hidden">(current)</span>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Features</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Pricing</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">About</div>
      </li>
      <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</div>
        <div className="dropdown-menu">
          <div className="dropdown-item">Action</div>
          <div className="dropdown-item" >Another action</div>
          <div className="dropdown-item" >Something else here</div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item" >Separated link</div>
        </div>
      </li>
    </ul>
  </div>
</div>
</nav>
}

