import React from 'react'

const SelectLocations = ({options,value,change,label}) => {
  if(!options[0]){
    return <div>Loading...</div>;
  }
  const locationOptions = options.map((locations)=> {
    return(
    <option
      key={locations.location_id}
      value={locations.location_id}
      >
      {locations.location_name}
    </option>
    );
  });
  return (
    <select
      value={value}
      className='form-control'
      onChange={change}
      >
      <option
        disabled='disabled'
        >
        {label}
      </option>
      {locationOptions}
    </select>
  )

}




export default SelectLocations;
