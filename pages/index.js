/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  return (
    <div className="text-center my-4">
      <h1>
        Hello {user.displayName}!
      </h1>
      <Link href="/Team" passHref>
        <Button>View Offensive Line</Button>
      </Link>
      <Link href="/DefensiveTeam" passHref>
        <Button>View Defensive Line</Button>
      </Link>
      <br />
      <br />
      <Link href="/player/new" passHref>
        <Button>Create a Player</Button>
      </Link>
    </div>
  );
}

export default Home;
