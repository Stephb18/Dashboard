import React, {Component} from 'react';
import axios from 'axios';
import Group from '../components/Groups.jsx';
import {Table} from 'react-bootstrap';


export default class InfoGroup extends Component {

    constructor(props) {
        super(props);
        this.state = { groupCollection: [] };
    }

    componentDidMount(){
      axios.get('https://hidden-atoll-66913.herokuapp.com/api/groups')
            .then(res =>{
              console.log(res.data);
              this.setState({groupCollection:res.data.groups})
            })
            .catch(function (error) {
              console.log(error);
            })
    }

    groupTable(){
      console.log(this.state.groupCollection);
      return this.state.groupCollection.map((data,i)=>{
        return <Group obj={data} key={i} />;
      });
    }
    render(){
      return(
        <Table striped bordered hover>
          <thead>
            <tr>



<th> Name</th>
              <th>Description</th>
              <th> Bank Account</th>
              <th>Contribution Frequency</th>
              <th>Total Members</th>


            </tr>
          </thead>
          <tbody>
            {this.groupTable()}
          </tbody>
        </Table>
      )
    }
}
