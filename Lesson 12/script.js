
// I method
const createTooltip = (btn, text)=>{
   
    const tooltipElement = document.createElement("div")
    tooltipElement.innerText = text;
    tooltipElement.classList.add("tooltipElementHide")
   
    document.body.append(tooltipElement);
  
    return tooltipElement;
};

const toogleTooltip = (tooltip)=>{

    tooltip.classList.toggle("tooltipElement");
    
    };

    const btn = document.getElementById("toggle");
   

const tooltip = createTooltip(btn, 'Hello everybody!!!')
btn.addEventListener("click", () => toogleTooltip(tooltip));
// createTooltip(button, 'Hello everybody!!!');



// II method

const createTooltipSecond = (btn, text)=>{

    const tooltipElementSecond = document.createElement("span")
    tooltipElementSecond.innerText = text;
    tooltipElementSecond.classList.add("tooltiptext")
    document.body.append(tooltipElementSecond);
  
    return tooltipElementSecond;
};

    const visibleTooltipSecond = (tooltipElementSecond) =>{

    tooltipElementSecond.classList.add("hover");
   
    };

    const hidenTooltipSecond = (tooltipElementSecond) =>{
    
        tooltipElementSecond.classList.remove("hover");
       
        };

const btnSecond = document.getElementById("hover");

const tooltipSecond = createTooltipSecond(btnSecond, 'Hello everybody!!!');

btnSecond.addEventListener("mouseenter", () => {
    visibleTooltipSecond(tooltipSecond);
   
});
btnSecond.addEventListener("mouseleave", () => {
    hidenTooltipSecond(tooltipSecond);
   
});
