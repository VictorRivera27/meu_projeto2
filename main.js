const form = document.getElementById('cadastroForm');
const inputTel = document.getElementById('telefoneContato');
const numerosTelefone = [];

let novaLinha = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nomeContato');
    const inputNumero = document.getElementById('telefoneContato');

    if (numerosTelefone.includes(inputNumero.value)) {
        alert(`O número: ${inputNumero.value} já foi cadastrado`);
    } else {
        numerosTelefone.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td class="tdNome">${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        novaLinha += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = novaLinha;
};

inputTel.addEventListener('input', function (e) {
    formatarTelefone(e);
});

function formatarTelefone(e) {
    let telefone = e.target.value.replace(/\D/g, '');

    if (telefone.length === 11) {
        telefone = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 5) + '-' + telefone.substr(7);
    } else if (telefone.length === 10) {
        telefone = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 4) + '-' + telefone.substr(6);
    }
    e.target.value = telefone;
};