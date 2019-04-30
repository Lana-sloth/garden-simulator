(function(){
    'use strict';
    angular.module('Garden', [])
    .controller('GardenCtrl', GardenCtrl);

    function GardenCtrl($interval){
        var garden = this;
        garden.plant = {
            watered: true,
            lastWatered: new Date()
        }
        garden.changeWateredStatus = function(){
            let now = new Date();
            if (now > garden.plant.lastWatered) {
                garden.plant.watered = false;
            }
        }
        garden.waterPlant = function(){
            garden.plant.watered = true;
            garden.plant.lastWatered = new Date();
        }
        $interval(function(){
            garden.changeWateredStatus();
        }, 5000)
    }
})()