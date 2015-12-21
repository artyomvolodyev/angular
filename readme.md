### Getting Started

On Windows/General:
1. Install NodeJS from https://nodejs.org/
2. ```npm cache clean``` Clean up some leftovers, may not be required always but doesn't hurt 
3. ```npm install -g ionic cordova bower gulp``` Installs Ionic+Cordova, Bower and Gulp
4. ```git clone https://gitlab.com/rhaenni/monkeyvpn-app.git``` Strongly suggested to clone into C:\ or similar so you end up with C:\monkeyvpn-app or a similar very SHORT path (long paths will often cause ```npm install``` to fail on windows since some dependencies will end up in subfolders that are longer than 256 characters)
5. CD into the project directory and continue with the below: 
6. ```npm install``` (in the repository)
7. ```bower install``` this is not required anymore as www/lib (directory where bower install would install all libraries that are defined in our bower.json) is committed to the Git repo now
8. ```ionic serve``` at this point you should see app running in the desktop browser

#### Following is only required to run on device and use plugins
9. ```ionic state restore``` this will install all cordova platforms (Android/iOS) and plugins so you can test on emulator/real devices
10. At this point its possible that many plugins are throwing errors and are half-missing (missing their .js files?) from the build, if that happens do ```ionic platform rm android``` and then ```ionic platform add android```
11. ```ionic run android``` this will run the app in the Android Emulator (if you have the Android SDK installed) or on an Android phone connected to your PC
12. Optional (not required for developers), only for creating Production Builds and Server Deploys, install Gnu on Windows from here https://github.com/bmatzelle/gow/releases/download/v0.8.0/Gow-0.8.0.exe (which install curl and other basic unix utils for win cmd prompt)

On Max OSX
1. Install NodeJS
2. Install Cordova, Ionic and Bower ```sudo npm install -g cordova ionic bower gulp```
3. ```git clone https://gitlab.com/rhaenni/monkeyvpn-app.git``` Clone Git Repo
4. ```sudo npm install``` (in the repository directory)
5. ```bower install``` this is not required anymore as www/lib (directory where bower install would install all libraries that are defined in our bower.json) is committed to the Git repo now
6. ```ionic serve``` at this point you should see app running in the desktop browser
7. ```ionic state restore```
8. At this point its possible that many plugins are throwing errors and are half-missing (missing their .js files?) from the build, if that happens do ```ionic platform rm ios``` and then ```ionic platform add ios```
9. ```ionic emulate ios``` or ```ionic run ios```



*Prerequisites*
 * Install Android SDK

1. `npm install -g ionic cordova`
2. `ionic platform add android`
3. `ionic build android`
4. `ionic emulate android`