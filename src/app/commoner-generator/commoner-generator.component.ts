import { Component, OnInit } from '@angular/core';
import { Commoner, CommonerValues } from '../model/commoner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commoner-generator',
  templateUrl: './commoner-generator.component.html',
  styleUrls: ['./commoner-generator.component.scss']
})
export class CommonerGeneratorComponent implements OnInit {
commonerValues!: CommonerValues;
  currentCommoner: Commoner = this.initCommoner();

  constructor(private readonly client: HttpClient) {}

  ngOnInit(): void {
    this.client.get('./assets/values_commoner.json').subscribe(
      (values: any) => (this.commonerValues = values),
      null,
      () => this.new()
    );
    console.log(this.commonerValues);
  }

  new() {
    this.currentCommoner = this.summonAGuy();
  }

  private initCommoner(): Commoner {
    return {
      adjective: '',
      race: '',
      profession: '',
      location: '',
      backstory: '',
    };
  }

  private summonAGuy(): Commoner {
    return {
      adjective: this.generateAdjective(this.commonerValues.adjective),
      race: this.generateAttribute(this.commonerValues.race),
      profession: this.generateAttribute(this.commonerValues.profession),
      location: this.generateAttribute(this.commonerValues.location),
      backstory: this.generateAttribute(this.commonerValues.backstory),
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
