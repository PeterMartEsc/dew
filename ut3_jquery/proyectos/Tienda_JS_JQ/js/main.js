$(() => {

    let showProducts = $("#products")

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => getProducts(data));

    function getProducts(data){
        data.map(p => {
            const newDiv = document.createElement("div");
            newDiv.textContent = p.title;
            showProducts.append(newDiv);
        })
    }
})

