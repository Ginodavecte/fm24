import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import db from '../../../database/db.json';

const ScoutsTable = ( {mainClass} ) => {
  let [scoutsSkillSet, setScoutsSkillSet] = useState([]);


  useEffect(() => {
    const getScoutsSkillSet = async () => {
      const skillSetObject = db.scouts;
      if (skillSetObject) setScoutsSkillSet(skillSetObject);
    };

    getScoutsSkillSet();
  }, []);

  let updatedScoutsSkillSet = scoutsSkillSet;

  if (scoutsSkillSet && Object.keys(scoutsSkillSet).length > 0) {
    updatedScoutsSkillSet = scoutsSkillSet.skillSet || scoutsSkillSet;
  }

  const columns = [
    { field: 'key', header: 'Eigenschappen', sortable: true },
    { field: 'value', header: 'Omschrijving', sortable: true },
  ];

  const dataRows = Object.keys(updatedScoutsSkillSet).map((key) => ({
    key,
    value: typeof updatedScoutsSkillSet[key] === 'object'
      ? JSON.stringify(updatedScoutsSkillSet[key])
      : String(updatedScoutsSkillSet[key]),
  }));


  return (
    <div className={`${mainClass}__table`}>
      <h3>Overzicht eigenschappen</h3>
      <div className="datatable-responsive">
        <DataTable  value={dataRows}
                    sortMode={"multiple"}
                    rowHover
                    selectionMode="single">
          {columns.map((col) => (
            <Column key={col.field}
                    field={col.field}
                    header={col.header}
                    sortable={col.sortable} />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default ScoutsTable;