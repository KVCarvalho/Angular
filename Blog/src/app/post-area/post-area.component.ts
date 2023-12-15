import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../data/dataFake";

@Component({
  selector: 'app-post-area',
  templateUrl: './post-area.component.html',
  styleUrls: ['./post-area.component.css']
})
export class PostAreaComponent {
  private id: String | null = "0";

  @Input()
  noticemainimg: String = "";
  @Input()
  noticetitle: String = "";
  @Input()
  noticetext: String = ""
  @Input()
  noticedate: String = "";

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("c")
    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: String | null){
    const result = dataFake.filter(article => article.identifier == id)[0]
    console.log(result);
    this.noticetitle = result.title;
    this.noticetext = result.text;
    this.noticemainimg = result.mainimg;
   
  }
}
