import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

console.error('your baseUrl is ...', baseUrl + '/roster.json');

const getRosterByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/roster.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allRosterObject = result.data;
      console.error('result.data displays? ', allRosterObject);
      const roster = [];
      if (allRosterObject !== null) {
        Object.keys(allRosterObject).forEach((rosterId) => {
          const newRoster = allRosterObject[rosterId];
          newRoster.id = rosterId;
          roster.push(newRoster);
          console.error('this is inside your getRosterByUid in rosterData');
        });
      }
      resolve(roster);
    })
    .catch((err) => reject(err));
});

export default { getRosterByUid };
