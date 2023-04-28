function Verificar(){

     let nome = document.getElementById('nome').value;
     let telefone = document.getElementById('telefone').value;
     let data = document.getElementById('data').value;
     let cpf = document.getElementById('ao_cpf').value;
     let cep = document.getElementById('ao_cep');
     let endereco = document.getElementById('endereco').value;
     let number = document.getElementById('number').value;
     let complemento = document.getElementById('comple');
     let cidade = document.getElementById('cid');
     let estado = document.getElementById('est');
     let bairro = document.getElementById('bairro').value;
     let email = document.getElementById('email').value;
     let senha = document.getElementById('senha').value;
     let confsenha = document.getElementById('confsenha').value;

    
     if(!nome || !telefone)
     alert("Campos de preenchimento obrigatório. Favor preencher.")
     
     if(!senha || !endereco)
     alert("Campos de preenchimento obrigatório. Favor preencher.")
    
     if(!cpf || !data)
     alert("Campos de preenchimento obrigatório. Favor preencher.")
    
     if(!telefone || !nome)
     alert("Campos de preenchimento obrigatório. Favor preencher.")

     if(!number || !bairro)
     alert("Campo de preenchimento obrigatório. favor preencher")

     if(!email || !confsenha)
     alert("campo de preenchimento obrigaório. favor preencher")

     if(!cep || !complemento)
     alert("campo de preenchimento obrigaório. favor preencher")

     if(!cidade || !estado)
     alert("campo de preenchimento obrigaório. favor preencher")

     
    }
    