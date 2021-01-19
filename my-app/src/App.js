import React from "react";
import "./App.css";
import { Component, useEffect, useState } from "react";
import { UserService } from "./service/UserService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import { Button } from 'primereact/button';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";



export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.userService = new UserService();
  }
  componentDidMount() {
    this.userService.getAll().then((data) => this.setState({ user: data }));    
  }
  render() {
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
    return (
      <div>
        <div className="card">
          <DataTable value={this.state.user}
                    paginator rows={5}                    
                    header="Header" footer="Footer" className="p-datatable-gridlines" style={{width: '80%', margin: '0 auto', marginTop: '20px'}}>
            <Column field="id" header="ID"></Column>
            <Column field="firstName" header="Nombres"></Column>
            <Column field="lastName" header="Apellidos"></Column>
          </DataTable>
        </div>
      </div>
    );
  }
}
