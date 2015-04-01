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
			age:28,
	        company:"Google",
		},
		{
	        name:'shellyjindal',
			age:32,
	        company:"apple",
		},
		{
	        name:'jindahhsh',
			age:90,
	        company:"facebook",
		}
	];
})();
