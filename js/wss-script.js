
var products = new XMLHttpRequest();
var prodItem, prodRecommen = "";

products.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var result = (JSON.parse(products.responseText));
        var prodVisitado = result[0].data.item;
        var prodRecomenda = result[0].data.recommendation;

        prodItem = `
                     <li>
                        <div class="prateItem" data-id="${prodVisitado.businessId}">
                            <a href="#" title="${prodVisitado.name}" itemprop="url">
                                <div class="prodImage">
                                    <img src="${prodVisitado.imageName}" alt="${prodVisitado.name}">
                                </div>
                                    <h3 class="prodName">${prodVisitado.name}</h3>
                            </a>
                            <div class="prodPrice">
                                <span class="oldPrice">De: <strong>${prodVisitado.oldPrice}</strong></span>
                                <span class="price">Por: <strong>${prodVisitado.price}</strong></span>
                                <p class="priceParce">${prodVisitado.productInfo.paymentConditions}</p> 
                            </div>

                            <a href="#" title="${prodVisitado.name}" class="btn_buy">
                                <span>adicionar ao carrinho</span>
                            </a>

                        </div>
                        
                    </li>        
                `;

        //console.log(prodVisitado)
        for (i in prodRecomenda) {
            //console.log(prodRecomenda[i]);
            prodRecommen += `
                     <li>
                        <div class="prateItem" data-id="${prodRecomenda[i].businessId}">
                            <a href="#" title="${prodRecomenda[i].name}" itemprop="url">
                                <div class="prodImage">
                                    <img src="${prodRecomenda[i].imageName}" alt="${prodRecomenda[i].name}">
                                </div>
                                    <h3 class="prodName">${prodRecomenda[i].name}</h3>
                            </a>
                            <div class="prodPrice">
                                <span class="oldPrice">De: <strong>${prodRecomenda[i].oldPrice}</strong></span>
                                <span class="price">Por: <strong>${prodRecomenda[i].price}</strong></span>
                                <p class="priceParce">${prodRecomenda[i].productInfo.paymentConditions}</p> 
                            </div>

                            <a href="#" title="${prodRecomenda[i].name}" class="btn_buy">
                                <span>adicionar ao carrinho</span>
                            </a>

                        </div>
                        
                    </li>        
                `;
        }
        //console.log(JSON.parse(products.responseText));
        document.querySelectorAll(".prate_list")[0].innerHTML = prodItem;

        document.querySelectorAll(".prate_list")[1].innerHTML = prodRecommen;        
    }
};

products.open("GET", "../products.json", true);
products.send();

