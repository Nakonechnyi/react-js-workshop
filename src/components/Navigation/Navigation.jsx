import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import langContext from "../../Providers/langContext";
import './Navigation.css'

export function Navigation() {
    const lang = useContext(langContext);
    // TODO: it's not an langContextObj on PostForm page yet
    // console.log("lang : " + JSON.stringify(lang)); 
    // const [lang, setLang] = useState('en');
    // const langContextObj = {
    //     value: lang,
    //     setLang: setLang,
    // }
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        console.log(`Language changed to ${selectedLanguage}`);
        lang.setLang(selectedLanguage);
      };

    return (
        <div id="navbar">
            <nav>
                <ul>
                    <li >
                        <Link to="/" >PostDashboard</Link>
                    </li>
                    <li >
                        <Link to="/post/create" >PostForm</Link>
                    </li>
                
                    <li className="language">
                        <select onChange={handleLanguageChange}>
                            <option value="en">English</option>
                            <option value="ua">Ukrainian</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </div>
    );
}