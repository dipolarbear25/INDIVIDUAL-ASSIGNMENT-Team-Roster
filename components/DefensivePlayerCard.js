import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteDefensiveTeam } from '../API/DefensivePlayerData';

function DefensivePlayerCard({ playerObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisPlayer = () => {
    if (window.confirm(`Would you like to delete ${playerObj.first_name}?`)) {
      deleteDefensiveTeam(playerObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{playerObj.first_name} {playerObj.last_name}</Card.Title>
        <p className="card-text bold">Position: {playerObj.position}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/Defensiveplayer/${playerObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/Defensiveplayer/edit/${playerObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisPlayer} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

DefensivePlayerCard.propTypes = {
  playerObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
    weight: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DefensivePlayerCard;
