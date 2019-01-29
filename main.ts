import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow;
let windowConfig: Electron.BrowserWindowConstructorOptions;
let serve;

const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

windowConfig = {
    width: 800,
    height: 600,
    frame: false
};

function createWindow() {
    mainWindow = new BrowserWindow(windowConfig);

    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`)
        });
        mainWindow.loadURL('http://localhost:4200');
    } else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    mainWindow.webContents.openDevTools({
        mode: 'undocked'
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});
