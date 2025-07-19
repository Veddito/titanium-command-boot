console.log('🖥️ [interface] Interface ativada');

function createTitaniumButton() {
    const btn = document.createElement('button');
    btn.innerText = 'Abrir Painel Titanium';
    btn.style.position = 'fixed';
    btn.style.top = '60px';
    btn.style.right = '20px';
    btn.style.zIndex = 9999;
    btn.onclick = () => TitaniumBoot.start();
    document.body.appendChild(btn);
}

window.addEventListener('load', createTitaniumButton);
