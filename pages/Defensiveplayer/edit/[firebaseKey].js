import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDefensiveTeam } from '../../../API/DefensivePlayerData';
import DefensivePlayerForm from '../../../components/forms/DefensivePlayerForm';

export default function EditDefensivePlayer() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleDefensiveTeam(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<DefensivePlayerForm obj={editItem} />);
}
