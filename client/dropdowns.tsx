import React from 'react';
import './index.css'
import { CrimesContext } from "./CrimesContext"; //need the context here (since dropdowns set the crime object content)

// need to set the values here to the crimes context object (like "setState")

const Dropdowns = () => (

  <div>
    <select>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </div>

)

export default Dropdowns;