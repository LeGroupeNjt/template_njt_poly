angular.module("myapp").factory('ClientsFactory', function($http) {
    return {  
    	getRoomsConjoint: function(type_id, date_arrivee, date_depart, id) {
            return $http.get('/client/get-rooms-by-type/type/' + type_id +'/date_arrivee/' + date_arrivee + '/date_depart/' + date_depart + '/conjoin_id/' + id);
        },        
    }
});
