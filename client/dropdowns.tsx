import React, { useState, useEffect } from 'react';
import axios, {AxiosResponse} from 'axios';
import {Crime, getAllCrimes, getSearchedCrime} from '../database/queries';
import './index.css';
import { get } from 'http';

const Dropdowns = () => {

  const crimes: any[] = [];

  const [latitude, setLatitude] = useState(crimes);
  const [primaryType, setPrimaryType] = useState(crimes[0][0].primaryType);
  const [description, setDescription] = useState(crimes[0][0].description);
  const [date, setData] = useState(crimes[0][0].date);

  useEffect(() => {
    axios.get<Crime>('http://localhost:8081/crimes')
    .then((res: any) => {
      // console.log('RESPONSE??', res.data);
      crimes.push(res.data);
      console.log('CRIMES ARRAY', crimes);
    })
    // add another then block for states
      // set the states using onChange and onSubmit (event.target.value)
    // meow
    .catch((err: any) => {
      console.log('U FAILED', err);
    })
  })

  // console.log('LATITUDE', latitude);
    // create a function that handles submit


  return (
  <div>
    <select>
      <option value="arson">ARSON</option>
      <option value="assault">ASSAULT</option>
      <option value="homicide">HOMICIDE</option>
      <option value="battery">BATTERY</option>
      <option value="burglary">BURGLARY</option>
      <option value="concealed carry license violation">CONCEALED CARRY LICENSE VIOLATION</option>
      <option value="criminal abortion">CRIMINAL ABORTION</option>
      <option value="criminal damage">CRIMINAL DAMAGE</option>
      <option value="criminal sexual assault">CRIMINAL SEXUAL ASSAULT</option>
      <option value="criminal trespass">CRIMINAL TRESPASS</option>
      <option value="deceptive practice">DECEPTIVE PRACTICE</option>
      <option value="gambling">GAMBLING</option>
      <option value="human trafficking">HUMAN TRAFFICKING</option>
      <option value="interference with public officer">INTERFERENCE WITH PUBLIC OFFICER</option>
      <option value="intimidation">INTIMIDATION</option>
      <option value="kidnapping">KIDNAPPING</option>
      <option value="liqour law violation">LIQUOR LAW VIOLATION</option>
      <option value="motor vehicle theft">MOTOR VEHICLE THEFT</option>
      <option value="narcotics">NARCOTICS</option>
      <option value="non-criminal">NON-CRIMINAL</option>
      <option value="obscenity">OBSCENITY</option>
      <option value="offense involving children">OFFENSE INVOLVING CHILDREN</option>
      <option value="other narcotic violation">OTHER NARCOTIC VIOLATION</option>
      <option value="other offense">OTHER OFFENSE</option>
      <option value="prostitution">PROSTITUTION</option>
      <option value="public indecency">PUBLIC INDECENCY</option>
      <option value="public peace violation">PUBLIC PEACE VIOLATION</option>
      <option value="ritualism">RITUALISM</option>
      <option value="robbery">ROBBERY</option>
      <option value="sex offense">SEX OFFENSE</option>
      <option value="stalking">STALKING</option>
      <option value="theft">THEFT</option>
      <option value="weapons violation">WEAPONS VIOLATION</option>
    </select>
    <select>
      <option value="arson">ARSON</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </div>
  )
}

export default Dropdowns;