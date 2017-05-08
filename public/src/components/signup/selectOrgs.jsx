
import React from 'react'

const SelectInput = ({options,value,change}) => {
  if(!options[0]){
    return <div>Loading...</div>;
  }
  const orgOptions = options.map((orgs)=> {
    return(
    <option key={orgs.org_id} value={orgs.org_id}>{orgs.org_name}</option>
    );
  });
  return (
    <div className='form-group'>
      <select
        value={value}
        className='form-control'
        onChange={change}
        >
        <option
          disabled='disabled'
          >
          Organization
        </option>
        {orgOptions}
      </select>
    </div>
  )

}




export default SelectInput;
