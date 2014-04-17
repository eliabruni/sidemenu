angular.module('starter.services', [])

/**
 * A simple example service that returns some categories.
 */
.factory('Categories', function() {
        // Might use a resource here that returns a JSON array

        // Some fake categories
        var categories = [
            { name: 'Food', icon: 'ion-fork', thumb: "img/food.jpg",
                myPlaces: [{name: 'Nadamas', address: 'Piazza Erbe', image: 'img/nadamas.jpg', id: 0},
                         {name: 'Walthers', address: 'Piazza Walther', image: 'img/walthers.jpg', id: 1 }],
                otherPlaces: [{name: 'Walthers', address: 'Piazza Walther', image: 'img/walthers.jpg', id: 0 },
                    {name: 'Nadamas', address: 'Piazza Erbe', image: 'img/nadamas.jpg', id: 1}],
                id: 0 },
            { name: 'Coffee', icon: 'ion-coffee', thumb: "img/coffee.jpg", id: 1 },
            { name: 'Outdoors', icon: 'ion-camera', thumb: "img/outdoors.jpg", id: 2 },
            { name: 'Nightlife', icon: 'ion-ios7-star', thumb: "img/nightlife.jpg", id: 3 },
            { name: 'Shopping', icon: 'ion-ios7-cart', thumb: "img/shopping.jpg", id: 4 },
            { name: 'Entertainment', icon: 'ion-ios7-wineglass', thumb: "img/entertainment.jpg", id: 5 }
        ];

        return {
            all: function () {
                return categories;
            },
            get: function (categoryId) {
                // Simple index lookup
                return categories[categoryId];
            }

        }

})


.factory('Cards', function() {

    var cardTypes = [
        { title: 'Swipe down to clear the card', image: 'img/pic.png', id:0 },
        { title: 'Where is this?', image: 'img/pic.png' ,id:1},
        { title: 'What kind of grass is this?', image: 'img/pic2.png', id:2 },
        { title: 'What beach is this?', image: 'img/pic3.png', id:3 },
        { title: 'What kind of clouds are these?', image: 'img/pic4.png', id:4 }
    ];

    return {
        all: function () {
            return cardTypes;
        }

    }

});

