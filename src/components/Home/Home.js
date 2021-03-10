import '../Home/Home.css';
import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams));
    }, []);

    return (
        <>
            <div className="home-banner d-flex justify-content-center align-items-center">
                <h1 className="home-title">Premier League</h1>
            </div>
            <div className="teams-container">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        {
                            teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;