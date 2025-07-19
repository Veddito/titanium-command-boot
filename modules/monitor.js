console.log('📡 [monitor] Módulo de monitoramento REAL ativado');

TitaniumBoot.modules.monitor = {
    init() {
        console.log('🔍 Escaneando ataques em andamento...');
        const alerts = document.querySelectorAll('img[src*="att.png"]');
        const villages = {};
        alerts.forEach(img => {
            const row = img.closest('tr');
            const name = row?.querySelector('span.quickedit-label')?.innerText || 'Desconhecida';
            villages[name] = (villages[name] || 0) + 1;
        });

        console.log('🚨 Aldeias com ataques detectadas:');
        for (const [village, count] of Object.entries(villages)) {
            console.log(`⚔️ ${village}: ${count} ataque(s)`);
        }

        TitaniumBoot.monitorData = villages;
    }
};
