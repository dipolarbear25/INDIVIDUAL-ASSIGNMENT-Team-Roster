import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getDefensivePlayerDetails } from '../../API/DefensivePlayerData';

export default function ViewDefensivePlayer() {
  const [playerDetails, setPlayerDetails] = useState({});

  // TODO: Call Router Hook
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  const getADetails = () => {
    getDefensivePlayerDetails(firebaseKey).then(setPlayerDetails);
  };

  useEffect(() => {
    getADetails();
  });

  return (
    <>
      <div className="viewTxt">
        <div className="d-flex flex-column">
          <img src={playerDetails.image} alt={playerDetails.first_name} style={{ width: '300px' }} />
        </div>
        <h5>
          Name: {playerDetails.first_name} {playerDetails.last_name}
          <br /> position: {playerDetails.position}
        </h5>
        <h5>Height: {playerDetails.height}</h5>
        <h5>weight: {playerDetails.weight}</h5>
      </div>
    </>
  );
}
