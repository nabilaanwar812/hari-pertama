import React, { Component } from 'react';
import './App.css';
import Nama from './component/Nama';
import Alamat from './component/Alamat';
import Ttl from './component/Ttl';
import Jeniskelamin from './component/Jeniskelamin';
import Jumlahsaudara from './component/Jumlahsaudara';
import Namaayah from './component/Namaayah';
import Namaibu from './component/Namaibu';
import Asalsekolah from './component/Asalsekolah';
import Hobi from './component/Hobi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nama />
        <Alamat />
        <Ttl />
        <Jeniskelamin />
        <Jumlahsaudara />
        <Namaayah />
        <Namaibu />
        <Asalsekolah />
        <Hobi />
      </div>
    );
  }
}

export default App;
