console.log('ðŸŒ¾ [farm] MÃ³dulo de farm REAL ativado com delay de 500ms');

TitaniumBoot.modules.farm = {
    init() {
        console.log('ðŸ” Iniciando varredura de farming com delay seguro...');
        const farmButtons = document.querySelectorAll('a.farm_icon_a');
        if (farmButtons.length === 0) {
            console.warn('âš ï¸ Nenhum botÃ£o de farm encontrado na pÃ¡gina');
            return;
        }
        let count = 0;
        farmButtons.forEach(btn => {
            setTimeout(() => {
                btn.click();
                console.log(`âœ… Farming enviado #${++count}`);
            }, 500 * count); // 500ms entre ataques
        });
    }
};
