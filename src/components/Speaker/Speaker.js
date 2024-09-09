import React from 'react';
import './Speaker.css'

const Speaker = ({ name, title, about, alignLeft, image }) => {
    return (
        <>
            <div className="speakerbig">
                {alignLeft &&
                    <div className="image-container">
                        <img className="profile-pic" src={require(`../Speakers/photos/${image}`)} alt={name} />
                    </div>
                }
                <div className="details">
                    <h3 className="name">
                        {name} 
                    </h3>
                    <p className="position">{title}</p>
                    <p className='speakerabout'>{about}</p>
                </div>
                {!alignLeft &&
                    <div className="image-container">
                        <img className="profile-pic" src={require(`../Speakers/photos/${image}`)} alt={name} />
                    </div>
                }
            </div>
            <div className="speakersmall">
                <div className="image-container">
                    <img className="profile-pic" src={require(`../Speakers/photos/${image}`)} alt={name} />
                </div>
                <h3 className="name">
                    {name} 
                </h3>
                <p className="position">{title}</p>
                <p className='speakerabout'>{about}</p>
            </div>
        </>
    );
};

export default Speaker;
