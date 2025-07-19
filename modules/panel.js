console.log('🧭 [panel] Painel REAL ativado');

TitaniumBoot.modules.panel = {
    init() {
        const existing = document.getElementById('titanium-panel');
        if (existing) {
            existing.remove();
        }

        const panel = document.createElement('div');
        panel.id = 'titanium-panel';
        panel.style.position = 'fixed';
        panel.style.bottom = '20px';
        panel.style.right = '20px';
        panel.style.background = '#222';
        panel.style.color = '#fff';
        panel.style.padding = '10px';
        panel.style.zIndex = 9999;
        panel.style.borderRadius = '8px';
        panel.innerHTML = `
            <strong>Painel Titanium</strong><br>
            <button onclick="TitaniumBoot.modules.farm.init()">🌾 Iniciar Farm</button><br>
            <button onclick="TitaniumBoot.modules.monitor.init()">📡 Verificar Ataques</button>
        `;

        document.body.appendChild(panel);
    }
};
