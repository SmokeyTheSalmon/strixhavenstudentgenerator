import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student, StudentValues } from '../model/student';

@Component({
  selector: 'app-student-generator',
  templateUrl: './student-generator.component.html',
  styleUrls: ['./student-generator.component.scss'],
})
export class StudentGeneratorComponent implements OnInit {
  studentValues!: StudentValues;
  currentStudent: Student = this.initializeStudent();

  constructor(private readonly client: HttpClient) {}

  ngOnInit(): void {
    this.client.get('./assets/values_student.json').subscribe(
      (values: any) => (this.studentValues = values),
      null,
      () => this.newStudent()
    );
    console.log(this.studentValues);
  }

  newStudent() {
    this.currentStudent = this.generateStudent();
  }

  private initializeStudent(): Student {
    return {
      adjective: '',
      race: '',
      campus: '',
      location: '',
      backstory: '',
    };
  }

  private generateStudent(): Student {
    return {
      adjective: this.generateAdjective(this.studentValues.adjective),
      race: this.generateAttribute(this.studentValues.race),
      campus: this.generateAttribute(this.studentValues.campus),
      location: this.generateAttribute(this.studentValues.location),
      backstory: this.generateAttribute(this.studentValues.backstory),
    };
  }

  private generateAttribute(options: string[]) {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  private generateAdjective(adjectives: string[]) {
    const adjective = this.generateAttribute(adjectives);
    return adjective.match(/^[e|a|u|o|i]/) ? `An ${adjective}` : `A ${adjective}`;
  }
}
