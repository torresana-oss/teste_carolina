const formulario = document.getElementById("formTroca");
const tabela = document.getElementById("tabelaSolicitacoes");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const diaAtual = document.getElementById("diaAtual").value;
    const horarioAtual = document.getElementById("horarioAtual").value;
    const disciplina = document.getElementById("disciplina").value;
    const novoDia = document.getElementById("novoDia").value;
    const novoHorario = document.getElementById("novoHorario").value;
    const pessoa = document.getElementById("pessoa").value;

    if (
        diaAtual === "" ||
        horarioAtual === "" ||
        disciplina === "" ||
        novoDia === "" ||
        novoHorario === "" ||
        pessoa === ""
    ) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (diaAtual === novoDia && horarioAtual === novoHorario) {
        alert("O novo horário deve ser diferente do horário atual!");
        return;
    }

    const novaLinha = tabela.insertRow();

    const celulaDisciplina = novaLinha.insertCell(0);
    const celulaAtual = novaLinha.insertCell(1);
    const celulaNovo = novaLinha.insertCell(2);
    const celulaPessoa = novaLinha.insertCell(3);
    const celulaStatus = novaLinha.insertCell(4);

    celulaDisciplina.textContent = disciplina;

    celulaAtual.textContent =
        diaAtual + " - " + horarioAtual;

    celulaNovo.textContent =
        novoDia + " - " + novoHorario;

    celulaPessoa.textContent = pessoa;

    celulaStatus.textContent = "Pendente";

    alert("Solicitação de troca enviada com sucesso!");

    formulario.reset();
});