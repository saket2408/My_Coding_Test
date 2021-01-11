import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test-app';
  user = "Saket";
  tasks : any = [
    {
      name: "Email Template Design",
    },
    {
      name: "ArtWork Poster",
    },
    {
      name: "Design Homepage",
    }
  ]

  taskObject : any ={};

  saveForm(taskObject :Object){
    this.tasks.push({
      name : taskObject['taskName'],
      date : taskObject['dateTime']
    });
    alert("Your entry is saved");
  }
}
