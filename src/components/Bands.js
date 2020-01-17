import React from 'react';
import Band from './Band';

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} id={band.id} name={band.name} deleteBand={props.deleteBand}/>)

  return (
    <ul>
      {bands}
    </ul>
  );
};

export default Bands;