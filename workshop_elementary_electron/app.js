var electron = require('electron');

electron.app.on('ready', function () {
    var mainWindow = new electron.BrowserWindow({
        width: 940,
        height: 5000, // 화면 크기보다 크면 자동으로 무시된다; macOS
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            enableRemoteModule: true,
        }, // bad for security #FIXME 
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});


