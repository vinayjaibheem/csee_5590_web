var app = angular.module("youtubeSearchAPP", []);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        "self",
        "https://www.youtube.com/**"
    ]);
});

app.controller("youtubeSearchCtrl", function($scope, $http) {
    "use strict";
    var KEY = "AIzaSyA2acrwQ4MTsITZyMqz8SowOp2dedcz1Ek";
    $scope.videoList = new Array();

    $scope.getVideoId = function() {
        var searchText = document.getElementById("searchText").value;
        $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=videos" + "&q=" + searchText + "&key=" + KEY).then(function(response) {
            $scope.videoList = response.data.items;
        });
    };

    $scope.getIframeSrc = function(src) {
        return "https://www.youtube.com/embed/" + src;
    };
});