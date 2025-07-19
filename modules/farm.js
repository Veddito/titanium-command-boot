console.log('🌾 [farm] Módulo de farm REAL ativado');

TitaniumBoot.modules.farm = {
    init() {
        console.log('🔁 Iniciando varredura de farming...');
        const farmButtons = document.querySelectorAll('a.farm_icon_a');
        if (farmButtons.length === 0) {
            console.warn('⚠️ Nenhum botão de farm encontrado na página');
            return;
        }
        let count = 0;
        farmButtons.forEach(btn => {
            setTimeout(() => {
                btn.click();
                console.log(`✅ Farming enviado #${++count}`);
            }, 200 * count); // 200ms entre ataques
        });
    }
};
