import { Component, OnInit } from '@angular/core';

import { Config, MyConstant } from './config';

@Component({
  selector: 'foorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // Ok - return a string
    console.log($localize`I'm from the app component`)
    console.log(Config.getLabel());

    // Not OK - return a LoclString
    console.log(Config.label);
    console.log(MyConstant);

  }
}
