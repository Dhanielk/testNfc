import { Component, OnInit } from '@angular/core';
import { ElectronService } from "ngx-electron";
import { NFC } from 'nfc-pcsc';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private isFullScreen: boolean = false;

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
    const nfc = new NFC();
  }

  windowMinimize() {
    this._electronService.remote.getCurrentWindow().minimize();
  }

  windowResize() {
    let currentWindow = this._electronService.remote.getCurrentWindow();

    if (currentWindow.isMaximized()) {
      currentWindow.unmaximize();
    } else {
      currentWindow.maximize();
    }
  }

  windowFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    this._electronService.remote.getCurrentWindow().setFullScreen(this.isFullScreen);
  }

  windowClose() {
    this._electronService.remote.app.quit();
  }

}
