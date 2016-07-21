/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;



// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.
var pictureSource;
var destinationType;

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Model: ' + device.model + "<br/>" + 
                        'Device Cordova: ' + device.cordova + "<br/>" + 
                        'Device Platform: ' + device.platform + "<br/>" + 
                        'Device UUID: ' + device.uuid + "<br/>" + 
                        'Device Version: ' + device.version + "<br/>";
    
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.

function onPhotoDataSuccess(imageData){
    var smallImage = document.getElementById("smallImage");
    smallImage.style.display = "block";
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

function capturePhoto(){
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
                                {quality:50, destinationType: destinationType.DATA_URL});
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function onFail(message){
    alert("Error debido a:" + message);
}