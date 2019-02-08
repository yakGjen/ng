import {Component, OnInit} from '@angular/core';

import '../assets/js/index';

/*function burgerAnim() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  console.log(burger);
  burger.addEventListener('click', function(event) {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('menu-display');
    setTimeout(() => {
      menu.classList.toggle('show-menu');
    }, 0);
  }, false);
}*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  burgerAnim() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function(event) {
      burger.classList.toggle('burger-active');
      menu.classList.toggle('menu-display');
      setTimeout(() => {
        menu.classList.toggle('show-menu');
      }, 0);
    }, false);
  }

  ngOnInit(): void {
    this.burgerAnim();
  }

}
