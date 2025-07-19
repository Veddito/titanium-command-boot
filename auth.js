console.log('🔐 [auth] Sistema de licença ativado');

window.TitaniumAuth = {
    isAuthorized() {
        return TitaniumConfig.licenseKey === 'LIBERADO';
    }
};
