import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Card from '../components/Card';
import ecommerce from '../assets/ecommerce.png';
import geography from '../assets/geography.png';
import music from '../assets/music.png';
import password from '../assets/password.png';
import team from '../assets/team.png';
import trails from '../assets/trails.png';

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TrailFinder',
                    subTitle: 'JavaScript and CSS(Bulma)',
                    imgSrc: trails,
                    deployedAppLink: 'https://sdseney508.github.io/Trail-Finder/',
                    gitHubRepoLink: 'https://github.com/sdseney508/Trail-Finder',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Practice Room',
                    subTitle: 'JavaScript with SQL and Handlebars',
                    imgSrc: music,
                    deployedAppLink: 'https://immense-savannah-04794.herokuapp.com/',
                    gitHubRepoLink: 'https://github.com/AllDeus/PracticeRoom',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Geography Quiz Game',
                    subTitle: 'Python',
                    imgSrc: geography,
                    gitHubRepoLink: 'https://github.com/ottercreektourism/Geography-Game',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Social Network API (Back-End)',
                    subTitle: 'JavaScript with Express',
                    imgSrc: password,
                    gitHubRepoLink: 'https://github.com/ottercreektourism/social-network-api',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Team Profile Generator (Back-End)',
                    subTitle: 'JavaScript with Inquirer and Jest',
                    imgSrc: team,
                    gitHubRepoLink: 'https://github.com/ottercreektourism/Team-Profile_Generator',
                    selected: false
                },
                {
                    id: 5,
                    title: 'E-Commerce Back-End',
                    subTitle: 'Javascript with Express and SQL',
                    imgSrc: ecommerce,
                    gitHubRepoLink: 'https://github.com/ottercreektourism/E-Commerce-Back-End',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });


        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card className="col-3" item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <>
            <div>
                <p>Click the images to reveal viewing options.</p>
            </div>
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
            </>
        );
    }


}

export default Carousel;