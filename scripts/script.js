// Menu expansivo (hambúrguer)
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Calculadora de IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (peso > 0 && altura > 0) {
        // Cálculo do IMC: peso / (altura * altura)
        const alturaAoQuadrado = altura * altura;
        const imc = (peso / alturaAoQuadrado).toFixed(2);
        let categoria;

        // Classificação baseada no IMC
        if (imc < 18.5) {
            categoria = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            categoria = 'Peso normal';
        } else if (imc >= 25.0 && imc <= 29.9) {
            categoria = 'Sobrepeso';
        } else if (imc >= 30.0 && imc <= 34.9) {
            categoria = 'Obesidade Grau I';
        } else if (imc >= 35.0 && imc <= 39.9) {
            categoria = 'Obesidade Grau II';
        } else if (imc >= 40) {
            categoria = 'Obesidade Grau III';
        }

        // Exibir resultado
        resultado.textContent = `Seu IMC é ${imc} (${categoria}).`;
    } else {
        resultado.textContent = 'Por favor, insira valores válidos.';
    }
}

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
