
/* arrays para validacao */
const listaTarefas = [];

/* linhas da tabela tarefas */
let linhasTarefas = '';

/* indicador de alerta */
let inAlerta = false;


$('form').on('submit', function (e) {
    e.preventDefault();

    /* recupera o tarefa informada */
    const inputTarefa = $('#nomeTarefa').val();
    
    validaTarefa(inputTarefa);

    if (!inAlerta) {
        incluiTarefa(inputTarefa);
    }

    /* limpa o campo da noba tarefa */ 
    $('#nomeTarefa').val('');
})

function validaTarefa(inputTarefa) {
    if (listaTarefas.includes(inputTarefa)) {
        alert('Tarefa já incluida.')
        inAlerta = true;
    } else {
        inAlerta = false;
    }
}

function incluiTarefa(inputTarefa) {
    
    listaTarefas.push(inputTarefa);

    /* prepara novo item na tabela */
    const itemTabela = $('<ul></ul>');

    $(`<li>${inputTarefa}</li>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

}

$('tbody').on('click','li',function () {
    $(this).css("color", "red");
    $(this).css("text-decoration", "line-through");
})