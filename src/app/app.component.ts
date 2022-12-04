import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  clickItemHeader(item: string) {
    const el = document.getElementById(item);
    
    if (!!el)
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
  }
}
