(function(){
	var app = angular.module('store',[ ]);
	app.controller('StoreController',function(){
		this.product = gem;
	});
	
	var gem = {
		name:'shelly jindal',
		age:28,
        company:"Apple",
        canPurchase:true,
        soldout:false,
	};

	
})();
