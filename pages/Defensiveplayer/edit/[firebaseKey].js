import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDefensiveTeam } from '../../../API/DefensivePlayerData';
import PlayerForm from '../../../components/forms/PlayerForm';

export default function EditPlayer() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleDefensiveTeam(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<PlayerForm obj={editItem} />);
}
