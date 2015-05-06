$(document).ready(function() {
    $(".localeSelector").on('change', function() {
        changeLocale(this.value);
    })

    if(urlParams['q']) {
        doSearch(urlParams['q']);
    }

    $('[data-toggle="collapse"]').click(function() {
        var newText = "";
        doSearch('');

        switch ($(this).children('.collapserText').text()) {
            case "More":
                newText = "Less";
                break;
            case "Less":
                newText = "More";
                break;
            case "Plus":
                newText = "Moins";
                break;
            case "Moins":
                newText = "Plus";
                break;
            default:
                newText = $(this).children('.collapserText').text();
        }
        $(this).children('i').toggleClass('icon-chevron-up');
        $(this).children('i').toggleClass('icon-chevron-down');
        $(this).children('.collapserText').text(newText);
    });

    $('.search-query').on('keydown',function(e) {
        var code = e.keyCode || e.which;
        if (code == '9' || code == '13')
        {
            e.preventDefault();
            //console.log($(this).val());
            doSearch($(this).val())
        }
    });

    $('#removeFilter').on('click',function() {
       doSearch('');
    });

    $('.tabSelector').on('click', function(e) {
        e.preventDefault();
        //Remove active class from the li which currently has it
        $('.tabSelector').removeClass('active');
        //Add active class to the current li
        //Hide all the eligible divs
        $('#strengths,#sdlc,#productFocus,#businessExperience').hide();
        //Show the selected one
        var selector = "#" + $(this).attr('data-target');
        $(selector).show();
    });
})

function switchTo(divSelector) {

}


function doSearch(searchString) {
    $('.search-query').val(searchString);
    if(searchString != "") {
        $('#removeFilter').show();
        $('#experience1,#experience2,#experience3,#experience4').collapse('show');
        $('.experience:not(:contains(' + searchString + '))').hide();
        $('.experience:contains(' + searchString + ')').show();
        $('.filterable:not(:contains(' + searchString + '))').hide();
        $('.filterable:contains(' + searchString + ')').show();
    } else {
        $('#removeFilter').hide();
        $('.experience').show()
        $('.filterable').show();
    }

}



function changeLocale(locale) {
    //get current URL
    var pathName = window.location.pathname;
    //construct new URL
    regEx = new RegExp(/\/(en|fr)\//);
    pathName = pathName.replace(regEx,"/"+locale+"/");
    //load correct page
    window.location.href = pathName;
}

function getUrlLocale() {
    var pathName = window.location.pathname;
    if(pathName.indexOf("/en/") != -1) {
        return "en";
    }
    if(pathName.indexOf("/fr/") != -1) {
        return "fr";
    }
    throw "unknown url locale";
}

var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
})();
