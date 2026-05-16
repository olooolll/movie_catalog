export function convertPostgresByteaToBase64(byteaString) {
    if (!byteaString) return null;

    try {
        // 1. Remove o prefixo '\x'
        let rawHex = byteaString.replace(/^\\x/, '');

        // Passo 1: Converte o "hex do hex" para a string hexadecimal real (ex: "89504e47...")
        let realHexStr = "";
        for (let i = 0; i < rawHex.length; i += 2) {
            realHexStr += String.fromCharCode(parseInt(rawHex.substr(i, 2), 16));
        }

        // Passo 2: Converte a string hexadecimal real para binário puro
        let binary = "";
        for (let i = 0; i < realHexStr.length; i += 2) {
            binary += String.fromCharCode(parseInt(realHexStr.substr(i, 2), 16));
        }

        // 2. Retorna pronto para o <img src="..." />
        return `data:image/png;base64,${btoa(binary)}`;
    } catch (err) {
        console.error("Erro ao converter imagem do filme:", err);
        return null;
    }
}