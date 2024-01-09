class MethodsCriacaoConta {
    gerarEmail() {
        const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let email = '';
        for (let i = 0; i < 8; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            email += caracteres.charAt(indice);
        }
        return `${email}@example.com`;
    }
    gerarSenha(tamanho) {
        const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
        let senha = '';
        for (let i = 0; i < tamanho; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indice);
        }
        return senha;
    }
}
export default new MethodsCriacaoConta();