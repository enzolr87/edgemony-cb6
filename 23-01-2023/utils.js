const cE = (type)=> document.createElement(type);
const qS = (element) => document.querySelector(element);

// creazione card

const cardCreate = (data)=>{
  const containerEl = cE("div");
  const quoteEl = cE("h1");
  const authorEl = cE("p");
  
  containerEl.className = "product-card";
  quoteEl.textContent = data.quote;
  authorEl.textContent = data.author;
 

  containerEl.append(quoteEl, authorEl);
  
  return containerEl;
};

export {cE, qS,};