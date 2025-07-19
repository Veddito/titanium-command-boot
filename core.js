console.log('✅ [core] Módulo principal iniciado');

window.TitaniumBoot = {
    initialized: true,
    modules: {},
    start() {
        console.log('🚀 Titanium Boot ativado');
        TitaniumBoot.modules.farm.init();
        TitaniumBoot.modules.monitor.init();
        TitaniumBoot.modules.panel.init();
    }
};
