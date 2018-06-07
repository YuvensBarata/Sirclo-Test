var Cart = [];

function addProduct(name,qty)
{
    Cart.push({name,qty});

    return Cart;
}

function removeProduct(deleteName)
{
    for (i = 0; i < Cart.length; i++)
    {
        if (Cart[i].name == deleteName)
        {
            Cart.splice(i,1);
        }
    }

    return Cart;
}

function showCart()
{
    return console.log(Cart);
}

addProduct("Baju Merah", 5);
addProduct("Celana", 5);
addProduct("Buku", 40);
removeProduct("Buku");
showCart();