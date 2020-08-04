import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const Home = () => {

    return (
        <div>
            <h1>Fishing Journal</h1>
          <div className="centerContent">
          <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed sourceType="profile" userId={1071567792} options={{height: 400}} />
          </div>
          </div>
          <div className="centerContent">
          <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed sourceType="profile" userId={66430922} options={{height: 400}} />
          </div>
          </div>
          <div className="centerContent">
          <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed sourceType="profile" userId={21713042} options={{height: 400}} />
          </div>
          </div>
        </div>


    )
}

export default Home;
