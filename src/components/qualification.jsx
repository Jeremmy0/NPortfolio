import React from 'react'
import * as FaIcons from "react-icons/fa"
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa'

const Qualification = ({title, subTitle, date, iconName}) => {
     const Icon = FaIcons[iconName]
    
  return (
        <div className="flex justify-between py-2 bb">
            <div >
                <h3 className="mb-2 ">{title} </h3>
                <div className="flex gap-2  "> <Icon/> {subTitle}</div>
            </div> 
            <div className="place-self-end">
                <span className="flex gap-1 text-xs md:text-sm "><FaCalendarAlt/> {date}  </span>    
            </div>
        </div>
  )
}

export default Qualification