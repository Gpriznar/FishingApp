import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Home.css';


const Home = () => {

    return (
        <div className='home-page'>
            <h1>Fishing Journal</h1>
            <div className='tweet-flex'>
                <div className="embeded-tweet">
                    <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed sourceType="profile" userId={1071567792} options={{ height: 400 }} />
                    </div>
                </div>
                <div className="embeded-tweet">
                    <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed sourceType="profile" userId={66430922} options={{ height: 400 }} />
                    </div>
                </div>
                <div className="embeded-tweet">
                    <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed sourceType="profile" userId={21713042} options={{ height: 400 }} />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Home;
