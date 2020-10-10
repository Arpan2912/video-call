import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';

export class data extends Component {
    render() {
        const name = this.props.de_Data.name
        const cost = this.props.de_Data.cost
        const star = this.props.de_Data.star
        let menuItems = [];
        for (var i = 0; i <star; i++) {
            menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
        }
        for (var k = 0; k <5-star; k++) {
            menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
        }

        return (            
            <div>                
                <div className="justify-align-center de-data-wrapper mb-4">
                    <h2>{name}</h2>
                    <h3>$ {cost} USD</h3>
                    <p>posted by: Davey Jones</p>
                    <div className="review-star-wrapper">
                        {menuItems}  
                        <span><span>52</span> Reviews</span>
                    </div>
                </div>
                <div>
                    <div className='data-text-wrapper'>
                        <h4 className="mb-4">Lorem ipsum dolor sit amet, proin elit. Aliquam vel leopulvinar, laoreet orci eu, dictum dolor.</h4>
                        <h4 className="mb-4">Lorem ipsum dolor sit amet, proin elit. Aliquam vel leopulvinar, laoreet orci eu, dictum dolor.</h4>
                        <h5>Lorem ipsum</h5>
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>leopulvinar</li>
                            <li>gravidah</li>
                            <li>Lorem ipsum</li>
                            <li>leopulvinar</li>
                            <li>gravidah</li>                                
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default data
