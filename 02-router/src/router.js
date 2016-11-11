import $ from 'jquery';

var list = [];

export default function router(route, fn) {

    if (route === undefined) {
        linkHandler();
        // start routing
        getURL();

        window.onpopstate = function(event) {
            console.log(window.history.length);
            
            if(window.history.length != 0){    
                updateState(history.state.href, true);
            } 
        }
    }
    else 
    {
        list.push({ route: route, funct: fn });
    }
};

function linkHandler(){

    $("a").on("click", function(evt){

        evt.preventDefault();
        updateState($(evt.currentTarget).attr("href"));

    });
}

function updateState(myHref, silent){

    console.log(myHref);

    for(var c of list){

        if(c.route === myHref){

            c.funct();

            //silent false -> default
            if(!silent){ 
                let stateObj = { href : myHref };
                window.history.pushState(stateObj, "page", myHref);
                //window.history.pushState(stateObj, "page 2", myHref);
            }
        }
    }
}

function getURL(){
    
    var myCurrentHref = window.history.state || { href: window.location.pathname};

    console.log(myCurrentHref);

    updateState(myCurrentHref.href, true);
}
