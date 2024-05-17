async () => {
  const myCart = [];
  const products = []; //nos da error porque le hemos inferido tipado de array pero no tiene ningún valor
  const limit = 2;
  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    //la variable index nos da error porque no está declarada
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }
  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = { name: 'Nicolas', lastName: 'Molina' };
  // const rta = person + limit;
  // console.log(rta);
};
