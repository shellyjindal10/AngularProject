(function(){
	var app = angular.module('store',[ ]);
	app.controller('MultipleStoreController',function(){
        this.product = gems;
	});

	var gems = [
	     {
			name:'sudip Gautam',
			age:30,
	        company:"Yahoo",
	        images:[
		        {
		        	full:'img/watch.jpg'
		        }
	        ]
		},
		{
	        name:'yamini Yadav',
			age:28,
	        company:"Google",
		},
		{
	        name:'shelly jindal',
			age:32,
	        company:"apple",
		},
		{
	        name:'abc xyz',
			age:90,
	        company:"facebook",
		}
	];
})();
