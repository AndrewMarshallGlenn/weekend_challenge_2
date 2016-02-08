var counter = 0;

$(document).ready(function(){
    getData();
    $('.buttons').on('click', '.next', function(){
        $('.person' + (counter + 1)).removeClass('highlighted');
        counter++;
        advanceData();
    });
    $('.buttons').on('click', '.previous', function(){
        $('.person' + (counter + 1)).removeClass('highlighted');
        if(counter === 0){counter = 1;}
        counter--;
        advanceData();
    });
});
function advanceData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            if(counter === 0){counter = data.people.length - 1;}
            if(counter >= data.people.length){counter = 0}
            $('.name').text(''+data.people[counter].name+'');
            $('.movie1').text(''+data.people[counter].favoriteMovie1+'');
            $('.movie2').text(''+data.people[counter].favoriteMovie2+'');
            $('.song').text(''+data.people[counter].favoriteSong+'');
            $('.person' + (counter + 1)).addClass('highlighted');
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}


function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            console.log(data);
            $.each(data.people, function(i, person) {
                $('.index').append('<span></span>');
                var $el = $('.index').children().last();
                $el.append(i+1);
                $el.addClass('person'+ (i+1));
            });
            $('.name').text(''+data.people[counter].name+'');
            $('.movie1').text(''+data.people[counter].favoriteMovie1+'');
            $('.movie2').text(''+data.people[counter].favoriteMovie2+'');
            $('.song').text(''+data.people[counter].favoriteSong+'');
            $('.person' + (counter + 1)).addClass('highlighted');
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}