import React, {useEffect, useState} from 'react';
import styles from '../appStyles.module.css';

import url from "../url.png";
import axios from 'axios';

export default () => {

        const [links, setLinks] = useState([]);

        // tracker for the form input
        const [longUrl, setLongUrl] = useState('');

        // without event.preventDefult, whatever from the input will shows up in url
        // input some text 
        // http://localhost:3000
        function handleSubmit(event) {
            event.preventDefault();
            // console.log(inputUrl);
            // console.log(inputUrl.length);


            // communicate with DB
            axios.post('http://localhost:4500/api/urls', {longUrl})
            // .then(console.log)   // check data structure 
            .then((res) => 
            
            {
                console.log(longUrl)
                console.log(res)
                setLinks([
                    ...links,
                    {
                        longUrl: longUrl,              // form submission
                        shortUrl: res.data.shortUrl,    //from the promise of the post to DB
                    }
                ])},
            )

            // .then(console.log)
            // .then((res) => {console.log(res)})
            // .then(console.log(inputUrl))
            

            // claer the box after form submitted input
            setLongUrl('');
            
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Make it easy to remember</h3>
                <input
                    className={styles.inputBox}
                    name="longUrl"
                    value={longUrl}
                    onChange={ (event) => setLongUrl(event.target.value) }
                />{""}
                <button className={styles.btnOut}>Hover Out</button>
            </form>

            {links.map((link, i) => (
                <div key={i}>
                    <h3 className={styles.textDisplay}>{link.longUrl}</h3>  {/* link.longUrl => from setLinks */}
                    <h3 className={styles.textDisplay}>{link.shortUrl}</h3>  {/* link.shortUrl => from setLinks */}

                    {/* onClick for img */}
                    <a href="../url.png" download="urlShort">
                        <img src={url} alt="link" width="20" height="20"></img>
                    </a>
                </div>
            ))}
        </div>
    )
}



