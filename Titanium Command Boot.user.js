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
                { name: 'Auto Farming Inteligente', url: 'https://example.com/modules/auto-farming-inteligente.js' },
                { name: 'Auto Farming Mapa', url: 'https://example.com/modules/auto-farming-mapa.js' },
                { name: 'Auto Recrutamento', url: 'https://example.com/modules/auto-recrutamento.js' },
                { name: 'Balanceador Automático', url: 'https://example.com/modules/balanceador-automatico.js' },
                { name: 'Coleta e Desbloqueio', url: 'https://example.com/modules/coleta-desbloqueio.js' },
                { name: 'Coleta em Massa', url: 'https://example.com/modules/coleta-massa.js' },
                { name: 'Compra & Venda de Recursos', url: 'https://example.com/modules/compra-venda-recursos.js' },
                { name: 'Cunhar Moedas & Puxar Recursos', url: 'https://example.com/modules/cunhar-moedas-puxar.js' },
                { name: 'Etiquetador de Comandos Inteligente', url: 'https://example.com/modules/etiquetador-comandos.js' },
                { name: 'Gerenciamento de Licença', url: 'https://example.com/modules/gerenciamento-licenca.js' },
                { name: 'Mega Construtor Automático', url: 'https://example.com/modules/mega-construtor.js' },
                { name: 'Snip Por Cancelamento', url: 'https://example.com/modules/snip-cancelamento.js' },
                { name: 'Upar Paladino em Massa', url: 'https://example.com/modules/upar-paladino.js' },
                { name: 'Igrejas Inteligentes', url: 'https://example.com/modules/igrejas-inteligentes.js' },
                { name: 'Notificações Inteligente WhatsApp', url: 'https://example.com/modules/notificacoes-whatsapp.js' },
                { name: 'Agendador 2.0', url: 'https://example.com/modules/agendador.js' },
                { name: 'Aceitar Ofertas em Massa', url: 'https://example.com/modules/aceitar-ofertas.js' }
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