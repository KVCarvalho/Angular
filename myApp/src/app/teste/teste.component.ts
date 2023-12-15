import { Component, OnInit } from '@angular/core';
import { TesteService } from "../teste.service";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  constructor(
    private service: TesteService
  ){}
  ngOnInit(): void {
    this.service.getAgent()
  }
}
