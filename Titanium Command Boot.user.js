// ==UserScript==
// @name         Titanium Command Boot
// @namespace    https://titanium.command
// @version      1.0.0
// @description  Núcleo de inicialização do boot Titanium para Tribal Wars
// @author       Sistema
// @match        https://*.tribalwars.*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const TTC = {
        version: '1.0.0',
        modules: {},
        log: function (...args) {
            console.log('[TTC]', ...args);
        },
        init: async function () {
            TTC.log('Inicializando núcleo do boot...');
            await TTC.loadModules();
        },
        loadModules: async function () {
            TTC.log('Carregando módulos do boot...');
            const modules = [
                { name: 'Auto Farming Inteligente', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/auto-farming-inteligente.js' },
                { name: 'Auto Farming Mapa', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/auto-farming-mapa.js' },
                { name: 'Auto Recrutamento', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/auto-recrutamento.js' },
                { name: 'Balanceador Automático', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/balanceador-automatico.js' },
                { name: 'Coleta e Desbloqueio', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/coleta-desbloqueio.js' },
                { name: 'Coleta em Massa', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/coleta-massa.js' },
                { name: 'Compra & Venda de Recursos', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/compra-venda-recursos.js' },
                { name: 'Cunhar Moedas & Puxar Recursos', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/cunhar-moedas-puxar.js' },
                { name: 'Etiquetador de Comandos Inteligente', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/etiquetador-comandos.js' },
                { name: 'Gerenciamento de Licença', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/gerenciamento-licenca.js' },
                { name: 'Mega Construtor Automático', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/mega-construtor.js' },
                { name: 'Snip Por Cancelamento', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/snip-cancelamento.js' },
                { name: 'Upar Paladino em Massa', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/upar-paladino.js' },
                { name: 'Igrejas Inteligentes', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/igrejas-inteligentes.js' },
                { name: 'Notificações Inteligente WhatsApp', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/notificacoes-whatsapp.js' },
                { name: 'Agendador 2.0', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/agendador.js' },
                { name: 'Aceitar Ofertas em Massa', url: 'https://raw.githubusercontent.com/Veddito/Titanium-Command-Boot/main/aceitar-ofertas.js' }
            ];

            for (const mod of modules) {
                try {
                    await TTC.injectScript(mod.url);
                    TTC.log(`Módulo ${mod.name} carregado`);
                } catch (e) {
                    TTC.log(`Erro ao carregar módulo ${mod.name}:`, e);
                }
            }
        },
        injectScript: function (url) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = url;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
    };

    window.TTC = TTC;
    TTC.init();
})();
