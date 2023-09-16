import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-child0',
  templateUrl: './lazy-child0.component.html',
  styleUrls: ['./lazy-child0.component.scss']
})
export class LazyChild0Component implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit(): void {
   
  }

}
