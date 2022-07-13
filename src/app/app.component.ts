import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  interval;
  maxLimit;
  count = 0;
  timer = null;
  onStart() {
    if (!this.timer)
      this.timer = setInterval(() => {
        if (this.count <= this.maxLimit) ++this.count;
      }, this.interval);
  }
  onStop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }
  onReset() {
    this.count = 0;
    this.onStop();
  }
}
