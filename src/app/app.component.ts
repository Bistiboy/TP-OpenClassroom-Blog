import {Component} from '@angular/core';
import {Post} from './post';
import {P} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date = new Date();

  post = [
    {
      title: 'Test1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lectus sed augue varius aliquam eu sed lacus. Proin sodales fringilla odio sit amet scelerisque. Vivamus pharetra ullamcorper magna id pulvinar. Pellentesque dignissim bibendum ex, ut mattis turpis tristique eget. Duis orci dui, congue sit amet pretium at, pretium lacinia risus. Nullam ac laoreet velit. Suspendisse quis hendrerit urna. Curabitur eget fermentum nibh. Mauris vestibulum ipsum ut mi hendrerit facilisis. Cras at sollicitudin neque, id lobortis justo. Nullam vulputate et enim sed elementum. Mauris non sem diam.',
      loveIts: 0,
      created_at: this.date
    },
    {
      title: 'Test2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lectus sed augue varius aliquam eu sed lacus. Proin sodales fringilla odio sit amet scelerisque. Vivamus pharetra ullamcorper magna id pulvinar. Pellentesque dignissim bibendum ex, ut mattis turpis tristique eget. Duis orci dui, congue sit amet pretium at, pretium lacinia risus. Nullam ac laoreet velit. Suspendisse quis hendrerit urna. Curabitur eget fermentum nibh. Mauris vestibulum ipsum ut mi hendrerit facilisis. Cras at sollicitudin neque, id lobortis justo. Nullam vulputate et enim sed elementum. Mauris non sem diam.',
      loveIts: 0,
      created_at: this.date
    }
  ];



  posts: Array<Post>;


}
