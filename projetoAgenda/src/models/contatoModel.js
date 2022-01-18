const mongoose = require('mongoose');
const validator = require('validator');

const contatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    numero: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    criadoEm: {type: Date, default: Date.now}
});

const contatoModel = mongoose.model('contato', contatoSchema);

function Contato(body){
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function(){
    this.validation();
    if(this.errors.length > 0) return;
    this.contato = await contatoModel.create(this.body);
}

Contato.prototype.validation = function() {
    this.cleanUp;
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push("E-mail inválido");
    if (!this.body.nome) this.errors.push("Nome é um campo obrigatório");
    if  (!this.body.email && !this.body.numero){
        this.errors.push("Pelo menos um contato deve ser enviado");
    }
}

Contato.prototype.cleanUp = function(){
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.sobrenome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        numero: this.body.numero,
    }
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.validation();
    if(this.errors.length > 0) return;
    this.contato = await contatoModel.findByIdAndUpdate(id, this.body, { new: true });
};

Contato.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await contatoModel.findById(id);
    return contato;
};

Contato.buscaContatos = async function() {
    const contatos = await contatoModel.find()
    .sort({ criadoEm: -1 });
    return contatos;
};

module.exports = Contato;