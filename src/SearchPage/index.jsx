import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.scss";
// import Autocomplete from '@mui/material/Autocomplete'
import { Typography, TextField, Box } from "@mui/material";
// import Autocomplete from 'react-autocomplete'
import FreeSoloCreateOption from "../FreeSolo/index";
// const countries = items

export default function SeachPage() {
	const [selectedName, setSelectedName] = useState("");

	let history = useNavigate();
	return (
		<div className={classes.SearchBody}>
			<img src="Group36.svg" alt="background" />
			<h2 className={classes.title}>IMPEL</h2>
			<div className={classes.centerContent}>
				<Typography variant="h3" align="center" pt={"11vh"}>
					COMPARE VEHICLE
				</Typography>
				<Typography variant="p" align="center" pt={"0.5vh"} display="block">
					DESCRIPTION
				</Typography>
				<br />
				<br />
				<div className={classes.inputs}>
					<div className={classes.vs}>
						<div></div>
						<span>vs</span>
						<div></div>
					</div>
					<div className={classes.inputContainer}>
						<input type="text" disabled value="Mazda Mazda6 (2020)" />
					</div>
					<div className={classes.inputContainer}>
						<FreeSoloCreateOption onChange={setSelectedName} />

						{/* <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 300 }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.Make +" "+option.Model+" "+ (option.Year)}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option.Make} {option.Model} ({option.Year}) + value
                                </Box>

                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Choose a country"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            /> */}
						{/* <Autocomplete
                        inputProps={{placeholder: "test"}}
                        getItemValue={(item) => item.Make + ' ' + item.Model + " ("+item.Year+")"}
                        items={items}
                        renderItem={(item, isHighlighted) =>
                            <div style={{ background: isHighlighted ? '#000' : '#444', padding: '5px', cursor: 'pointer' }}>
                            {item.Make + ' ' + item.Model + " ("+item.Year+")"}
                            </div>
                        }
                        value={selectedName}
                        onSelect={(val, item) => {setSelected(item.VIN); setSelectedName(val)}}
                        /> */}
					</div>
				</div>
				{/* <input type='text' placeholder='Vhicle default' className='vhicleDefault vhicleSearch'/> */}
				{/* <input type='text' placeholder='Vhicle default' className='vhicleSecond vhicleSearch'/> */}
				<div
					className={classes.inputContainer + " " + classes.compareContainer}
				>
					<button
						style={{ cursor: "pointer" }}
						onClick={() => {
							window.selectedVehicle = selectedName;
							history("compare");
						}}
					>
						Compare
					</button>
				</div>
			</div>
		</div>
	);
}
