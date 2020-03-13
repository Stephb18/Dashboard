import React from 'react';

import {
  Link
} from 'react-router-dom';



const Group=(props) =>{
  return(

    <tr>
      <th>{props.obj.name}</th>
      <th>{props.obj.description}</th>
      <th>{props.obj.bankAccount}</th>
      <th>{props.obj.frequency}</th>
      <th>{props.obj.members.length}</th>
      <Link to='/groupStatement'>
      <th>{'statement'}</th>
      </Link>


    </tr>

)
}
export default Group;
