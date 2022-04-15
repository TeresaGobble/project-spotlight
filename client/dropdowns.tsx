import React, { useState, useEffect } from 'react';
import axios, {AxiosResponse} from 'axios';
import {Crime, getAllCrimes, getSearchedCrime} from '../database/queries';
import './index.css';
import { CrimesContext } from "./CrimesContext"; //need the context here (since dropdowns set the crime object content)

// need to set the values here to the crimes context object (like "setState")

const Dropdowns = () => {

  const crimes: any[] = [];

  const [latitude, setLatitude] = useState('');
  const [primaryType, setPrimaryType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  // const [chosenPrimary, setChosenPrimary] = useState(false);

  const crimeInfo : any = {
    'ARSON': ['BY EXPLOSIVE', 'BY FIRE', 'AGGRAVATED', 'POSSESSION - EXPLOSIVE / INCENDIARY DEVICE', 'POSSESSION - CHEMICAL / DRY-ICE DEVICE', 'ATTEMPT ARSON'],

    'ASSAULT': ['AGGRAVATED - HANDGUN', 'AGGRAVATED - OTHER FIREARM', 'AGGRAVATED - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED - OTHER DANGEROUS WEAPON', 'PROTECTED EMPLOYEE - HANDS, FISTS, FEET, NO / MINOR INJURY', 'AGGRAVATED POLICE OFFICER - HANDGUN', 'AGGRAVATED POLICE OFFICER - OTHER FIREARM', 'AGGRAVATED POLICE OFFICER - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED POLICE OFFICER - OTHER DANGEROUS WEAPON', 'AGGRAVATED POLICE OFFICER - HANDS, FISTS, FEET, NO INJURY', 'AGGRAVATED PROTECTED EMPLOYEE - HANDGUN', 'AGGRAVATED PROTECTED EMPLOYEE - OTHER FIREARM', 'AGGRAVATED PROTECTED EMPLOYEE - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED PROTECTED EMPLOYEE - OTHER DANGEROUS WEAPON', 'SIMPLE'],

    'BATTERY': ['AGGRAVATED - HANDGUN', 'AGGRAVATED - OTHER FIREARM', 'AGGRAVATED - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED - OTHER DANGEROUS WEAPON', 'AGGRAVATED - HANDS, FISTS, FEET, NO / MINOR INJURY', 'AGGRAVATED POLICE OFFICER - HANDGUN', 'AGGRAVATED POLICE OFFICER - OTHER FIREARM', 'AGGRAVATED POLICE OFFICER - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED POLICE OFFICER - OTHER DANGEROUS WEAPON', 'AGGRAVATED P.O. - HANDS, FISTS, FEET, NO / MINOR INJURY', 'SIMPLE', 'AGGRAVATED P.O. - HANDS, FISTS, FEET, SERIOUS INJURY', 'AGG. PROTECTED EMPLOYEE - HANDS, FISTS, FEET, SERIOUS INJURY', 'OF AN UNBORN CHILD', 'AGGRAVATED - HANDS, FISTS, FEET, SERIOUS INJURY', 'AGGRAVATED PROTECTED EMPLOYEE - HANDGUN', 'AGGRAVATED PROTECTED EMPLOYEE - OTHER FIREARM', 'AGGRAVATED PROTECTED EMPLOYEE - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED PROTECTED EMPLOYEE - OTHER DANGEROUS WEAPON', 'PROTECTED EMPLOYEE - HANDS, FISTS, FEET, NO / MINOR INJURY', 'AGGRAVATED OF A CHILD', 'DOMESTIC BATTERY SIMPLE', 'AGGRAVATED OF AN UNBORN CHILD', 'AGGRAVATED DOMESTIC BATTERY - HANDGUN', 'AGGRAVATED DOMESTIC BATTERY - OTHER FIREARM', 'AGGRAVATED OF A SENIOR CITIZEN', 'AGGRAVATED DOMESTIC BATTERY - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED DOMESTIC BATTERY - OTHER DANGEROUS WEAPON', 'AGG. DOMESTIC BATTERY - HANDS, FISTS, FEET, SERIOUS INJURY', 'AGGRAVATED DOMESTIC BATTERY'],

    'BURGLARY': ['FORCIBLE ENTRY', 'UNLAWFUL ENTRY', 'ATTEMPT FORCIBLE ENTRY', 'HOME INVASION'],

    'CONCEALED CARRY LICENSE VIOLATION': ['PROHIBITED PLACES', 'ARMED WHILE UNDER THE INFLUENCE', 'OTHER'],

    'CRIMINAL ABORTION': ['CRIMINAL ABORTION'],

    'CRIMINAL DAMAGE': ['LIBRARY VANDALISM', 'CRIMINAL DEFACEMENT', 'TO PROPERTY', 'TO VEHICLE', 'TO STATE SUPPORTED PROPERTY', 'TO CITY OF CHICAGO PROPERTY', 'TO FIRE FIGHT.APP.EQUIP', 'INSTITUTIONAL VANDALISM'],

    'CRIMINAL SEXUAL ASSAULT': ['AGGRAVATED - HANDGUN', 'AGGRAVATED - OTHER FIREARM', 'AGGRAVATED - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED - OTHER DANGEROUS WEAPON', 'AGGRAVATED - OTHER', 'PREDATORY', 'ATTEMPT AGGRAVATED - HANDGUN', 'ATTEMPT AGGRAVATED - OTHER FIREARM', 'ATTEMPT AGGRAVATED - KNIFE / CUTTING INSTRUMENT', 'ATTEMPT AGGRAVATED - OTHER DANGEROUS WEAPON', 'ATTEMPT AGGRAVATED - OTHER', 'NON-AGGRAVATED', 'ATTEMPT NON-AGGRAVATED'],

    'CRIMINAL TRESPASS': ['TO LAND', 'TO AIRPORT', 'TO STATE SUP LAND', 'TO VEHICLE', 'TO RESIDENCE'],

    'DECEPTIVE PRACTICE': ['BOGUS CHECK', 'FORGERY', 'COUNTERFEITING DOCUMENT', 'COUNTERFEIT CHECK', 'FRAUD OR CONFIDENCE GAME', 'INSURANCE FRAUD', 'EMBEZZLEMENT', 'CREDIT CARD FRAUD', 'ILLEGAL POSSESSION CASH CARD', 'ILLEGAL USE CASH CARD', 'FINANCIAL IDENTITY THEFT OVER $ 300', 'FINANCIAL IDENTITY THEFT $300 AND UNDER', 'AGGRAVATED FINANCIAL IDENTITY THEFT', 'ATTEMPT - FINANCIAL IDENTITY THEFT', 'ALTER COINS', 'IMPERSONATION', 'DECEPTIVE COLLECTION PRACTICES', 'FINANCIAL EXPLOITATION OF AN ELDERLY OR DISABLED PERSON', 'STOLEN PROPERTY BUY / RECEIVE / POSSESS', 'THEFT BY LESSEE, NON-MOTOR VEHICLE', 'THEFT BY LESSEE, MOTOR VEHICLE', 'THEFT OF LABOR / SERVICES', 'THEFT OF LOST / MISLAID PROPERTY', 'POSSESS KEYS OR DEVICE TO COIN MACHINE', 'UNLAWFUL USE OF RECORDED SOUND', 'UNLAWFUL USE OF A COMPUTER', 'AGGRAVATED COMPUTER TAMPERING', 'COMPUTER FRAUD', 'PAY TV SERVICE OFFENSES', 'UNIDENTIFIABLE RECORDING SOUND', 'LIBRARY THEFT', 'UNAUTHORIZED VIDEOTAPING'],

    'GAMBLING': ['BOOKMAKING / HORSES', 'BOOKMAKING / SPORTS', 'BOLITA OR BOLI PUL / OFFICE', 'BOLITA OR BOLI PUL / RUNNER', 'BOLITA OR BOLI PUL / WRITER', 'BOLITA OR BOLI PUL / STATION', 'LOTTERY / PARI-MUTUEL', 'NATIONAL LOTTERY', 'ILLEGAL ILLINOIS LOTTERY', 'LOTTERY / OTHER', 'WIREROOM / HORSES', 'WIREROOM / SPORTS', 'WIREROOM / NUMBERS', 'SPORTS TAMPERING', 'REGISTER FEDERAL GAMBLING STAMP', 'VIOLATION OF CHARITABLE GAME ACT', 'GAME/CARDS', 'GAME/DICE', 'GAME / AMUSEMENT DEVICE', 'OTHER', 'LOTTERY / PARLAY CARDS', 'POLICY / HOUSEBOOK', 'POLICY / STATION', 'POLICY / RUNNER', 'POLICY / TURN-IN', 'POLICY / OFFICE', 'POLICY / PRESS', 'POLICY / WHEEL', 'POLICY / OTHER'],

    'HOMICIDE': ['FIRST DEGREE MURDER', 'SECOND DEGREE MURDER', 'INVOLUNTARY MANSLAUGHTER', 'RECKLESS HOMICIDE'],

    'HUMAN TRAFFICKING': ['COMMERCIAL SEX ACTS', 'INVOLUNTARY SERVITUDE'],

    'INTERFERENCE WITH PUBLIC OFFICER': ['RESIST / OBSTRUCT / DISARM OFFICER', 'REFUSING TO AID AN OFFICER', 'OBSTRUCTING JUSTICE', 'OBSTRUCTING IDENTIFICATION', 'CONCEALING / AIDING A FUGITIVE', 'ESCAPE', 'AIDING ARRESTEE ESCAPE', 'OBSTRUCTING SERVICE', 'CONTRABAND IN PRISON', 'INTERFERENCE JUDICIAL PROCESS', 'BRIBERY', 'OFFICIAL MISCONDUCT'],

    'INTIMIDATION': ['INTIMIDATION', 'EDUCATIONAL INTIMIDAITON', 'EXTORTION', 'COMPELLING ORGANIZATION MEMBERSHIP', 'COMPELLING CONFESSION'],

    'KIDNAPPING': ['CHILD ABDUCTION / STRANGER', 'KIDNAPPING', 'AGGRAVATED', 'UNLAWFUL RESTRAINT', 'FORCIBLE DETENTION', 'UNLAWFUL VISITATION INTERFERENCE'],

    'LIQUOR LAW VIOLATION': ['SELL / GIVE / DELIVER LIQUOR TO MINOR', 'ILLEGAL POSSESSION BY MINOR', 'ILLEGAL CONSUMPTION BY MINOR', 'MINOR MISREPRESENT AGE', 'LIQUOR LICENSE VIOLATION', 'EMPLOY MINOR'],

    'MOTOR VEHICLE THEFT': ['AUTOMOBILE', 'TRUCK, BUS, MOTOR HOME', 'CYCLE, SCOOTER, BIKE WITH VIN', 'CYCLE, SCOOTER, BIKE NO VIN', 'ATTEMPT - AUTOMOBILE', 'ATTEMPT - TRUCK, BUS, MOTOR HOME', 'ATTEMPT - CYCLE, SCOOTER, BIKE WITH VIN', 'ATTEMPT - CYCLE, SCOOTER, BIKE NO VIN', 'THEFT / RECOVERY - AUTOMOBILE', 'THEFT / RECOVERY - TRUCK, BUS, MOBILE HOME', 'THEFT / RECOVERY - CYCLE, SCOOTER, BIKE WITH VIN', 'THEFT / RECOVERY - CYCLE, SCOOTER, BIKE NO VIN'],

    'NARCOTICS': ['POSSESS - CANNABIS 30 GRAMS OR LESS', 'POSSESS - CANNABIS MORE THAN 30 GRAMS', 'MANUFACTURE / DELIVER - CANNABIS 10 GRAMS OR LESS', 'MANUFACTURE / DELIVER - CANNABIS OVER 10 GRAMS', 'DELIVER CANNABIS TO PERSON UNDER 18', 'CANNABIS PLANT', 'CALCULATED CANNABIS CONSPIRACY', 'MANUFACTURE / DELIVER - AMPHETAMINES', 'MANUFACTURE / DELIVER - BARBITURATES', 'MANUFACTURE / DELIVER - COCAINE', 'MANUFACTURE / DELIVER - HEROIN (TAN / BROWN TAR)', 'MANUFACTURE / DELIVER - HEROIN (WHITE)', 'MANUFACTURE / DELIVER - HALLUCINOGEN', 'MANUFACTURE / DELIVER - PCP', 'MANUFACTURE / DELIVER - CRACK', 'MANUFACTURE / DELIVER - SYNTHETIC DRUGS', 'MANUFACTURE / DELIVER - HEROIN (BLACK TAR)', 'POSSESS - AMPHETAMINES', 'POSSESS - BARBITURATES', 'POSSESS - COCAINE', 'POSSESS - HEROIN (TAN / BROWN TAR)', 'POSSESS - HEROIN (WHITE)', 'POSSESS - HALLUCINOGENS', 'POSSESS - PCP', 'POSSESS - CRACK', 'POSSESS - SYNTHETIC DRUGS', 'POSSESS - HEROIN (BLACK TAR)', 'MANUFACTURE / DELIVER - LOOK-ALIKE DRUG', 'POSSESS - METHAMPHETAMINE', 'MANUFACTURE / DELIVER - METHAMPHETAMINE', 'MANUFACTURE / DELIVER - SYNTHETIC MARIJUANA', 'POSSESSION - SYNTHETIC MARIJUANA', 'POSSESS - LOOK-ALIKE DRUGS', 'CRIMINAL DRUG CONSPIRACY', 'FAILURE TO REGISTER LICENSE - CONTROLLED SUBSTANCES', 'DELIVER CONTROLLED SUBSTANCES TO PERSON UNDER 18', 'FAILURE TO MAINTAIN RECORDS - CONTROLLED SUBSTANCES', 'ALTER / FORGE PRESCRIPTION', 'FORFEIT PROPERTY', 'SOLICIT NARCOTICS ON PUBLIC WAY', 'FOUND SUSPECT NARCOTICS', 'ATTEMPT POSSESSION CANNABIS', 'ATTEMPT POSSESSION NARCOTICS', 'POSSESS - HYPODERMIC NEEDLE', 'SALE / DELIVER - HYPODERMIC NEEDLE', 'FAILURE TO KEEP HYPODERMIC RECORDS', 'SALE / DELIVER - DRUG PARAPHERNALIA', 'POSSESSION OF DRUG EQUIPMENT'],

    'NON-CRIMINAL': ['CONCEALED CARRY LICENSE REVOCATION'],

    'OBSCENITY': ['OBSCENITY', 'OBSCENE MATTER', 'SALE / DISTRIBUTE OBSCENE MATERIAL TO MINOR', 'SALE OF OBSCENE MATERIALS'],

    'OFFENSE INVOLVING CHILDREN': ['POSSESSION OF PORNOGRAPHIC PRINT', 'CHILD PORNOGRAPHY', 'ENDANGERING LIFE / HEALTH OF CHILD', 'SALE OF TOBACCO PRODUCTS TO MINOR', 'CONTRIBUTE TO THE DELINQUENCY OF CHILD', 'CONTRIBUTE TO THE CRIMINAL DELINQUENCY OF CHILD', 'CHILD ABUSE', 'CRIMINAL SEXUAL ABUSE BY FAMILY MEMBER', 'AGGRAVATED CRIMINAL SEXUAL ABUSE BY FAMILY MEMBER', 'SEXUAL ASSAULT OF CHILD BY FAMILY MEMBER', 'AGGRAVATED SEXUAL ASSAULT OF CHILD BY FAMILY MEMBER', 'CHILD ABANDONMENT', 'SALE OF TRAVEL TICKET TO MINOR', 'OTHER OFFENSE', 'CHILD ABDUCTION', 'HARBOR RUNAWAY'],

    'OTHER NARCOTIC VIOLATION': ['INTOXICATING COMPOUNDS'],

    'OTHER OFFENSE': ['ANIMAL FIGHTING', 'TELEPHONE THREAT', 'HARASSMENT BY TELEPHONE', 'HARASSMENT BY ELECTRONIC MEANS', 'OBSCENE TELEPHONE CALLS', 'INTERFERE WITH HIGHER EDUCATION', 'POSSESSION OF BURGLARY TOOLS', 'VIOLATION OF CIVIL NO CONTACT ORDER', 'VIOLATE ORDER OF PROTECTION', 'VIOLATION OF BAIL BOND - DOMESTIC VIOLENCE', 'VIOLATION GPS MONITORING DEVICE', 'DESTRUCTION OF DRAFT CARD', 'CRIMINAL FORTIFICATION', 'PROBATION VIOLATION', 'PAROLE VIOLATION', 'SEX OFFENDER - FAIL TO REGISTER', 'SEX OFFENDER - FAIL TO REGISTER NEW ADDRESS', 'SEX OFFENDER - PROHIBITED ZONE', 'UNLAWFUL USE OF BODY ARMOR', 'DISCLOSE DOMESTIC VIOLENCE VICTIM LOCATION', 'MONEY LAUNDERING', 'COMPOUNDING A CRIME', 'BOARD PLANE WITH WEAPON', 'OTHER CRIME AGAINST PERSON', 'OTHER CRIME INVOLVING PROPERTY', 'OTHER VEHICLE OFFENSE', 'OTHER ARSON / EXPLOSIVE INCIDENT', 'OTHER WEAPONS VIOLATION', 'FIREARM REGISTRATION VIOLATION', 'VIOLATION OF SMOKING BAN', 'EAVESDROPPING', 'ABUSE / NEGLECT - CARE FACILITY', 'LICENSE VIOLATION', 'VIOLATION OF SUMMARY CLOSURE', 'ANIMAL ABUSE / NEGLECT', 'HAZARDOUS MATERIALS VIOLATION', 'FALSE / STOLEN / ALTERED TRP', 'VEHICLE TITLE / REGISTRATION OFFENSE', 'TAMPER WITH MOTOR VEHICLE', 'GUN OFFENDER - DUTY TO REGISTER', 'GUN OFFENDER - ANNUAL REGISTRATION', 'GUN OFFENDER - DUTY TO REPORT CHANGE OF INFORMATION', 'ARSONIST - DUTY TO REGISTER', 'ARSONIST - ANNUAL REGISTRATION', 'ARSONIST - FAIL TO REGISTER NEW ADDRESS', 'VIOLENT OFFENDER - DUTY TO REGISTER', 'VIOLENT OFFENDER - ANNUAL REGISTRATION', 'VIOLENT OFFENDER - FAIL TO REGISTER NEW ADDRESS'],

    'PROSTITUTION': ['CALL OPERATION', 'SOLICIT ON PUBLIC WAY', 'SOLICIT OFF PUBLIC WAY', 'CAB OPERATION', 'IN TAVERN', 'SOLICITING FOR A PROSTITUTE', 'SOLICITING FOR BUSINESS', 'PANDERING', 'KEEPING PLACE OF PROSTITUTION', 'KEEPING PLACE OF JUVENILE PROSTITUTION', 'PATRONIZING A PROSTITUTE', 'PATRONIZING A JUVENILE PROSTITUTE', 'PIMPING', 'JUVENILE PIMPING', 'OTHER PROSTITUTION OFFENSE'],

    'PUBLIC INDECENCY': ['LICENSED PREMISE'],

    'PUBLIC PEACE VIOLATION': ['RECKLESS CONDUCT', 'FALSE FIRE ALARM', 'BOMB THREAT', 'ARSON THREAT', 'FALSE POLICE REPORT', 'PEEPING TOM', 'OTHER VIOLATION', 'INTERFERE WITH EMERGENCY EQUIPMENT', 'SELL / ADVERTISE FIREWORKS', 'MOB ACTION', 'ARMED VIOLENCE', 'PUBLIC DEMONSTRATION', 'LOOTING'],

    'RITUALISM': ['AGGRAVATED RITUAL MUTILATION - HANDGUN', 'AGGRAVATED RITUAL MUTILATION - OTHER FIREARM', 'AGGRAVATED RITUAL MUTILATION - KNIFE / CUTTING INSTRUMENT', 'AGGRAVATED RITUAL MUTILATION - OTHER DANGEROUS WEAPON', 'AGGRAVATED RITUAL MUTILATION -HANDS / FEET NO / MINOR INJURY', 'AGG. RITUAL MUTILATION - HANDS, FISTS, FEET, SERIOUS INJURY'],

    'ROBBERY': ['ARMED - KNIFE / CUTTING INSTRUMENT', 'ARMED - OTHER DANGEROUS WEAPON', 'ARMED - HANDGUN', 'ARMED - OTHER FIREARM', 'STRONG ARM - NO WEAPON', 'VEHICULAR HIJACKING', 'AGGRAVATED VEHICULAR HIJACKING', 'AGGRAVATED', 'ATTEMPT AGGRAVATED', 'ATTEMPT ARMED - KNIFE / CUTTING INSTRUMENT', 'ATTEMPT ARMED - OTHER DANGEROUS WEAPON', 'ATTEMPT ARMED - HANDGUN', 'ATTEMPT ARMED - OTHER FIREARM', 'ATTEMPT STRONG ARM - NO WEAPON'],

    'SEX OFFENSE': ['SEXUAL EXPLOITATION OF A CHILD', 'AGGRAVATED CRIMINAL SEXUAL ABUSE', 'CRIMINAL SEXUAL ABUSE', 'CRIMINAL TRANSMISSION OF HIV', 'INDECENT SOLICITATION OF A CHILD', 'INDECENT SOLICITATION OF AN ADULT', 'PUBLIC INDECENCY', 'ADULTRY', 'FORNICATION', 'BIGAMY', 'MARRYING A BIGAMIST', 'SEXUAL RELATIONS IN FAMILY', 'OTHER', 'ATTEMPT AGGRAVATED CRIMINAL SEXUAL ABUSE', 'ATTEMPT CRIMINAL SEXUAL ABUSE'],

    'STALKING': ['SIMPLE', 'AGGRAVATED', 'CYBERSTALKING', 'VIOLATION OF STALKING NO CONTACT ORDER'],

    'THEFT': ['OVER $500', '$500 AND UNDER', 'THEFT RETAIL', 'FINANCIAL IDENTITY THEFT: OVER $300', 'FINANCIAL IDENTITY THEFT: $300 & UNDER', 'AGGRAVATED: FINANCIAL IDENTITY THEFT', 'ATTEMPT FINANCIAL IDENTITY THEFT', 'ATTEMPT THEFT', 'RETAIL THEFT', 'DELIVERY CONTAINER THEFT', 'POCKET-PICKING', 'PURSE-SNATCHING', 'FROM BUILDING', 'FROM COIN-OPERATED MACHINE OR DEVICE'],

    'WEAPONS VIOLATION': ['UNLAWFUL USE - HANDGUN', 'UNLAWFUL USE - OTHER FIREARM', 'UNLAWFUL USE - OTHER DANGEROUS WEAPON', 'UNLAWFUL SALE - HANDGUN', 'UNLAWFUL SALE - OTHER FIREARM', 'UNLAWFUL SALE - DELIVERY OF FIREARM AT SCHOOL', 'UNLAWFUL POSSESSION - HANDGUN', 'UNLAWFUL POSSESSION - OTHER FIREARM', 'UNLAWFUL POSSESSION - AMMUNITION', 'REGISTER OF SALES BY DEALER', 'DEFACE IDENTIFICATION MARKS OF FIREARM', 'POSSESS FIREARM / AMMUNITION - NO FOID CARD', 'SALE OF METAL PIERCING BULLETS', 'USE OF METAL PIERCING BULLETS', 'RECKLESS FIREARM DISCHARGE', 'UNLAWFUL USE / SALE OF AIR RIFLE']
  };

  useEffect(() => {

    axios.get<Crime>(`http://localhost:8081/crimes?primaryType={primaryType}&description={description}`)
    // add the states into the endpoint to make it dynamic!!
    // use ?
    .then((res: any) => {
      crimes.push(res.data);
      for (let i = 0; i < crimes.length; i++) {
        // console.log(crimes[i]);
      }
    })
    .then(() => {
      setLatitude(crimes[0][0].latitude)
      setPrimaryType(crimes[0][0].primary_type)
      setDescription(crimes[0][0].description)
      setDate(crimes[0][0].date)
    })
    // add another then block for states
    .catch((err: any) => {
      console.log('U FAILED', err);
    })
  }, [])

  // create a function that handles submit
  // set the states using onChange and onSubmit (event.target.value)

  // map over the appropriate key in crime object .. conditional rendering
  return (
  <div>
    <select onChange={(e) => {setPrimaryType(e.target.value)}}>
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
    <select onChange={(e) => setDescription(e.target.value)}>
      <option value="arson" disabled>ARSON</option>
      {crimeInfo['ARSON'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="assault" disabled>ASSAULT</option>
      {crimeInfo['ASSAULT'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="homicide" disabled>HOMICIDE</option>
      {crimeInfo['HOMICIDE'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="battery" disabled>BATTERY</option>
      {crimeInfo['BATTERY'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="burglary" disabled>BURGLARY</option>
      {crimeInfo['BURGLARY'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="concealed carry license violation" disabled>CONCEALED CARRY LICENSE VIOLATION</option>
      {crimeInfo['CONCEALED CARRY LICENSE VIOLATION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="criminal abortion" disabled>CRIMINAL ABORTION</option>
      {crimeInfo['CRIMINAL ABORTION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="criminal damage" disabled>CRIMINAL DAMAGE</option>
      {crimeInfo['CRIMINAL DAMAGE'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="criminal sexual assault" disabled>CRIMINAL SEXUAL ASSAULT</option>
      {crimeInfo['CRIMINAL SEXUAL ASSAULT'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="criminal trespass" disabled>CRIMINAL TRESPASS</option>
      {crimeInfo['CRIMINAL TRESPASS'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="deceptive practice" disabled>DECEPTIVE PRACTICE</option>
      {crimeInfo['DECEPTIVE PRACTICE'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="gambling" disabled>GAMBLING</option>
      {crimeInfo['GAMBLING'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="human trafficking" disabled>HUMAN TRAFFICKING</option>
      {crimeInfo['HUMAN TRAFFICKING'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="interference with public officer" disabled>INTERFERENCE WITH PUBLIC OFFICER</option>
      {crimeInfo['INTERFERENCE WITH PUBLIC OFFICER'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="intimidation" disabled>INTIMIDATION</option>
      {crimeInfo['INTIMIDATION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="kidnapping" disabled>KIDNAPPING</option>
      {crimeInfo['KIDNAPPING'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="liquor law violation" disabled>LIQUOR LAW VIOLATION</option>
      {crimeInfo['LIQUOR LAW VIOLATION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="motor vehicle theft" disabled>MOTOR VEHICLE THEFT</option>
      {crimeInfo['MOTOR VEHICLE THEFT'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="narcotics" disabled>NARCOTICS</option>
      {crimeInfo['NARCOTICS'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="non-criminal" disabled>NON-CRIMINAL</option>
      {crimeInfo['NON-CRIMINAL'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="obscenity" disabled>OBSCENITY</option>
      {crimeInfo['OBSCENITY'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="offense involving children" disabled>OFFENSE INVOLVING CHILDREN</option>
      {crimeInfo['OFFENSE INVOLVING CHILDREN'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="other narcotic violation" disabled>OTHER NARCOTIC VIOLATION</option>
      {crimeInfo['OTHER NARCOTIC VIOLATION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="other offense" disabled>OTHER OFFENSE</option>
      {crimeInfo['OTHER OFFENSE'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="prostitution" disabled>PROSTITUTION</option>
      {crimeInfo['PROSTITUTION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="public indecency" disabled>PUBLIC INDECENCY</option>
      {crimeInfo['PUBLIC INDECENCY'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="public peace violation" disabled>PUBLIC PEACE VIOLATION</option>
      {crimeInfo['PUBLIC PEACE VIOLATION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="ritualism" disabled>RITUALISM</option>
      {crimeInfo['RITUALISM'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="robbery" disabled>ROBBERY</option>
      {crimeInfo['ROBBERY'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="sex offense" disabled>SEX OFFENSE</option>
      {crimeInfo['SEX OFFENSE'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="stalking" disabled>STALKING</option>
      {crimeInfo['STALKING'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="theft" disabled>THEFT</option>
      {crimeInfo['THEFT'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
      <option value="weapons violation" disabled>WEAPONS VIOLATION</option>
      {crimeInfo['WEAPONS VIOLATION'].map((subcategory: any, key: any) => (
        <option value={subcategory} key={key}> {subcategory} </option>
      ))}
    </select>
    <button type='submit'> Search </button>
  </div>
  )
}

export default Dropdowns;