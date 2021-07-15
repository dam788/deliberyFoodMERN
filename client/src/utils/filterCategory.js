export const filterCategory = (products, category) => {
    // new array return 
    let newArrayProducts = []
  
    if (newArrayProducts.length === 0 && category.length === 0) {
      return products
    }
    console.log(products)

    for (let i in category) {
      let categoryValue = category[i].section;  

      products?.map((product) => {
        const { section } = product;

        categoryValue !== section &&  newArrayProducts.push(product)
        

      });
    }
 
  
  }
 