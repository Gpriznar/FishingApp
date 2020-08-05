import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Home.css';


const Home = () => {

    return (
        <div className='home-page'>
            <h1>Fishing Journal</h1>
            <div className='description'>
                <p> Fishing Journal is an application designed to help fisherman track their catches using geolocation data. Catalog and view your caught fish using our "Add Fish" and "View All Fish" features. Make sure to utilize the Weather search to get a three day forecast so you can better plan your fishing trip!</p>
            </div>
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
