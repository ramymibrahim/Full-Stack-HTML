import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, AfterViewInit, OnDestroy {
  timer: any;

  ngAfterViewInit(): void {
    // Related carousel
    $('.related-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      console.log(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
