import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const TraitsTable = ( {mainClass, traits} ) => {
  mainClass = `${mainClass}__content`;

  const columns = [
    { field: 'trait', header: 'Trait', sortable: true },
    { field: 'omschrijving', header: 'Omschrijving', sortable: true },
    { field: 'posities', header: 'Posities', sortable: true}
  ];

  const formatDescriptions = (descriptions) => {
    return (
      <ul>
        {
          descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))
        }
      </ul>
    );
  };

  const formattedData = traits.map((traitObj) => {
    const traitKey = Object.keys(traitObj)[0];
    const traitValue = formatDescriptions(traitObj[traitKey].description);
    const traitPosition = traitObj[traitKey].position ?? '-';
    return { trait: traitKey.replaceAll('_', ' '), omschrijving: traitValue, posities: traitPosition};
  });


  return (
    <div className={`${mainClass}`}>
      <div className={`${mainClass}--introduction`}>
        <h3>Overzicht Traits</h3>
        <p>Hier een overzicht van de traits. Nog niet alle traits staan er tussen.</p>
      </div>
      <div className={`${mainClass}--table`}>
        <DataTable value={formattedData}>
          {
            columns.map((col) => (
              <Column key={col.field} field={col.field} header={col.header} sortable={col.sortable} />
            ))
          }
        </DataTable>
      </div>
    </div>
  );
};

export default TraitsTable;