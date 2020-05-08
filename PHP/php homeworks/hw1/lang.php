<?php

$config = require "config.php";
$translationList = [];

switch($config['lang']) {
    case 'ru':
        $translationList = include "lang/ru.php";
    break;

    case 'ua':
        $translationList = include "lang/ua.php";
    break;

    default:

    case 'eng':
        $translationList = include "lang/eng.php";
    break;
}

function Lang($tag)
{
    $translation = $GLOBALS['translationList'][$tag];
    
    if( $translation == NULL )
        $translation = $tag;

    return $translation;
}