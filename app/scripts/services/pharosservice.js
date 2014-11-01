'use strict';

/**
 * @ngdoc service
 * @name pharosWebApp.pharosService
 * @description
 * # pharosService
 * Service in the pharosWebApp.
 */
angular.module('pharosWebApp')
  .service('pharosService', function pharosService($resource) {
    var host = 'http://192.168.1.37:4444';
    var requestNode = function(callback){
      return $resource(host+'/node', {}, {'query': {method: 'GET', isArray: false}}).query(function(data){
        callback(data);
      });
    };
    var requestNodeData = function(containerName, callback){
      return $resource(host+'/node/' + containerName + '/metrics', {}, {'query': {method: 'GET', isArray: false}}).query(function(data){
        callback(data);
      });
    };
    var requestContainer = function(callback){
      return $resource(host+'/containers', {}, {'query': {method: 'GET', isArray: false}}).query(function(data){
        callback(data);
      });
    };
    var requestContainerName = function(containerName, callback){
      return $resource(host+'/node/' + containerName + '/metrics', {}, {'query': {method: 'GET', isArray: false}}).query(function(data){
        callback(data);
      });
    };
    var requestContainerId = function(containerId, callback){
      return $resource(host+'/containers/' + containerId, {}, {'query': {method: 'GET', isArray: false}}).query(function(data){
        callback(data);
      });
    };
    return {
      node: requestNode,
      nodeData: requestNodeData,
      container: requestContainer,
      containerName: requestContainerName,
      containerId: requestContainerId
    };
  });
