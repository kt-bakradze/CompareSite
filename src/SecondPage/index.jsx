import classes from "./index.module.scss";
import React from "react";
import items from "../inv.json";
import { useNavigate } from "react-router-dom";


export default function CompareContent() {
	const staticVehicle = items.filter((e) => e.VIN === "JM1GL1VM0L1515909")[0];
	const selectedVehicle = window.selectedVehicle || staticVehicle;
	let history = useNavigate();
	const statisticKeys = ["SpecialPrice", "FuelType", "BodyStyle", "Exteriorcolor", "Interiorcolor", "Transmission", "DoorCount", "Mileage", "Engine", "Drivetrain", "Cylinders", "CityMPG", "HwyMPG", "Interiormaterial"];

	console.log(Object.keys(staticVehicle));
	return (
		<div className={classes.secondPageBody}>
			<div className={classes.logo}>
				<img src="Frame566.svg" alt="logo" onClick={()=>{history("/")}}/>
			</div>
			<div className={classes.pageContainer}>
				<div className={classes.comparePhotos}>
					<div className={classes.firstCar}>
						<img src={staticVehicle.PhotoURL} alt="static vehicle" />
						<div className={classes.vs}>
							<div></div>
							<span>vs</span>
							<div></div>
						</div>
						<img src={selectedVehicle.PhotoURL} alt="selected vehicle" />
					</div>
				</div>
				<p className={classes.centerPad}>14 FACTS IN COMPARISON</p>
				<div className={classes.titleBody}>
					<div className={classes.firstCar}>
						<h2>
							{staticVehicle.Make +
								" " +
								staticVehicle.Model +
								" " +
								staticVehicle.Year}
						</h2>
						<p>vs</p>
						<h2>
							{selectedVehicle.Make +
								" " +
								selectedVehicle.Model +
								" " +
								selectedVehicle.Year}
						</h2>
					</div>
				</div>
				<div className={classes.vehicleStatistics}>
					{statisticKeys.map((stat) => {
						return (
							<div className={classes.vehicleStat} key={stat}>
								<div className={classes.statName}>
									<p>{stat}</p>
								</div>
								<div>{staticVehicle[stat] || ""}</div>
                                <div className={classes.divider}></div>
								<div>{selectedVehicle[stat] || ""}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
