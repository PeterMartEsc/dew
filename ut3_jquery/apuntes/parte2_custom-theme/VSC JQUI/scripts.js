"use strict";

const $j = jQuery.noConflict();

function inicializarComponentes(){
    initAccordion();
    initTabs();
    initButton();
    initDialog();
}

function initAccordion(){
    $j("#accordion").accordion()
}

function initTabs(){
    $j("#tabs").tabs()
}

function initButton(){
    $j("#button").button().on("click", function (){
        $j("#dialog").dialog("open");
    });
}

function initDialog(){
    $j("#dialog").dialog({
        autoOpen: false,
        buttons : [{
            text: "Cerrar",
            click : function(){
                $j(this).dialog("close")
            }
        }]
    });
}

$j(function(){
    inicializarComponentes();
})