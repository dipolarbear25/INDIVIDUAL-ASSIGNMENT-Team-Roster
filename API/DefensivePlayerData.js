import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getDefensiveTeam = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/defensiveteam.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: DELETE Team
const deleteDefensiveTeam = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/defensiveteam/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// TODO: GET SINGLE Team
const getSingleDefensiveTeam = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/defensiveteam/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE Team
const createDefensiveTeam = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/defensiveteam.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE Team
const updateDefensiveTeam = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/defensiveteam/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getDefensivePlayerDetails = async (firebaseKey) => {
  const player = await getSingleDefensiveTeam(firebaseKey);

  return { ...player };
};

export {
  getDefensiveTeam,
  createDefensiveTeam,
  deleteDefensiveTeam,
  getSingleDefensiveTeam,
  updateDefensiveTeam,
  getDefensivePlayerDetails
};
