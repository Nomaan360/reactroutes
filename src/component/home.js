// Filename - component/home.js

import React from "react";
import Dataarray from './Dataarray';

function Home() {
    let dataitem=[
        {
            iname:"sports",
            desc:"sports",
            img:"https://source.unsplash.com/2400x1300/?sports"
        },
        {
            iname:"computer",
            desc:"computer",
            img:"https://source.unsplash.com/2400x1300/?computer"
        },
        {
            iname:"Quote",
            desc:"Quote",
            img:"https://source.unsplash.com/2400x1300/?motivation"
        }
    ]

    return(
        <>
            <Dataarray dataitem={dataitem}/>
        </>
    );
}

export default Home;