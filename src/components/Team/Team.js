import React from 'react';
import './Team.css';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const { idTeam, strTeamBadge, strTeam, strSport } = props.team;
    const history = useHistory();
    const handleExplore = (idTeam) => {
        history.push(`/team/${idTeam}`);
    };

    return (
        <div className="col-md-6 col-xl-4">
            <div className="card mb-5 text-center align-items-center">
                <img src={strTeamBadge} className="card-img-top w-50 pt-5" alt="" />
                <div className="card-body">
                    <h3 className="card-title">{strTeam}</h3>
                    <p className="card-text">Sports type: {strSport}</p>
                    <button onClick={() => handleExplore(idTeam)} className="explore-btn btn-primary">Explore<FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Team;