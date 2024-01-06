import React from "react";
import { useSelector } from "react-redux";
import { habitsSelector } from "../../Redux/Selector";
import DailyHabitStatusComponent from "../Daily/DailyHabitStatusComponent";

function DailyHabitComponent(){
    
    const HABITS = useSelector(habitsSelector)

    return (<>
        {HABITS && HABITS.map((habit, index) => <DailyHabitStatusComponent key={index} habit={habit} />)}
    </>)

}

export default DailyHabitComponent();