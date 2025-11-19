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
    $j("button").button();
}

function initDialog(){
    $j("#dialog").dialog();
}

$j(function(){
    inicializarComponentes();
})