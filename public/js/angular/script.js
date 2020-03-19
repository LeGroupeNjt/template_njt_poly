angular.module('myapp', []).controller('ListController', function($scope, ClientsFactory) {
	var Model = ClientsFactory;
    $scope.conjointDetails = [];
    $scope.conjointchekin;
    $scope.conjointChekout;
    $scope.customer_id;
	$scope.addNewConjoint = function(personalDetail){
		$scope.conjointDetails.push(personalDetail);
	};

	$scope.removeConjoint = function(indice){
		$scope.conjointDetails.splice(indice, 1);  
	};
	
	
	$scope.getRoomByType = function(conjoint) {
		if((conjoint.conjointchekin == 1 && conjoint.conjointChekinOther == undefined) || (conjoint.conjointchekout == 1 && conjoint.conjointChekoutOther == undefined)){
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">Veuillez choisir la date de check-in et Check-out !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
			});			
		}
		else if((conjoint.conjointchekin == undefined && $('#datepicker').val() == '') || (conjoint.conjointchekout == undefined && $('#datepicker1').val() == '')){
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">Veuillez choisir la date de check-in et Check-out !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
			});			
		}
		else{
			$scope.conjointchekin = conjoint.conjointChekinOther;
			$scope.conjointChekout = conjoint.conjointChekoutOther;
			$scope.customer_id = conjoint.customer_id;
			if(conjoint.conjointchekin == undefined || (conjoint.conjointchekin == 1 && conjoint.conjointChekinOther == undefined))
				$scope.conjointchekin = $('#datepicker').val();
			if(conjoint.conjointChekout == undefined || (conjoint.conjointchekin == 1 && conjoint.conjointChekinOther == undefined))
				$scope.conjointChekout = $('#datepicker1').val();		
			if(conjoint.customer_id == undefined)
				$scope.customer_id = 0;
			
			Model.getRoomsConjoint(conjoint.room_type_id, $scope.conjointchekin, $scope.conjointChekout, $scope.customer_id).success(function(data){
				//console.log(data);
	    		conjoint.room_type_data = data;
	    	});			
		}
	};			
	
	$scope.GetRooms = function(conjoint, room_id){
			if(conjoint.room_id != room_id)
				$scope.getRoomByType(conjoint);
			else
				conjoint.room_type_id = "0";

			if(conjoint.conjointchekin == "1")
				conjoint.conjointChekinOther = conjoint.checkin;
			
			if(conjoint.conjointChekout == "1")
				conjoint.conjointChekoutOther = conjoint.checkout;
	};
		
});