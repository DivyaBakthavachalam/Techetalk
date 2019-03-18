import { Component ,ViewChild, AfterViewInit} from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HomeComponent) home;
  title = 'TalkTech';
  term :String;
  ngAfterViewInit() {
    this.term = this.home.term
  }
}
