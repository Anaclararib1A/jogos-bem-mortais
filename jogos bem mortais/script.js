function nextStep(step) {
    // Esconde todas as seções
    document.querySelectorAll('.text, .choices, .hidden').forEach(el => el.classList.add('hidden'));
    
    // Exibe a próxima parte da história
    if (step === '1') {
        document.getElementById('step-1').classList.remove('hidden');
    } else if (step === '2') {
        document.getElementById('step-2').classList.remove('hidden');
    } else if (step === '3') {
        document.getElementById('step-3').classList.remove('hidden');
    } else if (step === '4') {
        document.getElementById('step-4').classList.remove('hidden');
    } else if (step === 'end') {
        document.getElementById('end').classList.remove('hidden');
    } else {
        // Volta ao início
        location.reload();
    }
}

// Função para reiniciar o jogo
function restartGame() {
    location.reload();
}
