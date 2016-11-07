angular.module('Heroes')
    .factory('heroesFactory', heroesFactory);

heroesFactory.$inject = ['$http'];

function heroesFactory ($http) {

    return {

        createHero : function(heroData){
            return $http.post('/api/heroes', heroData)
        },

        getHero : function(heroID){
            heroID = heroID ? '/' + heroID : ''
            return $http.get('/api/heroes' + heroID)
        }

    }
}