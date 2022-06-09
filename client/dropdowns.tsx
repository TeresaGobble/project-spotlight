import React, { useState, useEffect, useContext, useMemo } from "react";
import axios, { AxiosResponse } from "axios";
import { Crime } from "./App";
import { CrimesContext } from "./CrimesContext";
import geocodeToken from "../geocode-config";

import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Dropdowns = () => {
  const { setCrimes, setZoomRate, setMapCenter } = useContext(CrimesContext);

  const crimes: any[] = [];

  const [location, setLocation] = useState("");
  const [primaryType, setPrimaryType] = useState("");
  const [description, setDescription] = useState("");
  const [searchRadius, setSearchRadius] = useState("5");
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const [open, setOpen] = React.useState(false);
  const [openDate, setOpenDate] = React.useState(false);
  const [openCrime, setOpenCrime] = React.useState(false);
  const [openSub, setOpenSub] = React.useState(false);
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openRadius, setOpenRadius] = React.useState(false);

  const crimeInfo: any = {
    ARSON: [
      "BY EXPLOSIVE",
      "BY FIRE",
      "AGGRAVATED",
      "POSSESSION - EXPLOSIVE / INCENDIARY DEVICE",
      "POSSESSION - CHEMICAL / DRY-ICE DEVICE",
      "ATTEMPT ARSON",
    ],

    ASSAULT: [
      "AGGRAVATED - HANDGUN",
      "AGGRAVATED - OTHER FIREARM",
      "AGGRAVATED - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED - OTHER DANGEROUS WEAPON",
      "PROTECTED EMPLOYEE - HANDS, FISTS, FEET, NO / MINOR INJURY",
      "AGGRAVATED POLICE OFFICER - HANDGUN",
      "AGGRAVATED POLICE OFFICER - OTHER FIREARM",
      "AGGRAVATED POLICE OFFICER - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED POLICE OFFICER - OTHER DANGEROUS WEAPON",
      "AGGRAVATED POLICE OFFICER - HANDS, FISTS, FEET, NO INJURY",
      "AGGRAVATED PROTECTED EMPLOYEE - HANDGUN",
      "AGGRAVATED PROTECTED EMPLOYEE - OTHER FIREARM",
      "AGGRAVATED PROTECTED EMPLOYEE - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED PROTECTED EMPLOYEE - OTHER DANGEROUS WEAPON",
      "SIMPLE",
    ],

    BATTERY: [
      "AGGRAVATED - HANDGUN",
      "AGGRAVATED - OTHER FIREARM",
      "AGGRAVATED - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED - OTHER DANGEROUS WEAPON",
      "AGGRAVATED - HANDS, FISTS, FEET, NO / MINOR INJURY",
      "AGGRAVATED POLICE OFFICER - HANDGUN",
      "AGGRAVATED POLICE OFFICER - OTHER FIREARM",
      "AGGRAVATED POLICE OFFICER - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED POLICE OFFICER - OTHER DANGEROUS WEAPON",
      "AGGRAVATED P.O. - HANDS, FISTS, FEET, NO / MINOR INJURY",
      "SIMPLE",
      "AGGRAVATED P.O. - HANDS, FISTS, FEET, SERIOUS INJURY",
      "AGG. PROTECTED EMPLOYEE - HANDS, FISTS, FEET, SERIOUS INJURY",
      "OF AN UNBORN CHILD",
      "AGGRAVATED - HANDS, FISTS, FEET, SERIOUS INJURY",
      "AGGRAVATED PROTECTED EMPLOYEE - HANDGUN",
      "AGGRAVATED PROTECTED EMPLOYEE - OTHER FIREARM",
      "AGGRAVATED PROTECTED EMPLOYEE - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED PROTECTED EMPLOYEE - OTHER DANGEROUS WEAPON",
      "PROTECTED EMPLOYEE - HANDS, FISTS, FEET, NO / MINOR INJURY",
      "AGGRAVATED OF A CHILD",
      "DOMESTIC BATTERY SIMPLE",
      "AGGRAVATED OF AN UNBORN CHILD",
      "AGGRAVATED DOMESTIC BATTERY - HANDGUN",
      "AGGRAVATED DOMESTIC BATTERY - OTHER FIREARM",
      "AGGRAVATED OF A SENIOR CITIZEN",
      "AGGRAVATED DOMESTIC BATTERY - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED DOMESTIC BATTERY - OTHER DANGEROUS WEAPON",
      "AGG. DOMESTIC BATTERY - HANDS, FISTS, FEET, SERIOUS INJURY",
      "AGGRAVATED DOMESTIC BATTERY",
    ],

    BURGLARY: [
      "FORCIBLE ENTRY",
      "UNLAWFUL ENTRY",
      "ATTEMPT FORCIBLE ENTRY",
      "HOME INVASION",
    ],

    "CONCEALED CARRY LICENSE VIOLATION": [
      "PROHIBITED PLACES",
      "ARMED WHILE UNDER THE INFLUENCE",
      "OTHER",
    ],

    "CRIMINAL ABORTION": ["CRIMINAL ABORTION"],

    "CRIMINAL DAMAGE": [
      "LIBRARY VANDALISM",
      "CRIMINAL DEFACEMENT",
      "TO PROPERTY",
      "TO VEHICLE",
      "TO STATE SUPPORTED PROPERTY",
      "TO CITY OF CHICAGO PROPERTY",
      "TO FIRE FIGHT.APP.EQUIP",
      "INSTITUTIONAL VANDALISM",
    ],

    "CRIMINAL SEXUAL ASSAULT": [
      "AGGRAVATED - HANDGUN",
      "AGGRAVATED - OTHER FIREARM",
      "AGGRAVATED - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED - OTHER DANGEROUS WEAPON",
      "AGGRAVATED - OTHER",
      "PREDATORY",
      "ATTEMPT AGGRAVATED - HANDGUN",
      "ATTEMPT AGGRAVATED - OTHER FIREARM",
      "ATTEMPT AGGRAVATED - KNIFE / CUTTING INSTRUMENT",
      "ATTEMPT AGGRAVATED - OTHER DANGEROUS WEAPON",
      "ATTEMPT AGGRAVATED - OTHER",
      "NON-AGGRAVATED",
      "ATTEMPT NON-AGGRAVATED",
    ],

    "CRIMINAL TRESPASS": [
      "TO LAND",
      "TO AIRPORT",
      "TO STATE SUP LAND",
      "TO VEHICLE",
      "TO RESIDENCE",
    ],

    "DECEPTIVE PRACTICE": [
      "BOGUS CHECK",
      "FORGERY",
      "COUNTERFEITING DOCUMENT",
      "COUNTERFEIT CHECK",
      "FRAUD OR CONFIDENCE GAME",
      "INSURANCE FRAUD",
      "EMBEZZLEMENT",
      "CREDIT CARD FRAUD",
      "ILLEGAL POSSESSION CASH CARD",
      "ILLEGAL USE CASH CARD",
      "FINANCIAL IDENTITY THEFT OVER $ 300",
      "FINANCIAL IDENTITY THEFT $300 AND UNDER",
      "AGGRAVATED FINANCIAL IDENTITY THEFT",
      "ATTEMPT - FINANCIAL IDENTITY THEFT",
      "ALTER COINS",
      "IMPERSONATION",
      "DECEPTIVE COLLECTION PRACTICES",
      "FINANCIAL EXPLOITATION OF AN ELDERLY OR DISABLED PERSON",
      "STOLEN PROPERTY BUY / RECEIVE / POSSESS",
      "THEFT BY LESSEE, NON-MOTOR VEHICLE",
      "THEFT BY LESSEE, MOTOR VEHICLE",
      "THEFT OF LABOR / SERVICES",
      "THEFT OF LOST / MISLAID PROPERTY",
      "POSSESS KEYS OR DEVICE TO COIN MACHINE",
      "UNLAWFUL USE OF RECORDED SOUND",
      "UNLAWFUL USE OF A COMPUTER",
      "AGGRAVATED COMPUTER TAMPERING",
      "COMPUTER FRAUD",
      "PAY TV SERVICE OFFENSES",
      "UNIDENTIFIABLE RECORDING SOUND",
      "LIBRARY THEFT",
      "UNAUTHORIZED VIDEOTAPING",
    ],

    GAMBLING: [
      "BOOKMAKING / HORSES",
      "BOOKMAKING / SPORTS",
      "BOLITA OR BOLI PUL / OFFICE",
      "BOLITA OR BOLI PUL / RUNNER",
      "BOLITA OR BOLI PUL / WRITER",
      "BOLITA OR BOLI PUL / STATION",
      "LOTTERY / PARI-MUTUEL",
      "NATIONAL LOTTERY",
      "ILLEGAL ILLINOIS LOTTERY",
      "LOTTERY / OTHER",
      "WIREROOM / HORSES",
      "WIREROOM / SPORTS",
      "WIREROOM / NUMBERS",
      "SPORTS TAMPERING",
      "REGISTER FEDERAL GAMBLING STAMP",
      "VIOLATION OF CHARITABLE GAME ACT",
      "GAME/CARDS",
      "GAME/DICE",
      "GAME / AMUSEMENT DEVICE",
      "OTHER",
      "LOTTERY / PARLAY CARDS",
      "POLICY / HOUSEBOOK",
      "POLICY / STATION",
      "POLICY / RUNNER",
      "POLICY / TURN-IN",
      "POLICY / OFFICE",
      "POLICY / PRESS",
      "POLICY / WHEEL",
      "POLICY / OTHER",
    ],

    HOMICIDE: [
      "FIRST DEGREE MURDER",
      "SECOND DEGREE MURDER",
      "INVOLUNTARY MANSLAUGHTER",
      "RECKLESS HOMICIDE",
    ],

    "HUMAN TRAFFICKING": ["COMMERCIAL SEX ACTS", "INVOLUNTARY SERVITUDE"],

    "INTERFERENCE WITH PUBLIC OFFICER": [
      "RESIST / OBSTRUCT / DISARM OFFICER",
      "REFUSING TO AID AN OFFICER",
      "OBSTRUCTING JUSTICE",
      "OBSTRUCTING IDENTIFICATION",
      "CONCEALING / AIDING A FUGITIVE",
      "ESCAPE",
      "AIDING ARRESTEE ESCAPE",
      "OBSTRUCTING SERVICE",
      "CONTRABAND IN PRISON",
      "INTERFERENCE JUDICIAL PROCESS",
      "BRIBERY",
      "OFFICIAL MISCONDUCT",
    ],

    INTIMIDATION: [
      "INTIMIDATION",
      "EDUCATIONAL INTIMIDAITON",
      "EXTORTION",
      "COMPELLING ORGANIZATION MEMBERSHIP",
      "COMPELLING CONFESSION",
    ],

    KIDNAPPING: [
      "CHILD ABDUCTION / STRANGER",
      "KIDNAPPING",
      "AGGRAVATED",
      "UNLAWFUL RESTRAINT",
      "FORCIBLE DETENTION",
      "UNLAWFUL VISITATION INTERFERENCE",
    ],

    "LIQUOR LAW VIOLATION": [
      "SELL / GIVE / DELIVER LIQUOR TO MINOR",
      "ILLEGAL POSSESSION BY MINOR",
      "ILLEGAL CONSUMPTION BY MINOR",
      "MINOR MISREPRESENT AGE",
      "LIQUOR LICENSE VIOLATION",
      "EMPLOY MINOR",
    ],

    "MOTOR VEHICLE THEFT": [
      "AUTOMOBILE",
      "TRUCK, BUS, MOTOR HOME",
      "CYCLE, SCOOTER, BIKE WITH VIN",
      "CYCLE, SCOOTER, BIKE NO VIN",
      "ATTEMPT - AUTOMOBILE",
      "ATTEMPT - TRUCK, BUS, MOTOR HOME",
      "ATTEMPT - CYCLE, SCOOTER, BIKE WITH VIN",
      "ATTEMPT - CYCLE, SCOOTER, BIKE NO VIN",
      "THEFT / RECOVERY - AUTOMOBILE",
      "THEFT / RECOVERY - TRUCK, BUS, MOBILE HOME",
      "THEFT / RECOVERY - CYCLE, SCOOTER, BIKE WITH VIN",
      "THEFT / RECOVERY - CYCLE, SCOOTER, BIKE NO VIN",
    ],

    NARCOTICS: [
      "POSSESS - CANNABIS 30 GRAMS OR LESS",
      "POSSESS - CANNABIS MORE THAN 30 GRAMS",
      "MANUFACTURE / DELIVER - CANNABIS 10 GRAMS OR LESS",
      "MANUFACTURE / DELIVER - CANNABIS OVER 10 GRAMS",
      "DELIVER CANNABIS TO PERSON UNDER 18",
      "CANNABIS PLANT",
      "CALCULATED CANNABIS CONSPIRACY",
      "MANUFACTURE / DELIVER - AMPHETAMINES",
      "MANUFACTURE / DELIVER - BARBITURATES",
      "MANUFACTURE / DELIVER - COCAINE",
      "MANUFACTURE / DELIVER - HEROIN (TAN / BROWN TAR)",
      "MANUFACTURE / DELIVER - HEROIN (WHITE)",
      "MANUFACTURE / DELIVER - HALLUCINOGEN",
      "MANUFACTURE / DELIVER - PCP",
      "MANUFACTURE / DELIVER - CRACK",
      "MANUFACTURE / DELIVER - SYNTHETIC DRUGS",
      "MANUFACTURE / DELIVER - HEROIN (BLACK TAR)",
      "POSSESS - AMPHETAMINES",
      "POSSESS - BARBITURATES",
      "POSSESS - COCAINE",
      "POSSESS - HEROIN (TAN / BROWN TAR)",
      "POSSESS - HEROIN (WHITE)",
      "POSSESS - HALLUCINOGENS",
      "POSSESS - PCP",
      "POSSESS - CRACK",
      "POSSESS - SYNTHETIC DRUGS",
      "POSSESS - HEROIN (BLACK TAR)",
      "MANUFACTURE / DELIVER - LOOK-ALIKE DRUG",
      "POSSESS - METHAMPHETAMINE",
      "MANUFACTURE / DELIVER - METHAMPHETAMINE",
      "MANUFACTURE / DELIVER - SYNTHETIC MARIJUANA",
      "POSSESSION - SYNTHETIC MARIJUANA",
      "POSSESS - LOOK-ALIKE DRUGS",
      "CRIMINAL DRUG CONSPIRACY",
      "FAILURE TO REGISTER LICENSE - CONTROLLED SUBSTANCES",
      "DELIVER CONTROLLED SUBSTANCES TO PERSON UNDER 18",
      "FAILURE TO MAINTAIN RECORDS - CONTROLLED SUBSTANCES",
      "ALTER / FORGE PRESCRIPTION",
      "FORFEIT PROPERTY",
      "SOLICIT NARCOTICS ON PUBLIC WAY",
      "FOUND SUSPECT NARCOTICS",
      "ATTEMPT POSSESSION CANNABIS",
      "ATTEMPT POSSESSION NARCOTICS",
      "POSSESS - HYPODERMIC NEEDLE",
      "SALE / DELIVER - HYPODERMIC NEEDLE",
      "FAILURE TO KEEP HYPODERMIC RECORDS",
      "SALE / DELIVER - DRUG PARAPHERNALIA",
      "POSSESSION OF DRUG EQUIPMENT",
    ],

    "NON-CRIMINAL": ["CONCEALED CARRY LICENSE REVOCATION"],

    OBSCENITY: [
      "OBSCENITY",
      "OBSCENE MATTER",
      "SALE / DISTRIBUTE OBSCENE MATERIAL TO MINOR",
      "SALE OF OBSCENE MATERIALS",
    ],

    "OFFENSE INVOLVING CHILDREN": [
      "POSSESSION OF PORNOGRAPHIC PRINT",
      "CHILD PORNOGRAPHY",
      "ENDANGERING LIFE / HEALTH OF CHILD",
      "SALE OF TOBACCO PRODUCTS TO MINOR",
      "CONTRIBUTE TO THE DELINQUENCY OF CHILD",
      "CONTRIBUTE TO THE CRIMINAL DELINQUENCY OF CHILD",
      "CHILD ABUSE",
      "CRIMINAL SEXUAL ABUSE BY FAMILY MEMBER",
      "AGGRAVATED CRIMINAL SEXUAL ABUSE BY FAMILY MEMBER",
      "SEXUAL ASSAULT OF CHILD BY FAMILY MEMBER",
      "AGGRAVATED SEXUAL ASSAULT OF CHILD BY FAMILY MEMBER",
      "CHILD ABANDONMENT",
      "SALE OF TRAVEL TICKET TO MINOR",
      "OTHER OFFENSE",
      "CHILD ABDUCTION",
      "HARBOR RUNAWAY",
    ],

    "OTHER NARCOTIC VIOLATION": ["INTOXICATING COMPOUNDS"],

    "OTHER OFFENSE": [
      "ANIMAL FIGHTING",
      "TELEPHONE THREAT",
      "HARASSMENT BY TELEPHONE",
      "HARASSMENT BY ELECTRONIC MEANS",
      "OBSCENE TELEPHONE CALLS",
      "INTERFERE WITH HIGHER EDUCATION",
      "POSSESSION OF BURGLARY TOOLS",
      "VIOLATION OF CIVIL NO CONTACT ORDER",
      "VIOLATE ORDER OF PROTECTION",
      "VIOLATION OF BAIL BOND - DOMESTIC VIOLENCE",
      "VIOLATION GPS MONITORING DEVICE",
      "DESTRUCTION OF DRAFT CARD",
      "CRIMINAL FORTIFICATION",
      "PROBATION VIOLATION",
      "PAROLE VIOLATION",
      "SEX OFFENDER - FAIL TO REGISTER",
      "SEX OFFENDER - FAIL TO REGISTER NEW ADDRESS",
      "SEX OFFENDER - PROHIBITED ZONE",
      "UNLAWFUL USE OF BODY ARMOR",
      "DISCLOSE DOMESTIC VIOLENCE VICTIM LOCATION",
      "MONEY LAUNDERING",
      "COMPOUNDING A CRIME",
      "BOARD PLANE WITH WEAPON",
      "OTHER CRIME AGAINST PERSON",
      "OTHER CRIME INVOLVING PROPERTY",
      "OTHER VEHICLE OFFENSE",
      "OTHER ARSON / EXPLOSIVE INCIDENT",
      "OTHER WEAPONS VIOLATION",
      "FIREARM REGISTRATION VIOLATION",
      "VIOLATION OF SMOKING BAN",
      "EAVESDROPPING",
      "ABUSE / NEGLECT - CARE FACILITY",
      "LICENSE VIOLATION",
      "VIOLATION OF SUMMARY CLOSURE",
      "ANIMAL ABUSE / NEGLECT",
      "HAZARDOUS MATERIALS VIOLATION",
      "FALSE / STOLEN / ALTERED TRP",
      "VEHICLE TITLE / REGISTRATION OFFENSE",
      "TAMPER WITH MOTOR VEHICLE",
      "GUN OFFENDER - DUTY TO REGISTER",
      "GUN OFFENDER - ANNUAL REGISTRATION",
      "GUN OFFENDER - DUTY TO REPORT CHANGE OF INFORMATION",
      "ARSONIST - DUTY TO REGISTER",
      "ARSONIST - ANNUAL REGISTRATION",
      "ARSONIST - FAIL TO REGISTER NEW ADDRESS",
      "VIOLENT OFFENDER - DUTY TO REGISTER",
      "VIOLENT OFFENDER - ANNUAL REGISTRATION",
      "VIOLENT OFFENDER - FAIL TO REGISTER NEW ADDRESS",
    ],

    PROSTITUTION: [
      "CALL OPERATION",
      "SOLICIT ON PUBLIC WAY",
      "SOLICIT OFF PUBLIC WAY",
      "CAB OPERATION",
      "IN TAVERN",
      "SOLICITING FOR A PROSTITUTE",
      "SOLICITING FOR BUSINESS",
      "PANDERING",
      "KEEPING PLACE OF PROSTITUTION",
      "KEEPING PLACE OF JUVENILE PROSTITUTION",
      "PATRONIZING A PROSTITUTE",
      "PATRONIZING A JUVENILE PROSTITUTE",
      "PIMPING",
      "JUVENILE PIMPING",
      "OTHER PROSTITUTION OFFENSE",
    ],

    "PUBLIC INDECENCY": ["LICENSED PREMISE"],

    "PUBLIC PEACE VIOLATION": [
      "RECKLESS CONDUCT",
      "FALSE FIRE ALARM",
      "BOMB THREAT",
      "ARSON THREAT",
      "FALSE POLICE REPORT",
      "PEEPING TOM",
      "OTHER VIOLATION",
      "INTERFERE WITH EMERGENCY EQUIPMENT",
      "SELL / ADVERTISE FIREWORKS",
      "MOB ACTION",
      "ARMED VIOLENCE",
      "PUBLIC DEMONSTRATION",
      "LOOTING",
    ],

    RITUALISM: [
      "AGGRAVATED RITUAL MUTILATION - HANDGUN",
      "AGGRAVATED RITUAL MUTILATION - OTHER FIREARM",
      "AGGRAVATED RITUAL MUTILATION - KNIFE / CUTTING INSTRUMENT",
      "AGGRAVATED RITUAL MUTILATION - OTHER DANGEROUS WEAPON",
      "AGGRAVATED RITUAL MUTILATION -HANDS / FEET NO / MINOR INJURY",
      "AGG. RITUAL MUTILATION - HANDS, FISTS, FEET, SERIOUS INJURY",
    ],

    ROBBERY: [
      "ARMED - KNIFE / CUTTING INSTRUMENT",
      "ARMED - OTHER DANGEROUS WEAPON",
      "ARMED - HANDGUN",
      "ARMED - OTHER FIREARM",
      "STRONG ARM - NO WEAPON",
      "VEHICULAR HIJACKING",
      "AGGRAVATED VEHICULAR HIJACKING",
      "AGGRAVATED",
      "ATTEMPT AGGRAVATED",
      "ATTEMPT ARMED - KNIFE / CUTTING INSTRUMENT",
      "ATTEMPT ARMED - OTHER DANGEROUS WEAPON",
      "ATTEMPT ARMED - HANDGUN",
      "ATTEMPT ARMED - OTHER FIREARM",
      "ATTEMPT STRONG ARM - NO WEAPON",
    ],

    "SEX OFFENSE": [
      "SEXUAL EXPLOITATION OF A CHILD",
      "AGGRAVATED CRIMINAL SEXUAL ABUSE",
      "CRIMINAL SEXUAL ABUSE",
      "CRIMINAL TRANSMISSION OF HIV",
      "INDECENT SOLICITATION OF A CHILD",
      "INDECENT SOLICITATION OF AN ADULT",
      "PUBLIC INDECENCY",
      "ADULTRY",
      "FORNICATION",
      "BIGAMY",
      "MARRYING A BIGAMIST",
      "SEXUAL RELATIONS IN FAMILY",
      "OTHER",
      "ATTEMPT AGGRAVATED CRIMINAL SEXUAL ABUSE",
      "ATTEMPT CRIMINAL SEXUAL ABUSE",
    ],

    STALKING: [
      "SIMPLE",
      "AGGRAVATED",
      "CYBERSTALKING",
      "VIOLATION OF STALKING NO CONTACT ORDER",
    ],

    THEFT: [
      "OVER $500",
      "$500 AND UNDER",
      "THEFT RETAIL",
      "FINANCIAL IDENTITY THEFT: OVER $300",
      "FINANCIAL IDENTITY THEFT: $300 & UNDER",
      "AGGRAVATED: FINANCIAL IDENTITY THEFT",
      "ATTEMPT FINANCIAL IDENTITY THEFT",
      "ATTEMPT THEFT",
      "RETAIL THEFT",
      "DELIVERY CONTAINER THEFT",
      "POCKET-PICKING",
      "PURSE-SNATCHING",
      "FROM BUILDING",
      "FROM COIN-OPERATED MACHINE OR DEVICE",
    ],

    "WEAPONS VIOLATION": [
      "UNLAWFUL USE - HANDGUN",
      "UNLAWFUL USE - OTHER FIREARM",
      "UNLAWFUL USE - OTHER DANGEROUS WEAPON",
      "UNLAWFUL SALE - HANDGUN",
      "UNLAWFUL SALE - OTHER FIREARM",
      "UNLAWFUL SALE - DELIVERY OF FIREARM AT SCHOOL",
      "UNLAWFUL POSSESSION - HANDGUN",
      "UNLAWFUL POSSESSION - OTHER FIREARM",
      "UNLAWFUL POSSESSION - AMMUNITION",
      "REGISTER OF SALES BY DEALER",
      "DEFACE IDENTIFICATION MARKS OF FIREARM",
      "POSSESS FIREARM / AMMUNITION - NO FOID CARD",
      "SALE OF METAL PIERCING BULLETS",
      "USE OF METAL PIERCING BULLETS",
      "RECKLESS FIREARM DISCHARGE",
      "UNLAWFUL USE / SALE OF AIR RIFLE",
    ],
  };

  const subcategoryOptions = useMemo(() => {
    if (primaryType !== '') {
      return crimeInfo[primaryType];
    } else {
      return [];
    }
  }, [primaryType]);

  const getSearchedCrime = (primaryType: string, description: string, location: string, searchRadius: string): any => {

    if (primaryType === '' || startDate === null || endDate === null) {
      window.alert('Please select both a Crime and Date before searching');
    } else {
      if (searchRadius) {
        const zoomRatesBySearchRadiusSize: object = {
          "1": 14,
          "5": 12,
          "10": 11,
          "25": 10,
          "50": 10,
          "100": 10
        }
        setZoomRate(zoomRatesBySearchRadiusSize[searchRadius]);
      } else {
        setZoomRate(11);
      }

      // conditionals for rendering each dropdown as optional
      if (description !== '') {
        description = "&description=" + description;
      }
      if (location !== '') {
        location = location + '+';
      }

      // setting the default search radius
      let longitude = -87.6243;
      let latitude = 41.8757;

      let newStartDate = startDate.toISOString().slice(0, 10);
      let newEndDate = endDate.toISOString().slice(0, 10);

      // Calling both APIs
      var requestOptions = {
        method: "GET",
      };

      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${location}Chicago+IL&apiKey=${geocodeToken.geocodeToken}`, requestOptions)
        .then(response => response.json())
        .then(result => {

          longitude = result.features[0].properties.lon;
          latitude = result.features[0].properties.lat;

          setMapCenter([latitude, longitude]);

          let geoAppifyResult = {
            easternmostLongitude: longitude + 0.015 * parseInt(searchRadius),
            westernmostLongitude: longitude - 0.015 * parseInt(searchRadius),
            northernmostLatitude: latitude + 0.015 * parseInt(searchRadius),
            southernmostLatitude: latitude - 0.015 * parseInt(searchRadius)
          }
          return geoAppifyResult;
        })
        .then(geoAppifyResult => {

          const result = fetch(`https://data.cityofchicago.org/resource/ijzp-q8t2.json?primary_type=${primaryType}${description}&$where=latitude >= ${geoAppifyResult.southernmostLatitude} AND latitude <= ${geoAppifyResult.northernmostLatitude} AND longitude >= ${geoAppifyResult.westernmostLongitude} AND longitude <= ${geoAppifyResult.easternmostLongitude} AND date >= "${newStartDate}T00:00:00.000" AND date <= "${newEndDate}T23:59:59.999"`)
          return result;
        })
        .then(response => response.json())
        .then(result => {
          setCrimes(result);
          return result;

        })
        .catch(error => console.log('error', error));
    }
  }

  useEffect(() => {
    axios
      .get<Crime>(`http://localhost:8081/crimes`)
      .then((res: any) => {
        crimes.push(res.data);
      })
      .catch((err: any) => {
        console.log("could not retrieve crimes", err);
      });
  }, []);

  const style = {
    position: 'absolute' as 'absolute',
    top: 336,
    left: 1136,
    width: 303,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #a9a9a9',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };

  return (
    <>
      <div className="name-and-info-section">
        <div className="name-and-info-item">
          <div>Location  </div>
            <img className="dropdown-limitations" src="https://i.imgur.com/qDvTXf9.png" onClick={() => setOpenLocation(true)}></img>
            <Modal open={openLocation}>
              <Box className="location-box" onMouseLeave={() => setOpenLocation(false)}>
                <p id="modal-text">
                  This can be as specific as an address or as broad as a zipcode!
                </p>
              </Box>
            </Modal>
          </div>

        <div className="name-and-info-item">
          <div>Crime  </div>
          <img className="dropdown-limitations" src="https://i.imgur.com/qDvTXf9.png" onClick={() => setOpenCrime(true)}></img>
            <Modal open={openCrime}>
              <Box className="crime-box" sx={{ width: 200 }} onMouseLeave={() => setOpenCrime(false)}>
                <p id="modal-text">
                  Required Category.
                  This is a list of every "primary type" of crime as defined by the city of Chicago.
                </p>
              </Box>
            </Modal>
        </div>

        <div className="name-and-info-item">
          <div>Subcategory  </div>
          <img className="dropdown-limitations" src="https://i.imgur.com/qDvTXf9.png" onClick={() => setOpenSub(true)}></img>
            <Modal open={openSub}>
              <Box className="sub-box" sx={{ width: 200 }} onMouseLeave={() => setOpenSub(false)}>
                <p id="modal-text">
                  This list reflects the subcategories of your chosen crime category.
                </p>
              </Box>
            </Modal>
        </div>

        <div className="name-and-info-item">
          <div>Search Area  </div>
          <img className="dropdown-limitations" src="https://i.imgur.com/qDvTXf9.png" onClick={() => setOpenRadius(true)}></img>
            <Modal open={openRadius}>
              <Box className="radius-box" sx={{ width: 200 }} onMouseLeave={() => setOpenRadius(false)}>
                <p id="modal-text">
                  If no search radius is chosen, the map will automatically populate results within a 1 mile radius.
                </p>
              </Box>
            </Modal>
        </div>

        <div className="name-and-info-item">
          <div>Date  </div>
          <img className="dropdown-limitations" src="https://i.imgur.com/qDvTXf9.png" onClick={() => setOpenDate(true)}></img>
            <Modal open={openDate}>
              <Box className="date-box" sx={{ width: 200 }} onMouseLeave={() => setOpenDate(false)}>
                <p id="modal-text">
                  Required Category.
                  All crimes are added to our dataset 7 days after initial reporting.
                  Thank you for your patience!
                </p>
              </Box>
            </Modal>
        </div>
      </div>
      <div className="dropdown-selections">
        <input placeholder="Enter Address" onChange={(e) => setLocation(e.target.value)}></input>
        <select className="dropdown-set-primary-type" placeholder="Select Crime" onChange={(e) => setPrimaryType(e.target.value.toUpperCase())}>
          <option value="Select Crime...">Select Crime...</option>
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
        <select placeholder="Select Subcategory" onChange={(e) => setDescription(e.target.value)}>
          <option value="Select Subcategory...">Select Subcategory...</option>
          {subcategoryOptions.map((subcategory) =>
            <option value={subcategory}>{subcategory}</option>
          )}
        </select>
        <select className="dropdown-set-search-radius" placeholder="Select Search Area" onChange={(e) => setSearchRadius(e.target.value)}>
          <option value="no-change">Select Search Area...</option>
          <option value="1">1 mile</option>
          <option value="5">5 miles</option>
          <option value="10">10 miles</option>
          <option value="25">25 miles</option>
          <option value="50">50 miles</option>
          <option value="100">100 miles</option>
        </select>
        <button className="date-button" placeholder="Select Date" onClick={() => setOpen(true)}>Select Date Range...</button>
        <Modal className="modal-creators"
          open={open}
          onBackdropClick={() => setOpen(false)}
        >
          <Box sx={style} >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Start Date"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select End Date"
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Modal>
        <img className="search-icon" alt="magnifying glass" src="https://i.imgur.com/LLgt3ke.png" onClick={() => getSearchedCrime(primaryType, description, location, searchRadius)}></img>
      </div>
    </>
  )
}

export default Dropdowns;