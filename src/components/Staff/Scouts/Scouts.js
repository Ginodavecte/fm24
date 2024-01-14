import React, { useEffect, useState } from 'react'
import api from '../../../api/dbTest';

const Scouts = () => {
  const [scoutsSkillSet, setScoutsSkillSet] = useState([]);

  const retrieveScoutsSkillSet = async() => {
    const response = await api.get("/scouts");
    return response.data;
  };

  useEffect(() => {
    const getScoutsSkillSet = async () => {
      const skillSetObject = await retrieveScoutsSkillSet();
      if (skillSetObject) setScoutsSkillSet(skillSetObject);
    };

    getScoutsSkillSet();
  }, []);

  console.log('scoutsSkillSet ->', scoutsSkillSet)

  return (
    <div className="scouts" id="scouts">
      <div className="title">
        <h4>Scouts</h4>
        {/*<NavigationDescriptions />*/}
      </div>
      <div className="description">
        Belangrijke Eigenschappen
      </div>
      <div className="table">
        <table>
          <thead>
          <tr>
            <th>Eigenschappen</th>
            <th>Omschrijving</th>
          </tr>
          </thead>
          <tbody>
          {/*{Object.keys(scoutsSkillSet).map(index => */}
          {/*  return <tr><td></td></tr>*/}
          {/*)}*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scouts;