(function () {
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
            people: [
                { name: 'Craig', state: 'CA', price: 100 },
                { name: 'John', state: 'FL', price: 200 },
                { name: 'Dan', state: 'AZ', price: 500 },
                { name: 'Elijah', state: 'TN', price: 750 }
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
            people: [
                { name: 'Craig', state: 'CA', price: 100 },
                { name: 'John', state: 'FL', price: 200 },
                { name: 'Dan', state: 'AZ', price: 500 },
                { name: 'Elijah', state: 'TN', price: 750 }
            ]
        };
        var total = _.reduce(data.people, function (memo, value) {
            return {price: (memo.price + value.price)};
        });
        $('#result').append('<p>Total price: $' + total.price + '</p>');
    });
})();