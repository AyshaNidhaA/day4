import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  industry:any=[
    {
      id:1,
      title:'aerospace and defence',
      image:'https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/topics/manufacturing/ey-air-national-guard-fly-high-over-new-england-during-a-training-mission.jpg',
      description:'',
    
    },
    {
      id:2,
      title:'banking and financial service',
      image:'https://etimg.etb2bimg.com/photo/88550921.cms',

      description:'aer',
    },
    {
      id:3,
      title:'healthcare',
      image:'https://itchronicles.com/wp-content/uploads/2020/06/technology-in-healthcare.jpg',
      description:'aer',
    },
    {
      id:4,
      title:'mobility',
      image:'https://www.tno.nl/publish/pages/1130/impact-smart-mobility-transport-system.jpg',
      description:'aer',
    },
    {
      id:5,
      title:'insurance',
      image:'https://tse1.mm.bing.net/th?id=OIP.Kzlur1lZCsiHR3U6U5UY3wHaDu&pid=Api&P=0&h=180',
      description:'aer',
    },
    {
      id:6,
      title:'locomotive',
      image:'https://www.theasset.com/storage/Image/2021/Mar/1614840402insurtechwebsite(1).jpg',
      description:'aer',
    },
    {
      id:7,
      title:'industrial',
      image:'https://1348661504.rsc.cdn77.org/.uc/i882c97f601026fc6250057fc4502f49e5268ce37db8a0701c3dc05000080/lasrobot.jpg',
      description:'aer',
    },
  ]

}
