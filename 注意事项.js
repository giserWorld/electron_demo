/** 
 * 1.electron-packager参数说明:
 * ./表示当前路径
    Myexe ：exe应用的名称
    platform: 打包平台 darwin, linux, mas, win32或者选择all
    arch: 可选 ia32, x64, armv7l, arm64或者选择all
    electron-version： electron的版本（）
    out：生成的exe保存目录
    overwrite:使用了这个参数，每次打包就不用把原来exe删除，可直接覆盖了。
 *2.electron安装说明:
 *  1)淘宝镜像cnpm, npm install -g cnpm --registry=https://registry.npm.taobao.org
 *  2)淘宝镜像安装之后还需要安装cnpm install -g electron
 *  3)重新安装依赖
      cnpm install electron --save
      cnpm install electron-packager --save-dev
*/
//electron-builder打包配置
const build={
   "productName":"离线web安装包",//exe安装包名字
   "appId": "app20220211",//包名
   "copyright":"app©20220211",//版权信息
   "directories": {//打包输出目录
     "output": "app_file"
   }, 
   "nsis": {
     "oneClick": false,//是否一键安装
     "allowElevation": true,
     "allowToChangeInstallationDirectory": true,//允许修改安装目录
     "installerIcon": "./app/images/256x256.ico",//安装图标
     "uninstallerIcon": "./app/images/256x256.ico",//卸载图标
     "installerHeaderIcon": "./app/images/256x256.ico",//安装时头部图标
     "createDesktopShortcut": true,//创建桌面图标
     "createStartMenuShortcut": true,//创建开始菜单图标
     "shortcutName": "离线web"//快捷方式名字
   },
   "win": {
     "icon": "app/images/256x256.ico",//安装包图标
     "target": [
       {
         "target": "nsis",
         "arch": [
           "ia32"
         ]
       }
     ]
   }
}