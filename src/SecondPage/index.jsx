import classes from './index.module.scss'
import React, { useState, useEffect } from 'react'
import items from '../inv.json'

export default function CompareContent(){
    return(
        <div className={classes.secondPageBody}>
            <div className={classes.logo}>
                <img src="Frame566.svg" />
            </div>
            <div className={classes.pageContainer}>
                <div className={classes.comparePhotos}>
                    {
                        items && items.map(item =>{
                            if (item.VIN === "1FTEW1EG3HFB49446" ){
                                return <img src={item.PhotoURL} key={item.VIN}/>
                            }
                            if (item.VIN === "JM1GL1VM0L1515909" ){
                                return (
                                    <div className={classes.firstCar}>
                                        <img src={item.PhotoURL}/>
                                        <div className={classes.vs}>
                                            <div></div>
                                            <span>vs</span>
                                            <div></div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <p className={classes.centerPad}>66 FACTS IN COMPARISION</p>
                <div className={classes.titleBody}>
                    {
                        items && items.map(item =>{
                            if (item.VIN === "JM1GL1VM0L1515909" ){
                                return (
                                    <div className={classes.firstCar}>
                                        <h2>{item.Make +" "+item.Model+" "+ (item.Year)}</h2>
                                        <p>vs</p>
                                    </div>
                                )
                            }
                            if (item.VIN === "1FTEW1EG3HFB49446" ){
                                return (
                                    <h2>{item.Make +" "+item.Model+" "+ (item.Year)}</h2>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div> 
    )
}