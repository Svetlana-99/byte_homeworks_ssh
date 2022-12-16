const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];

  // I method
  const titleFirst = document.createElement('h1');
  titleFirst.innerText = 'First method'
  document.body.append(titleFirst);

  const createProductCard = (products) => {
   
    const productCard = document.createElement("div");
   
    products.forEach(element => {
       
        const productName = document.createElement("h2");
        productName.innerHTML = element.name;
        const productBrand = document.createElement("h3");
        productBrand.innerHTML =element.brand;

       
        const productProperties = document.createElement("div");
        
        element.properties.forEach((item) =>{
          
            const productPropertiesCurrent = document.createElement("li");
            productPropertiesCurrent.innerHTML =item;
            productProperties.append(productPropertiesCurrent);
            
            return productProperties;
        }
        );
        productCard.append( productName, productBrand, productProperties);
    }
   
    );
   
    return productCard;
  }

  const renderProductCard = createProductCard(products)
  document.body.append(renderProductCard)

  
  const titleSecond = document.createElement('h1');
  titleSecond.innerText = 'Second method'
  document.body.append(titleSecond);

  // II method
  const createProductCardSecond = (products) => {
   
    const productCard = document.createElement("div");

    products.forEach(element => {
        const productCardCurrently = document.createElement("div");

        const currentProperties = element.properties;
      
        productCardCurrently.innerHTML = `
        <h2> ${element.name}</h2>
        <h3> ${element.brand}</h3>
        <div>${currentProperties
            .map((item) =>
            `<li>${item}</li>`)
            .join(' ')}
        </div>
        `
        productCard.append(productCardCurrently)
        return productCardCurrently;
    }
   
    );
   
    return productCard;
  }

  const renderProductCardSecond = createProductCardSecond(products)
  document.body.append(renderProductCardSecond)



