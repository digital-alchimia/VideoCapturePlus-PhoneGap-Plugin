function VideoCapturePlus() {
}

VideoCapturePlus.prototype.captureVideo = function (successCallback, errorCallback, options) {
  var win = function(pluginResult) {
    if (pluginResult.length) {
      successCallback(pluginResult[0].fullPath);
    }
    else {
      successCallback(null);
    }
  };
  cordova.exec(win, errorCallback, "VideoCapturePlus", "captureVideo", [options]);
};

VideoCapturePlus.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.videocaptureplus = new VideoCapturePlus();
  return window.plugins.videocaptureplus;
};

cordova.addConstructor(VideoCapturePlus.install);