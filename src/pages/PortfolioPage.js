import React from 'react';
import Jumbo from '../components/Jumbo';
import Carousel from '../components/Carousel';

function PortfolioPage(props) {
    return(
        <div>
            {/* subTitle={props.subTitle} textContent={props.textContent} */}
            <Jumbo title={props.title} />
            {/* <Jumbo title={props.subTitle}/> */}
            <Carousel/>
        </div>
    )
}



export default PortfolioPage;