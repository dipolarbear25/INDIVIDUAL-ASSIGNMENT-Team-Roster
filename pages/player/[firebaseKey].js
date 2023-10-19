import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getPlayerDetails } from '../../API/PlayerData';
import PlayerCard from '../../components/PlayerCard';

export default function ViewPlayer() {
  const [playerDetails, setPlayerDetails] = useState({});

  // TODO: Call Router Hook
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  const getADetails = () => {
    getPlayerDetails(firebaseKey).then(setPlayerDetails);
  };

  useEffect(() => {
    getADetails();
  });

  return (
    <div>{playerDetails.books?.map((book) => (
      <PlayerCard key={book.firebaseKey} bookObj={book} onUpdate={getADetails} />
    ))}
    </div>
  );
}
