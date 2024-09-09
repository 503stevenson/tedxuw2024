import React, {useEffect} from "react";
import './Speakers.css';
import { speakerList } from "./speakerList";
import { Cloud, Cloud2 } from "../../assets";
import Speaker from "../Speaker/Speaker";

const Speakers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="team">
            <div className="background"></div>
            <div className="mobilebackground"></div>
            <div className="desktopclouds"></div>
            <div className="title">SPEAKERS</div>

            <div className="clouds">
                <img src={Cloud} alt="Cloud" className="cloud cloud1" />
                <img src={Cloud} alt="Cloud" className="cloud cloud2" />
                <img src={Cloud2} alt="Cloud" className="cloud cloud3" />
                <img src={Cloud2} alt="Cloud" className="cloud cloud4" />
            </div>

            <div className="speakerList">
                {speakerList.map((member, index) => (
                    <Speaker
                        alignLeft={index % 2 === 0}
                        key={index}
                        name={member.name}
                        title={member.title}
                        about={member.about}
                        image={`${member.name.split(' ').join('')}.svg`}
                        style={{marginBottom: "50px"}}
                    />
                ))}
            </div>
        </div>
    );
}

export default Speakers;