import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cse-haste-web';
}

export function getFileNativeUrl(file) {
  let url = null;
  if (undefined !== (<any>window).createObjectURL) {
    url = (<any>window).createObjectURL(file);
  } else if (undefined !== (<any>window).URL) {
    url = (<any>window).URL.createObjectURL(file);
  } else if (undefined !== (<any>window).webkitURL) {
    url = (<any>window).webkitURL.createObjectURL(file);
  }
  return url;
}
