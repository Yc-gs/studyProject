import { Component, OnInit, AfterContentInit } from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  showList = [
    {
      title: 'Angular6.0基础教程',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/base'
    },
    {
      title: 'Angular6.0发展',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/history'
    },
    {
      title: 'Angular6.0准备工作',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/pre'
    },
    {
      title: 'Angular6.0实战',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/go'
    },

    {
      title: 'JAVA基础教程',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/history'
    },
    {
      title: 'JAVA发展史',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/history'
    },
    {
      title: 'JAVA准备工作',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/history'
    },
    {
      title: 'JAVA实战',
      imgUrl: '../../../assets/images/Ant.svg',
      content: `
      <p>Angular有一段非常曲折的历史</p>
      <p>Angular有两段非常曲折的历史</p>
      <p>Angular有三段非常曲折的历史</p>
      `,
      link: '/web/history'
    }
  ];
  noneHide = true;
  searchContent = null;

  constructor(private noneShowGlobal: GlobalService) { }
  ngAfterContentInit() {
    this.noneHide = this.noneShowGlobal.noneShow;
    console.log(this.noneShowGlobal.noneShow);
  }
  ngOnInit() {
  }

}
