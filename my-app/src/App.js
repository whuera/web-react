import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import {UserService} from './service/UserService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component{
constructor(){
  super();
 this.state = {};
this.userService = new UserService();
}
componentDidMount(){
  this.userService.getAll().then(data => this.setState({user: data}))
}
render(){
  return(    
    <DataTable value={this.state.user}>
      <Column field="id" header="ID"></Column>
      <Column field="firstName" header="Nombres"></Column>
      <Column field="lastName" header="Apellidos"></Column>
    </DataTable>
  )
}

}