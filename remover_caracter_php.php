<?php
    if (!empty($variavel)) {
        $caracterErro = ['%', '$', '&', '*', '/', '//', '(', ')', '[', ']', '{', '}', '@', '!', '?', ';', ':', '|', '~', '"', '´', '`', 'ª', 'º', '°', '¨', '-', '_', '<', '>', '+', '<', '>', ',', "'"];
        $replace = [''];
        $nome = trim(str_replace($caracterErro, $replace, $variavel));
    };
?>