import { Component, OnInit } from '@angular/core';
import {HotelFull} from "src/app/models/hotel";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "src/app/service/provider/data.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [
    trigger('myTrigger', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(200)),
    ]),
    trigger('clickCity', [
      state('open', style({
        color: 'gray'
      })),
      state('closed', style({
        color: 'red'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class DetailComponent implements OnInit {
  isClicked = true;
  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
  ) { }

  hotel: HotelFull;

  ngOnInit(): void {
    const hotelId = this.router.snapshot.paramMap.get("hotel_id")
    this.hotel = this.dataService.getHotelById(hotelId);
  }

  onBookClick() {

  }
}
