const { app, BrowserWindow } = require('electron');

function createWindow() {
  // إنشاء نافذة المتصفح.
  const mainWindow = new BrowserWindow({
    fullscreen: true, // يضبط النافذة لتكون بوضع ملء الشاشة
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // وتحميل index.html من التطبيق.
  mainWindow.loadURL('http://localhost:3000/');
}

app.whenReady().then(createWindow);


