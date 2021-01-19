import React from 'react';
import "./App.css";
import { Component, useEffect, useState } from "react";
import { UserService } from "./service/UserService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';

import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
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
    return (
      <Panel header="Header" toggleable>
      <Card title="Call API" subTitle="Data From Microservices" >
        <DataTable value={this.state.user}>
          <Column field="id" header="ID"></Column>
          <Column field="firstName" header="Nombres"></Column>
          <Column field="lastName" header="Apellidos"></Column>
        </DataTable>
      </Card>
      </Panel>
    );
  }
}
