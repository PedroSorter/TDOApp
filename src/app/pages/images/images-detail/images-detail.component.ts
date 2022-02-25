import { Component, OnInit } from '@angular/core';
import { DataService }  from 'src/app/core/services/web-service/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-images-detail',
  templateUrl: './images-detail.component.html',
  styleUrls: ['./images-detail.component.scss']
})
export class ImagesDetailComponent implements OnInit {

  base64Image: any;

  constructor(private dataService : DataService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.dataService.imagePathing.subscribe({
      next: (imagePath: string) =>  {
        this.base64Image = this.domSanitizer.bypassSecurityTrustUrl(imagePath);
        console.log(this.base64Image);
      },
      complete: () => {},
      error: () => {}
    })
  }
}
