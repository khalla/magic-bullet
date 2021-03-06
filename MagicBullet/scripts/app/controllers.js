﻿/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="services.ts" />
angular.module('starter.controllers', ['starter.services']).controller('AppCtrl', function ($scope) {
}).controller('PlaylistsCtrl', function ($scope, playlistSvc) {
    $scope.playlists = playlistSvc.all();
}).controller('PlaylistCtrl', function ($scope, $stateParams, playlistSvc) {
    $scope.playlist = playlistSvc.find($stateParams.playlistId);
});
//# sourceMappingURL=controllers.js.map
