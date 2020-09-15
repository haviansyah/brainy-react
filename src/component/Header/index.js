import React, { useEffect, useState, useCallback} from 'react';

import { NavLink, Link } from 'react-router-dom'
import "./header.scss"
import route from '../../pages/route'

export default function Header(){

    const [mini, setMini] = useState(false);
    const [navWhite, setNavWhite] = useState(false);
    const [flag, setFlag] = useState(true)

    useEffect(()=>{
        function onScroll(ev){
            const pageOffset = window.pageYOffset;
            setMini(pageOffset > 0);
        }
        window.onscroll = onScroll;
        
    },[])

    const clickToggle = useCallback(e=>{
        setNavWhite(!navWhite);
        setFlag(false);
        setTimeout(() => {
            setFlag(true);
        }, 500);
        console.log(e.currentTarget.classList.contains("collapsed"));
    },[navWhite])
    return (
        <header className={"br-navbar " + (mini ? "br-navbar-mini" : "") }>
            <nav className={"navbar navbar-expand-lg fixed-top "+(navWhite ? "navWhite" : "" )}>
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="images/logo.png" alt=""/></Link>
                    <button onClick={flag ? clickToggle : null} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navCol" aria-controls="navCol" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navCol">
                        <ul className="navbar-nav ml-auto">
                            {
                                route.map(x=> <li key={x.name}  className="nav-item">
                                <NavLink exact={x.exact} to={x.to}  className="nav-link" activeClassName="active">{x.name}</NavLink>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}