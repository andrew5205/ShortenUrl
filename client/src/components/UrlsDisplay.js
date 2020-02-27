import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../appStyles.module.css';

import {Link, navigate} from '@reach/router';


const Urls = () => {

    const [urls, setUrls] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/api/urls')
            .then(response => setUrls(response.data))
            .catch(console.log);
    }, []);

    function handleDelete(num) {
        axios.delete('http://localhost:4500/api/urls/delete/' + num)
            .then(() => navigate('/'))
            .then(() => navigate('/urls/all'))
    }

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h3 >History</h3>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <table>
                    <thead>
                        <tr>
                            <th>Long</th>
                            <th>Short</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls.map((url) => (
                            <tr key={url._id}>  
                                <td>
                                    {url.longUrl}
                                </td>
                                <td>
                                    {url.shortUrl}
                                </td>
                                <td>
                                    {url._id}
                                </td>
                                <td>
                                    <button className={styles.btnD} onClick={() => handleDelete(url._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Urls;