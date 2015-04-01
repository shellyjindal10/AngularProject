(function(){
	var app = angular.module('store',[ ]);
	app.controller('MultipleStoreController',function(){
        this.product = gems;
	});

	var gems = [
	     {
			name:'sudipGautam',
			age:30,
	        company:"Yahoo",
		},
		{
	        name:'yaminiYadav',
			age:30,
	        company:"Google",
		}
	];
})();
