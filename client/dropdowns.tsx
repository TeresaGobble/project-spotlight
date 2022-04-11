import React, { useState, useEffect } from 'react';
import axios, {AxiosResponse} from 'axios';
import {Crime, getAllCrimes, getSearchedCrime} from '../database/queries';
import './index.css';
import { get } from 'http';

const Dropdowns = () => {

  const crimes: object[] = [];


  // const [latitude, setLatitude] = useState(crimes[0].latitude);
  // const [primaryType, setPrimaryType] = useState(crimes[0].primary_type);
  // const [description, setDescription] = useState(crimes[0].description);
  // const [date, setData] = useState(crimes[0].date);

  useEffect(() => {
    axios.get<Crime>('http://localhost:8081/crimes')
    .then((res: any) => {
      // console.log('RESPONSE??', res.data);
    })
    .catch((err: any) => {
      console.log('U FAILED', err);
    })
  })


  return (
  <div>
    <select>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
    <select>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </div>
  )
}

export default Dropdowns;