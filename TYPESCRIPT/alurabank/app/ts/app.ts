import { NegociacaoController } from './controllers/NegociacaoController';

let negociacaoController = new NegociacaoController();
$(".form").submit(negociacaoController.adiciona.bind(negociacaoController))

$('#btnImportar').on('click', negociacaoController.importar.bind(negociacaoController));