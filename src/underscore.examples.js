(function () {

    var log = function (contents) {
        $('#result').empty();
        if (_.isArray(contents)) {
            _.each(contents, function (e, i, l) {
                log(e);
            });
        } else {
            logRaw('<li>' + contents + '</li>');
        }
    };
    var logBold = function (contents) {
        $('#result').empty();
        logRaw('<br /><b>' + contents + '</b>');
    };

    var logRaw = function (contents) {
        $('#result').append(contents);
    };
    var logProperty = function (obj, key, list) {
        // This function can be called directly or
        // as an iterator. If it's called as an iterator for an array,
        // then the key name is passed in as the context
        // and is used insted of the 'key' argument
        // which at that time will really be the array index.
        var k = (_.isUndefined(list)) ? key : this.toString();
        log(obj[k]);
    };
    //-------------------------- Map -------------------------------
    //Example 1
    $('#mapExample1').click(function () {
        $('#result').empty();
        var names = ['Craig', 'john', 'Dan', 'Elijah'],
            m = _.map(names, function (name) {
                $('#result').append('<p>' + name + '</p>');
                return name + 'is mapped from an array.';
            });
    });
    //Example 2
    $('#mapExample2').click(function () {
        $('#result').empty();

        var names = ['Craig', 'john', 'Dan', 'Elijah'],
            greet = function (name) {
                $('#result').append('<p>' + 'Hello ' + name + '!' + '</p>');
            };

        m = _.map(names, greet);
    });
    //-------------------------- Reduce -------------------------------
    //Example 1
    $('#reduceExample1').click(function () {
        $('#result').empty();
        var values = [100, 200, 100];

        var sum = _.reduce(values, function (memo, num) {
            $('#result').append('<p>Calculating: ' + memo + ' +  ' + num + '</p>');
            return memo + num;
        });
    });
    //Example 2
    $('#reduceExample2').click(function () {
        $('#result').empty();
        data = {
            people: [{
                name: 'Craig',
                state: 'CA',
                price: 100
            },
            {
                name: 'John',
                state: 'FL',
                price: 200
            },
            {
                name: 'Dan',
                state: 'AZ',
                price: 500
            },
            {
                name: 'Elijah',
                state: 'TN',
                price: 750
            }
            ]
        };
        var total = _.reduce(data.people, function (memo, value) {
            return memo + value.price;
        }, 0);
        $('#result').append('<p>Total price: ' + total + '</p>');
    });
    $('#reduceExample3').click(function () {
        $('#result').empty();
        data = {
            people: [{
                name: 'Craig',
                state: 'CA',
                price: 100
            },
            {
                name: 'John',
                state: 'FL',
                price: 200
            },
            {
                name: 'Dan',
                state: 'AZ',
                price: 500
            },
            {
                name: 'Elijah',
                state: 'TN',
                price: 750
            }
            ]
        };
        var total = _.reduce(data.people, function (memo, value) {
            return {
                price: (memo.price + value.price)
            };
        });
        $('#result').append('<p>Total price: $' + total.price + '</p>');
    });
    //-------------------------- Reduce Right-------------------------------
    $('#reduceRightExample').click(function () {
        $('#result').empty();
        var productIDs = [
            [1001, 1002],
            [2001, 2005],
            [3005, 2050],
            [2017, 2016],
            [6055, 2530]
        ];
        var productIDList = _.reduceRight(productIDs, function (memo, val) {
            if (memo !== '') {
                memo += ',';
            }
            return memo + val.reverse().join(',');
        }, '');
        $('#result').append('<p>' + productIDList + '</p>');
    });

    //-------------------------- find-------------------------------
    $('#findExample').click(function () {
        $('#result').empty();
        var values = [1, 5, 8, 6, 4, 5, 7, 5, 3, 7, 54, 55, 4, 56, 44, 5, 5, 4, 5, 55, 44, 22, 55, 99, 77, 66, 44, 22, 11],
            evenCriteria = function (value) {
                return value % 2 === 0;
            },
            oddCriteria = function (value) {
                return value % 2 !== 0;
            };
        greaterThanEightCriteria = function (value) {
            return value > 8;
        };
        lessThanFiveCriteria = function (value) {
            return value < 5;
        };
        $('#result').append('<p>First even number :' + _.find(values, evenCriteria) + '</p>');
        $('#result').append('<p>First odd number :' + _.find(values, oddCriteria) + '</p>');
        $('#result').append('<p>First number > 8 :' + _.find(values, greaterThanEightCriteria) + '</p>');
        $('#result').append('<p>First number < 5 :' + _.find(values, lessThanFiveCriteria) + '</p>');
    });
    //-------------------------- filter -------------------------------
    $('#filterExample').click(function () {
        $('#result').empty();
        var values = [1, 5, 8, 6, 4, 5, 7, 5, 3, 7, 54, 55, 4, 56, 44, 5, 5, 4, 5, 55, 44, 22, 55, 99, 77, 66, 44, 22, 11],
            evenCriteria = function (value) {
                return value % 2 === 0;
            },
            oddCriteria = function (value) {
                return value % 2 !== 0;
            };
        greaterThanEightCriteria = function (value) {
            return value > 8;
        };
        lessThanFiveCriteria = function (value) {
            return value < 5;
        };

        $('#result').append('<p>First even number :' + _.filter(values, evenCriteria) + '</p>');
        $('#result').append('<p>First odd number :' + _.filter(values, oddCriteria) + '</p>');
        $('#result').append('<p>First number > 8 :' + _.filter(values, greaterThanEightCriteria) + '</p>');
        $('#result').append('<p>First number < 5 :' + _.filter(values, lessThanFiveCriteria) + '</p>');
    });
    $('#filterExample2').click(function () {
        values = [
            {
                name: 'Craig',
                state: 'CA',
                price: 100
            },
            {
                name: 'John',
                state: 'FL',
                price: 200
            },
            {
                name: 'Dan',
                state: 'AZ',
                price: 500
            },
            {
                name: 'Elijah',
                state: 'TN',
                price: 750
            }

        ];
        evenCriteria = function (value) {
            return value.price % 2 === 0;
        },
            oddCriteria = function (value) {
                return value.price % 2 !== 0;
            };
        greaterThanEightCriteria = function (value) {
            return value.price > 8;
        };
        lessThanFiveCriteria = function (value) {
            return value.price < 5;
        };

        _.each(_.filter(values, evenCriteria), logProperty, 'price');
        _.each(_.filter(values, oddCriteria), logProperty, 'price');
        _.each(_.filter(values, greaterThanEightCriteria), logProperty, 'price');
        _.each(_.filter(values, lessThanFiveCriteria), logProperty, 'price');
    });
        $('#filterExample3').click(function () {
        $('#result').empty();
        var artists = ['Led Zeppelin', 'ACDC', 'Rolling Stones'],
            artistTemplate = _.template(
                '<% _.each(artists, function(artist, index, artists) { %>' +
                '<li><%= artist %></li>' +
                '<% }); %>'
            ),
            content = artistTemplate({
                artists: _.filter(artists, function (artist, index, artists) {
                    return artist === 'ACDC';
                })
            });

        var container = document.createElement('ol');
        container.innerHTML = content;
        $('#result').append(container);
    });
    //-------------------------- where -------------------------------
    $('#whereExample').click(function () {
        var courses = [{
            title: 'Structuring JavaScript Code',
            author: 'Dan Wahlin',
            level: 'Intermediate'
        },
        {
            title: 'Introduction to Building Windows 8 Applications',
            author: 'Dan Wahlin',
            level: 'Beginner'
        },
        {
            title: 'Introduction to ASP.NET 4 WebForms',
            author: 'Dan Wahlin',
            level: 'Beginner'
        },
        {
            title: 'HTML5 Fundamentals',
            author: 'Craig Shoemaker',
            level: 'Beginner',
        },
        {
            title: 'Single Page Apps with HTML5, Web API, Knockout and jQuery',
            author: 'John Papa',
            level: 'Intermediate'
        },
        {
            title: 'Front-End First: Testing and Prototyping JavaScript Apps',
            author: 'Elijah Manor',
            level: 'Intermediate'
        }
        ];
        logBold('Intermediate Courses');
        _.each(_.where(courses, {
            level: 'Intermediate'
        }), logProperty, 'title');
        logBold('John Papa courses');
        _.each(_.where(courses, {
            author: 'John Papa'
        }), logProperty, 'title');
    });
    $('#findWhereExample').click(function () {
        var courses = [{
            title: 'Structuring JavaScript Code',
            author: 'Dan Wahlin',
            level: 'Intermediate'
        },
        {
            title: 'Introduction to Building Windows 8 Applications',
            author: 'Dan Wahlin',
            level: 'Beginner'
        },
        {
            title: 'Introduction to ASP.NET 4 WebForms',
            author: 'Dan Wahlin',
            level: 'Beginner'
        },
        {
            title: 'HTML5 Fundamentals',
            author: 'Craig Shoemaker',
            level: 'Beginner',
        },
        {
            title: 'Single Page Apps with HTML5, Web API, Knockout and jQuery',
            author: 'John Papa',
            level: 'Intermediate'
        },
        {
            title: 'Front-End First: Testing and Prototyping JavaScript Apps',
            author: 'Elijah Manor',
            level: 'Intermediate'
        }
        ];
        logBold('Intermediate Courses');
        _.each(_.findWhere(courses, {
            level: 'Intermediate'
        }), logProperty, 'title');
        logBold('Dan Wahlin courses');
        _.each(_.findWhere(courses, {
            author: 'Dan Wahlin',
            level: 'Intermediate'
        }), logProperty, 'title');
    });
    $('#isEmptyExample').click(function () {
        logBold(_.isEmpty({}));
    });
    $('#flattenExample').click(function () {
        logBold(_.flatten([[0, 1], [2, 3], [4, 5], [7, 4, 5, 6]]));
    });
    $('#rangeExample').click(function () {
        logBold(_.range([15]));
    });
    $('#templateExample').click(function () {
        var compileTemplate = _.template('hello: <%= name %>');
        logBold(compileTemplate({ name: 'Test Name' }));
    });
    $('#eachExample').click(function () {
        $('#result').empty();
        var artists = ['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones'];
        var eachTemplate = _.template('<p><%= text %></p>');
        _.each(artists, function (artist, index, artists) {
            $('#result').append(eachTemplate({ text: artist }));
        });
    });
    $('#eachExample1').click(function () {
        $('#result').empty();
        var artists = ['Led Zeppelin', 'ACDC', 'Rolling Stones'],
            artistTemplate = _.template(
                '<% _.each(artists, function(artist, index, artists) { %>' +
                '<li><%= artist %></li>' +
                '<% }); %>'
            ),
            content = artistTemplate({
                artists: artists
            });

        var container = document.createElement('ol');
        container.innerHTML = content;
        $('#result').append(container);
    });

})();