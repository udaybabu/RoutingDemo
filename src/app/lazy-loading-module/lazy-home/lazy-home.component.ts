import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lazy-home',
  templateUrl: './lazy-home.component.html',
  styleUrls: ['./lazy-home.component.scss']
})
export class LazyHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnClick() {
 // this.router.navigate(['/child1']);
 this.router.navigate(['lazy_child0'], { state: { example: 'Hello World' } });
  }

}
