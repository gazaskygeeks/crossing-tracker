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
    <div className='form-group'>
      <label>{label}</label>
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
    </div>
  )

}




export default SelectLocations;
