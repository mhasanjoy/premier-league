import './TeamDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faCalendarAlt, faTwitter, faFacebook, faYoutube);

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeam(data.teams[0]));
    }, [idTeam]);

    const { strStadiumThumb, strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strYoutube, strTwitter } = team;
    const styleTeamBanner = {
        height: "350px",
        backgroundImage: `url(${strStadiumThumb})`,
        backgroundColor: "rgba(137, 43, 226, 1)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    };

    return (
        <>
            <div style={styleTeamBanner} className="team-banner d-flex justify-content-center align-items-center">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="team-container">
                <div className="container pt-4 pb-5">
                    <div className="team-info row bg-primary ">
                        <div className="col-md-7 d-flex align-items-center px-5">
                            <div>
                                <h2 className="pb-3">{strTeam}</h2>
                                <h5><FontAwesomeIcon className="info-icon" icon={faCalendarAlt} />Founded: {intFormedYear}</h5>
                                <h5><FontAwesomeIcon className="info-icon" icon={faFlag} />Country: {strCountry}</h5>
                                <h5><FontAwesomeIcon className="info-icon" icon={faFutbol} />Sport Type: {strSport}</h5>
                                <h5><FontAwesomeIcon className="info-icon" icon={faMars} />Gender: {strGender}</h5>
                            </div>
                        </div>
                        <div className="col-md-5">
                            {
                                strGender === "Male" ? <img className="w-100 pt-3 pb-3" src={maleImage} alt="" /> : <img className="w-100 pt-3 pb-3" src={femaleImage} alt="" />
                            }
                        </div>
                    </div>
                    <div className="mt-3 pt-3">
                        <p className="club-description">{strDescriptionEN}</p>
                    </div>
                    <div className="d-flex justify-content-center mb-5 pt-4 pb-5">
                        <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon twitter-icon" icon={['fab', 'twitter']} size="3x" /></a>
                        <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon facebook-icon" icon={['fab', 'facebook']} size="3x" /></a>
                        <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon youtube-icon" icon={['fab', 'youtube']} size="3x" /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetail;