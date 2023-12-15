import { Component, Input, 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent 
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy{

  @Input() nome: string = '';

  quantidade: number = 0;

  constructor(){
      console.log("Construtor");
  }
 

  mais(){
    this.quantidade++; 
  }
  menos(){
    this.quantidade--;
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("DoCheck");
  }
  ngOnChanges(): void {
      console.log("OnChange");
  }
  ngOnInit(): void {
      console.log("OnInit");
  }
}