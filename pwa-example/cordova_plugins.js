cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.bluefletch.bluebird/www/barcodescanner.js",
        "id": "com.bluefletch.bluebird.BluebirdBarcodeScanner",
        "pluginId": "com.bluefletch.bluebird",
        "clobbers": [
            "bluebirdBarcodeScanner"
        ]
    },
    {
        "file": "plugins/com.bluefletch.bluebird/www/magstripe.js",
        "id": "com.bluefletch.bluebird.BluebirdMagStripeReader",
        "pluginId": "com.bluefletch.bluebird",
        "clobbers": [
            "bluebirdMagstripe"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
        "id": "cordova-plugin-google-analytics.UniversalAnalytics",
        "pluginId": "cordova-plugin-google-analytics",
        "clobbers": [
            "analytics",
            "ga"
        ]
    },
    {
        "file": "plugins/cordova-plugin-google-analytics/browser/UniversalAnalyticsProxy.js",
        "id": "cordova-plugin-google-analytics.UniversalAnalyticsProxy",
        "pluginId": "cordova-plugin-google-analytics",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
        "id": "cordova-plugin-nativestorage.mainHandle",
        "pluginId": "cordova-plugin-nativestorage",
        "clobbers": [
            "NativeStorage"
        ]
    },
    {
        "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
        "id": "cordova-plugin-nativestorage.LocalStorageHandle",
        "pluginId": "cordova-plugin-nativestorage"
    },
    {
        "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
        "id": "cordova-plugin-nativestorage.NativeStorageError",
        "pluginId": "cordova-plugin-nativestorage"
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/dff-cordova-plugin-honeywell/www/honeywell.js",
        "id": "dff-cordova-plugin-honeywell.honeywell",
        "pluginId": "dff-cordova-plugin-honeywell",
        "clobbers": [
            "Honeywell"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/browser/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "phonegap-plugin-barcodescanner",
        "runs": true
    },
    {
        "file": "plugins/dff-cordova-plugin-common/www/common.js",
        "id": "dff-cordova-plugin-common.common",
        "pluginId": "dff-cordova-plugin-common",
        "clobbers": [
            "CommonPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.bluefletch.bluebird": "0.1.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-google-analytics": "1.8.3",
    "cordova-plugin-nativestorage": "2.2.2",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-themeablebrowser": "0.2.17",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-sqlite-storage": "2.0.4",
    "dff-cordova-plugin-honeywell": "0.0.1",
    "ionic-plugin-keyboard": "2.2.1",
    "phonegap-plugin-barcodescanner": "6.0.8",
    "cordova-plugin-compat": "1.2.0",
    "dff-cordova-plugin-common": "2.0.5"
}
// BOTTOM OF METADATA
});