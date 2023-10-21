/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getTeam } from '../API/PlayerData';
import { useAuth } from '../utils/context/authContext';
import PlayerCard from '../components/PlayerCard';

function ShowTeam() {
  // TODO: Set a state for books
  const [Team, setTeam] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the Team
  const getAllTheTeam = () => {
    getTeam(user.uid).then(setTeam);
  };

  // TODO: make the call to the API to get all the Team on component render
  useEffect(() => {
    getAllTheTeam();
  }, []);

  return (
    <div className="text-center my-4">
      <h1>Tennessee Titans Offensive lineup</h1>
      <Link href="/player/new" passHref>
        <Button>Add A Player</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over Team here using BookCard component */}
        {Team.map((player) => (
          <PlayerCard key={player.firebaseKey} playerObj={player} onUpdate={getAllTheTeam} />
        ))}
      </div>
    </div>
  );
}

export default ShowTeam;
