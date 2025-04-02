# vue项目改成electron桌面端应用

### 安装依赖

### 安装electron

> `npm install electron -g`

### 安装electron-builder

> `vue add electron-builder`

### 安装完如果报错输入

### 最新淘宝镜像地址：

> `npm config set registry https://registry.npmmirror.com/`

### 设置 Electron 二进制文件镜像（适用于所有平台）

> `npm config set electron_mirror "https://registry.npmmirror.com/mirrors/electron/"`

### 安装完成后：

> 来安装cnpm（<https://registry.npmmirror.com> 淘宝镜像 的地址 -> 淘宝镜像最新地址）

> `npm install -g cnpm --registry=https://registry.npmmirror.com`

> 1.执行`npm run serve` **正常打开网页端项目**

> 2.执行`npm run electron:serve` **打开桌面端应用**

### 打包网页端

> `npm run build`

### 打包桌面端

> `npm run electron:build`

> 打包成桌面端需要ico必须转网址：[在线图片转icon格式 – 图片转换成icon在线工具 – 迅捷PDF转换器在线免费版 (xunjiepdf.com)](https://app.xunjiepdf.com/img2icon/)

> 如果打包安装好应用后发现左上角图标不显示,需要在background.js里面添加代码

```js
//窗口属性样式
const path = require('path')
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
	//添加下面这一行代码解决左上角图标不显示的bug
    icon:path.join(__dirname,'books.ico'), // icon
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}
```

### 隐藏客户端默认菜单

> 找到background.js

```js
修改import { app, protocol, BrowserWindow , Menu } from 'electron'
添加Menu.setApplicationMenu(null)
```

#### Electron-Builder打包时报错could not find: “C:\Users\XX\AppData\Local\Temp\t-bDWVX6\0-messages.nsh“

> 打开 node_module/app-builder-lib/out/targets/nsis/NsisTarget.js文件，在 executeMakensis 方法中加入我们所需的参数

```js
//node_module/app-builder-lib/out/targets/nsis/NsisTarget.js
async executeMakensis(defines, commands, script) {
    const args = this.options.warningsAsErrors === false ? [] : ["-WX"];
    //此处新增
    args.push("-INPUTCHARSET", "UTF8");
    //结束
    for (const name of Object.keys(defines)) {
      const value = defines[name];

      if (value == null) {
        args.push(`-D${name}`);
      } else {
        args.push(`-D${name}=${value}`);
      }
}
```

### vue.config.js配置文件

```js
pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "appId": "com.example.app",
                "productName": "Code", //项目名，也是生成的安装文件名，即aDemo.exe
                "copyright": "zzf © 2023", //版权信息
                // "directories": {
                //     "output": "./dist_electron" //输出文件路径，之前编译的默认是dist_electron
                // },
                "win": {
                    "icon": "code.ico", //这里注意配好图标路径
                    "target": [{
                        "target": "nsis", //利用nsis制作安装程序
                        "arch": [
                            "x64", //64位
                            "ia32" //32位
                        ]
                    }]
                },
                "nsis": {
                    "oneClick": false, // 是否一键安装
                    "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                    "installerIcon": "code.ico",// 安装图标
                    "uninstallerIcon": "code.ico",//卸载图标
                    "installerHeaderIcon": "code.ico", // 安装时头部图标
                    "createDesktopShortcut": true, // 创建桌面图标
                    "createStartMenuShortcut": true,// 创建开始菜单图标
                    "shortcutName": "code", // 图标名称
                }
                // options placed here will be merged with default configuration and passed to electron-builder
            }
        }
}
```
> 如果npm run electron:build打包报错就先安装cnp淘宝镜像然后cnpm run electron:build就可以成功

> 如果报错缺少electron-v13.6.9-win32-x64.zip包，在C:\Users\Administrator\AppData\Local\electron\Cache路径添加photo-sphere-viewer项目里面的Cache里面的文件(都在gitee上面，从gitee上面下载下来就行)

#### electron包手动下载地址：https://registry.npmmirror.com/binary.html

### vite转electron安装教程

> 简单粗暴的办法就是手动下载：

> 截止到2024-06-05，淘宝镜像源资源地址为：CNPM Binaries Mirror https://registry.npmmirror.com/binary.html

> 打开后找到搜索electron，点击进入资源列表，找到版本30.0.9，继续点击进入找到对应的版本，点击下载，下载成功后，放进本地资源包地址：

> C:\Users\Administrator\AppData\Local\electron\Cache
                        
> 原文链接：https://blog.csdn.net/weixin_48082900/article/details/137065283


