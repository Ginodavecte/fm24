import React from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { skillValueColored } from './functions';

const PersonalitiesTable = ({ mainClass, playerPersonalities }) =>  {
  // Init variables
  const personalityAttributes = playerPersonalities.personalityAttributes || {};
  const personalities = playerPersonalities.personalities || {};

  const columns = [
    { field: 'index', header: 'Karakter', sortable: true },
    ...Object.keys(personalityAttributes).map((attribute) => ({
      field: attribute,
      header: personalityAttributes[attribute].title,
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
      <div className={`${mainClass}__table-introduction`}>
        <h3>Tabel Karakters</h3>
        <div className={`${mainClass}__table-introduction-text`}>
          Een overzicht van alle karakters en hun eigenschappen. Klik op de eigenschap waarden om meer over de eigenschap te weten te komen.
          Hoe hoger hoe beter, dit geldt voor elke eigenschap die er staat. Los van de vastberadenheid en leiderschap zijn de eigenschappen verborgen eigenschappen.
          Hierdoor kun je deze eigenschappen niet zien in het spel. De eigenschappen zijn wel van invloed op het gedrag van de speler.
          Let daarom goed op de aankopen die je doet en de spelers die je in je team hebt.
        </div>
      </div>
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
                  to={`/player-personalities#${personalityAttributes[col.field].slug}`}
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