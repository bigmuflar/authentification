angular.module('Heroes')
    .controller('homeController', homeController);

homeController.$inject = ['heroesFactory'];

function homeController (heroesFactory){
    var home = this;
    home.newHero = {};
    home.hero = {};
    home.heroList = [];
    home.greeting = 'Welcome to the Heroes of AJAX!';

    // heroesFactory.createHero().then

    home.createHero = function(){
        heroesFactory.createHero(home.newHero)
            .then(function(returnData){
                console.log('Response from server : ', returnData)
                home.newHero = {}; // reset the form
                home.getHero();
            });
    }

    home.getHero = function(heroID){
        heroesFactory.getHero(heroID)
            .then(function(returnData){
                if(returnData.data.length){
                    // if array (has length), store in heroList
                    home.heroList = returnData.data;
                }
                else{
                    // if not, store in hero
                    home.hero = returnData.data;
                }
            })
    }
    home.getHero(); // get many
    home.getHero("581a2941fba8172b747af12f"); // get one
}