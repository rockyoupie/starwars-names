var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function(){
	describe('all',function(){
		it('should be an array of strings', function(){
			expect(starWars.all).to.satisfy(isArrayOfStings);

			function isArrayOfStings(array){
				return array.every(function(item){
					return typeof item ==='string';
				})
			}
		});
		it('should contain Angel Marquez', function(){
			expect(starWars.all).to.include('Marquez Angel');
		});
	});

	describe('random', function(){
		it('should return a random item from the star wars.all', function(){
			var randomItem = starWars.random();
			expect(starWars.all).to.include(randomItem);
		});
	});
});