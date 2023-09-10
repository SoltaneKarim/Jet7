import React, { useEffect, useState } from "react";
import {
	CountryField,
	StateField,
	VisitorAPIComponents,
} from "react-country-state-fields";
import Calendar from "./Calendar";

function YourComponent({ handleOption }) {
	const [country, setCountry] = useState({ code: "", label: "" }); // the selected country
	const [state, setState] = useState({ code: "", label: "" }); // the selected state
	const visitorApiPrjectId = ""; // assign your project ID here
	const [kidsSelection, setKidsSelection] = useState(0);
	const [adultsSelection, setAdultsSelection] = useState(0);
	const [seniorsSelection, setSeniorsSelection] = useState(0);

	const currentDate = new Date();
	const [arrival, setArrival] = useState({ day: "", month: "", year: "" });
	const [depart, setDepart] = useState({ day: "", month: "", year: "" });

	//calender function toggle
	const [isCalendarVisible, setCalendarVisible] = useState(false);
	//to differenciate arrival or depart
	const [first, setFirst] = useState(null);
	const handleCalendarClick = () => {
		setCalendarVisible(!isCalendarVisible);
		setFirst(1);
	};

	const handleCalendarClickdep = () => {
		setCalendarVisible(!isCalendarVisible);
		setFirst(2);
	};

	const changearrival = (nez) => {
		setArrival(nez);
		console.log("in forum", arrival);
	};
	const changedepart = (dep) => {
		setDepart(dep);
	};

	const handleInputChange = (arrival) => {
		// Update the inputValue state when the input value changes
		setArrival(arrival);
	};

	//depart
	//finding

	const letsee = () => {
		const op={
			country: country,
			state: state,
			arrival: arrival,
			depart: depart,
			kidsCount: kidsSelection,
			adultsCount: adultsSelection,
			seniorsCount: seniorsSelection,
		}
		handleOption(op)
	};
	return (
		<div className="card shadow mb-5 bg-white rounded">
			<div className="card-body">
				<p className="card-title text-center shadow mb-5 rounded">
					Travel Booking Form
				</p>

				<div className="icons text-center">
					<i
						className="fa fa-plane fa-2x"
						id="just-this"
						aria-hidden="true"></i>
					<i className="fa fa-taxi fa-2x" id="just-this" aria-hidden="true"></i>
					<i
						className="fa fa-train fa-2x"
						id="just-this"
						aria-hidden="true"></i>
				</div>

				<hr />

				<p className="searchText">
					<strong>Search For Cheap Flights</strong>
				</p>

				{/* First Row */}

				{/* Second Row */}
				<div className="row">
					<div className="col-sm-12">
						<div className="dropd-container">
							<VisitorAPIComponents
								projectId={visitorApiPrjectId}
								handleCountryChange={(countryObj) => setCountry(countryObj)}
								handleStateChange={(stateObj) => setState(stateObj)}>
								<CountryField
									className="country-field"
									label="Choose Your Country"></CountryField>
							</VisitorAPIComponents>
						</div>
					</div>
				</div>

				{/* Third Row */}
				<div className="row">
					<div className="col-sm-6" style={{ "margin-top": "20px" }}>
						<input
							type="text"
							id="date-picker-example"
							className="form-control datepicker mb-4"
							value={
								arrival.day
									? `${arrival.day}/${arrival.month}/${arrival.year}`
									: " Departing"
							}
							style={{ fontFamily: "Arial, FontAwesome" }}
							onClick={handleCalendarClick}
						/>
						{/* Conditionally render the Calendar component based on visibility */}
						{isCalendarVisible && first === 1 && (
							<div className="calendar-container">
								<Calendar arr={handleInputChange} />
							</div>
						)}
					</div>
					<div className="col-sm-6" style={{ "margin-top": "20px" }}>
						<input
							type="text"
							id="date-picker-example"
							className="form-control datepicker mb-4"
							value={
								depart.day
									? `${depart.day}/${depart.month}/${depart.year}`
									: " Arriving"
							}
							style={{ fontFamily: "Arial, FontAwesome" }}
							onClick={handleCalendarClickdep}
						/>
						{/* Conditionally render the Calendar component based on visibility */}
						{isCalendarVisible && first === 2 && (
							<div className="calendar-container">
								<Calendar dep={changedepart} />
							</div>
						)}
					</div>
				</div>

				{/* Fourth Row */}

				{/* Fifth Row */}
				<div className="row">
					<div className="col-sm-4" style={{ marginTop: "20px" }}>
						<select
							className="browser-default custom-select mb-4"
							id="selectKids"
							onChange={(e) => setKidsSelection(e.target.value)}
							value={kidsSelection}>
							<option value="" disabled="">
								Kids(0-14)
							</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div className="col-sm-4" style={{ marginTop: "20px" }}>
						<select
							className="browser-default custom-select mb-4"
							id="selectAdults"
							onChange={(e) => setAdultsSelection(e.target.value)}
							value={adultsSelection}>
							<option value="" disabled="">
								Adults(15-64)
							</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<div className="col-sm-4" style={{ marginTop: "20px" }}>
						<select
							className="browser-default custom-select mb-4"
							id="selectSeniors"
							onChange={(e) => setSeniorsSelection(e.target.value)}
							value={seniorsSelection}>
							<option value="" disabled="">
								Seniors(65+)
							</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
				</div>

				<a
					className="btn btn-primary float-right mt-5"
					style={{ marginTop: "20px", width: "100%" }}
					onClick={letsee}>
					Find Flights
				</a>
			</div>
		</div>
	);
}

export default YourComponent;
