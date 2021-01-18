import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";


let myCricketCoach = new CricketCoach();
let myGoalCoach = new GolfCoach();

// declare an array for coaches .... initially empty
let theCoaches: Coach[] = [];

// add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGoalCoach)

for (let tempCoach of theCoaches) {
  
    console.log(tempCoach.getDailyWorkout());
}