import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { createDefensiveTeam, updateDefensiveTeam, getDefensiveTeam } from '../../API/DefensivePlayerData';
import { useAuth } from '../../utils/context/authContext';

const intialState = {
  first_name: '',
  last_name: '',
  image: '',
  weight: '',
  height: '',
  position: '',
};

function DefensivePlayerForm({ obj }) {
  const [formInput, setFormInput] = useState(intialState);
  const [players, setPlayers] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
    getDefensiveTeam(user.uid).then(setPlayers);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.firebaseKey) {
      updateDefensiveTeam(formInput).then(() => router.push('/DefensiveTeam'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createDefensiveTeam(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateDefensiveTeam(patchPayload).then(() => {
          router.push('/DefensiveTeam');
        });
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>first name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player first name"
            name="first_name"
            value={formInput.first_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player last name"
            name="last_name"
            value={formInput.last_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter player image"
            name="image"
            value={formInput.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>weight</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player weight"
            name="weight"
            value={formInput.weight}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>height</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player height"
            name="height"
            value={formInput.height}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player position"
            name="position"
            value={formInput.position}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {obj.firebaseKey ? 'Update player' : 'Submit player'}
        </Button>
      </Form>
    </>
  );
}

DefensivePlayerForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    image: PropTypes.string,
    last_name: PropTypes.string,
    weight: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

DefensivePlayerForm.defaultProps = {
  obj: intialState,
};

export default DefensivePlayerForm;
