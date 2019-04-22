let xhttp,div_principal;
function exibir(tipoItem){ 
    xhttp = new XMLHttpRequest();
    div_principal = document.querySelector("#principal");
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            div_principal.innerHTML = null;
            var itens = JSON.parse(this.responseText);
            itens.forEach(function(item){
                var item = `
                <div class="col-md-4">
                    <div class="card text-center mb-4 shadow-sm">
                        <img class="card-img-top" width="80px" height="300px" src="img/${item.url}">
                        <div class="card-body">
                            <h2 class="card-title">${item.nomeItem}</h2>
                            <p class="card-text">${item.descricao}</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">DASI USP 2019</small>
                        </div>
                    </div>
                </div>
                `;
                div_principal.innerHTML += item;    
            });
        }
    }
    xhttp.open("GET", "php/listaritens.php?tipoItem="+tipoItem, true);
    xhttp.send();
}
function exibeCamisetas(){
    exibir("Camiseta");
}
function exibeCanecas(){
     exibir("Caneca");
}
function exibeMoletons(){
    exibir("Moletom");
}
function exibeOutros(){
    exibir("Outros");
}