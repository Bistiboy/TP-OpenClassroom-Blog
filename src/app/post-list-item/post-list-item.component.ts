import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()postItem2: any;

  constructor() { }

  ngOnInit() {
  }

  upgradeLoveits(namePost: string) {
    this.postItem2.loveIts += 1;
  }

  downgradeLoveits(namePost: string) {
    this.postItem2.loveIts -= 1;
  }

  getColor() {
    if (this.postItem2.loveIts > 0){
      return 'green';
    } else if (this.postItem2.loveIts < 0) {
      return 'red';
    }
  }
}
