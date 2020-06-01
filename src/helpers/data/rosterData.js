import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// console.error('your baseUrl is ...', baseUrl + '/roster.json');

const getRosterByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/roster.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allRosterObject = result.data;
      const roster = [];
      if (allRosterObject !== null) {
        Object.keys(allRosterObject).forEach((rosterId) => {
          const newRoster = allRosterObject[rosterId];
          newRoster.id = rosterId;
          roster.push(newRoster);
        });
      }
      resolve(roster);
    })
    .catch((err) => reject(err));
});


const deletePlayer = (rosterId) => axios.delete(`${baseUrl}/roster/${rosterId}.json`); // this playerId might cause issues

const savePlayer = (newPlayer) => axios.post(`${baseUrl}/roster.json`, newPlayer);

const updatePlayer = (playerId, updatedPlayer) => axios.put(`${baseUrl}/roster/${playerId}.json`, updatedPlayer);

export default {
  getRosterByUid,
  deletePlayer,
  savePlayer,
  updatePlayer,
};
