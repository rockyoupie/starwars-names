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
		it('should return an array of random numbers if passed a number',function(){
			var randomItems=starWars.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item){
				expect(starWars.all).to.include(item);
			});
		});

	});
});