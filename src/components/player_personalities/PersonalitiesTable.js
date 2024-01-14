import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { skillValueColored } from './functions';
import api from '../../api/dbTest';

const PersonalitiesTable = ({ mainClass }) =>  {
  const [playerPersonalities, setPlayerPersonalities] = useState([]);


  // Retrieve personalityAttributes
  const retrievePlayerPersonalities = async () => {
    const response = await api.get("/playerPersonalities");
    return response.data;
  };

  // Personal Attributes
  useEffect(() => {
    const getAllPlayerPersonalities = async () => {
      const allPlayerPersonalities = await retrievePlayerPersonalities();
      if (allPlayerPersonalities) setPlayerPersonalities(allPlayerPersonalities);
    };

    getAllPlayerPersonalities();
  },[]);


  const personalityAttributes = playerPersonalities.personalityAttributes || {};
  const personalities = playerPersonalities.personalities || {};

  const columns = [
    { field: 'index', header: 'Karakter', sortable: true },
    ...Object.keys(personalityAttributes).map((attribute) => ({
      field: attribute,
      header: attribute,
      sortable: true,
    })),
  ];

  const tableData = Object.keys(personalities).map((index) => {
    const item = personalities[index];
    return {
      index,
      ...item,
    };
  });

  return (
    <div className={`${mainClass}__table`} id="table">
      <DataTable value={tableData}
                 sortMode="multiple"
                 rowHover
                 selectionMode="single"
                 dataKey="index"
      >
        {columns.map((col, index) => (
          <Column
            key={index}
            field={col.field}
            header={col.header}
            sortable={col.sortable}
            body={(rowData) =>
              col.field === 'index' ? (
                <span>{rowData[col.field]}</span>
              ) : (
                <Link
                  to={`/player-personalities#${personalityAttributes[col.field]}`}
                  className="link-in-table"
                >
                  {skillValueColored(rowData[col.field], rowData, col.field)}
                </Link>
              )
            }
          />
        ))}
      </DataTable>
    </div>
  );
};

export default PersonalitiesTable;