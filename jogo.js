 const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        const maxTentativas = 10;
        let tentativasRestantes = maxTentativas;
        let jogoAtivo = true;

        document.getElementById('btnChutar').addEventListener('click', function() {
            if (!jogoAtivo) return;

            const palpite = parseInt(document.getElementById('palpite').value);
            const mensagem = document.getElementById('mensagem');
            const tentativas = document.getElementById('tentativas');

            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
                return;
            }

            tentativasRestantes--;

            if (palpite === numeroSecreto) {
                mensagem.textContent = "Você acertou! Parabéns!";
                jogoAtivo = false;
            } else if (tentativasRestantes === 0) {
                mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
                jogoAtivo = false;
            } else if (palpite < numeroSecreto) {
                mensagem.textContent = "O número secreto é maior.";
            } else {
                mensagem.textContent = "O número secreto é menor.";
            }

            tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
        });