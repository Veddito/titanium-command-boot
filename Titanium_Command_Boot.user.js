// ==UserScript==
// @name         Titanium Command Boot
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Boot de automação Tribal Wars com módulos
// @match        *://*.tribalwars.com.br/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('✅ Titanium Command Boot carregado com sucesso');

    // Carregamento dos módulos
    const scripts = [
        'core.js',
        'config.js',
        'interface.js',
        'auth.js',
        'modules/farm.js',
        'modules/monitor.js',
        'modules/panel.js'
    ];

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = `https://veddito.github.io/titanium-command-boot/${src}`;
        script.type = 'text/javascript';
        document.head.appendChild(script);
    });
})();
