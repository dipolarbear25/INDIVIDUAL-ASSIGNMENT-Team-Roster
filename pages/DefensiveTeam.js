/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getDefensiveTeam } from '../API/DefensivePlayerData';
import { useAuth } from '../utils/context/authContext';
import DefensivePlayerCard from '../components/DefensivePlayerCard';

function ShowDefensiveTeam() {
  // TODO: Set a state for books
  const [Team, setTeam] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the Team
  const getAllTheTeam = () => {
    getDefensiveTeam(user.uid).then(setTeam);
  };

  // TODO: make the call to the API to get all the Team on component render
  useEffect(() => {
    getAllTheTeam();
  }, []);

  return (
    <div className="text-center my-4">
      <h1>Tennessee Titans Defensive lineup</h1>
      <Link href="/Defensiveplayer/new" passHref>
        <Button>Add A Player</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over Team here using BookCard component */}
        {Team.map((player) => (
          <DefensivePlayerCard key={player.firebaseKey} playerObj={player} onUpdate={getAllTheTeam} />
        ))}
      </div>
    </div>
  );
}

export default ShowDefensiveTeam;
