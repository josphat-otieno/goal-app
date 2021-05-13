import { Component, OnInit } from '@angular/core';
// import { title } from 'process';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
  // styles: ['h1 {color: red} ']

})

export class GoalComponent implements OnInit {
  goals:Goal[]=[
    new Goal(1, "Watch the Walking Dead", "Find an online version and watch merlin find his son",new Date(2020,3,14)),
    new Goal(2, "Buy some cookies", "I have to buy cookies for the parrot", new Date(2019,6,9)),
    new Goal(3, "Get new phone case", "Diana has her birthday coming up soon", new Date(2022,6,9)),
    new Goal(4, "Get dog food", "Pupper likes expensive sancks", new Date(2019,7,9)),
    new Goal(5, "solve math homework", "Damn Math", new Date(2029,6,9)),
    new Goal(6, "plot my world domination plan", "Cause I am an evil overlord", new Date(2030,6,9))
    // {id:1, name:"watch finding Nemo", description:"Find an online version and watch merlin find his son'"},
    // {id:2, name:"Buy some cookies", description:"I have to buy cookies for the parrot"},
    // {id:3, name:"Get new phone case", description:"Diana has her birthday coming up soon" },
    // {id:4, name:"Get dog food", description:"Pupper likes expensive sancks"},
    // {id:5, name:"solve math homework", description:"Damn Math"},
    // {id:6, name:"plot my world domination plan", description:"Cause I am an evil overlord"},
  ];
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription
  }
  //  completeGoal(isComplete, index){
  //    if(isComplete){
  //      this.goals.splice(index, 1) 
  //     }
  //  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal){
    let goalLength= this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
