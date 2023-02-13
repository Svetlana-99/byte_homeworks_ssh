const BASE_URL = "https://swapi.dev/api";
const container = document.createElement("div");
const containerCard = document.createElement("div");
container.classList.add("container");
containerCard.classList.add("containerCard");

const localInfoPlanetCard =
  JSON.parse(localStorage.getItem("PlanetCard")) || [];
const localInfoStarshipsCard =
  JSON.parse(localStorage.getItem("StarshipsCard")) || [];
const localInfoVehiclesCard =
  JSON.parse(localStorage.getItem("VehiclesCard")) || [];

function showPreloader(show) {
  if (show) {
    preloader.style.display = "block";
  } else {
    preloader.style.display = "none";
  }
}

function oldCardLocalStorage() {
  if (
    (localStorage.getItem("PlanetCard") ||
      localStorage.getItem("StarshipsCard") ||
      localStorage.getItem("VehiclesCard")) !== null
  ) {
    localInfoPlanetCard.forEach((item) => {
      const oldPlanetCard = new PlanetCard(item);
      oldPlanetCard.render(containerCard);
    });
    localInfoStarshipsCard.forEach((item) => {
      const oldStarshipsCard = new StarshipsCard(item);
      oldStarshipsCard.render(containerCard);
    });
    localInfoVehiclesCard.forEach((item) => {
      const oldVehiclesCard = new VehiclesCard(item);
      oldVehiclesCard.render(containerCard);
    });
  }
}

class Input {
  constructor(options) {
    const {
      name,
      placeholder,
      type = "text",
      onInput = () => {},
      onChange = () => {},
    } = options;
    this.element = document.createElement("input");
    this.name = name;
    this.element.className = "input-block";
    this.element.name = name;
    this.element.placeholder = placeholder;
    this.value = this.element.value;
    this.element.type = type;

    return this.element;
  }
  render() {
    container.append(this.element);
  }
}

class Select {
  constructor(options) {
    const { name, selectOptions } = options;
    this.name = name;
    this.element = document.createElement("select");
    this.element.classList.add("select-block");
    this.selectOptions = selectOptions;

    selectOptions.forEach((item) => {
      const selectOptions = this.element.add(
        new Option(`${item.text}`, `${item.value}`)
      );
      this.element.append(selectOptions);
    });
    return this.element;
  }
  render() {
    container.append(this.element);
  }
}

class Form {
  constructor(options) {
    const { selectName, inputId, onSubmit } = options;

    this.selectName = selectName;
    this.inputId = inputId;
    this.element = document.createElement("form");

    this.submitBtn = document.createElement("button");
    this.submitBtn.innerText = "Добавить";
    this.submitBtn.className = "button";
    this.submitBtn.type = "submit";
    this.onSubmit = onSubmit;

    function getFormValues() {
      const valueName = selectName.value;
      const valueID = inputId.value;
      if (!valueID) {
        alert("You didn't enter ID");
      } else {
        return { valueName, valueID };
      }
    }
    this.element.addEventListener("submit", (event) => {
      event.preventDefault();
      const formValues = getFormValues();
      onSubmit(formValues);
      showPreloader(true);
    });
  }
  render() {
    this.element.append(selectName, inputId, this.submitBtn);
    container.append(this.element);
  }
}
const inputId = new Input({
  name: "ID",
  placeholder: "Input ID",
  type: "number",
});
const selectName = new Select({
  name: "board",
  selectOptions: [
    {
      text: "Starships",
      value: "starships",
    },
    {
      text: "Planet",
      value: "planets",
    },
    {
      text: "Vehicles",
      value: "vehicles",
    },
  ],
});

const form = new Form({
  selectName,
  inputId,
  onSubmit: (values) => {
    const getData = new API(values);
    getData.render();
  },
});

class API {
  constructor(options) {
    const { valueName: name, valueID: id } = options;
    this.name = name;
    this.id = id;
    this.cardRequest = this.cardRequest;
    this.cardRequest = new XMLHttpRequest();
    this.cardRequest.open("GET", `${BASE_URL}/${name}/${id}`);
    this.cardRequest.responseType = "json";
    this.cardRequest.send();
  }
  render() {
    showPreloader(true);
    this.cardRequest.onload = () => {
      const { status, response } = this.cardRequest;
      if (status === 200) {
        showPreloader(false);
        if (this.name === "starships") {
          const starshipsCard = new StarshipsCard(response);
          starshipsCard.render(containerCard);
          starshipsCard.localSet();
        }
        if (this.name === "planets") {
          const planetsCard = new PlanetCard(response);
          planetsCard.id = "planets";
          planetsCard.render(containerCard);
          planetsCard.localSet();
        }
        if (this.name === "vehicles") {
          const vehiclesCard = new VehiclesCard(response);
          vehiclesCard.render(containerCard);
          vehiclesCard.localSet();
        }
      } else {
        alert("No information found for this query");
        showPreloader(false);
      }
    };
  }
}

class Card {
  constructor(options) {
    const { name } = options;
    this.name = name;
  }
  render() {
    this.cardBlock = document.createElement("div");
    this.cardBlock.className = "card";

    this.btnClose = document.createElement("button");
    this.btnClose.innerText = "x";
    this.btnClose.className = "btnClose";

    this.titleBlock = document.createElement("h3");
    this.titleBlock.innerText = this.name;
    this.cardBlock.append(this.btnClose, this.titleBlock);

    this.btnClose.addEventListener("click", () => {
      this.cardBlock.remove();

      if (this.cardBlock.id === "planet") {
        localInfoPlanetCard.forEach((item, index) => {
          if (item.name === this.name) {
            localStorage.removeItem("PlanetCard");
            localInfoPlanetCard.splice(index, 1);
            localStorage.setItem(
              "PlanetCard",
              JSON.stringify(localInfoPlanetCard)
            );
          }
        });
      }
      if (this.cardBlock.id === "starships") {
        localInfoStarshipsCard.forEach((item, index) => {
          if (item.name === this.name) {
            localStorage.removeItem("StarshipsCard");
            localInfoStarshipsCard.splice(index, 1);
            localStorage.setItem(
              "StarshipsCard",
              JSON.stringify(localInfoStarshipsCard)
            );
          }
        });
      }
      if (this.cardBlock.id === "vehicles") {
        localInfoVehiclesCard.forEach((item, index) => {
          if (item.name === this.name) {
            localStorage.removeItem("VehiclesCard");
            localInfoVehiclesCard.splice(index, 1);
            localStorage.setItem(
              "VehiclesCard",
              JSON.stringify(localInfoVehiclesCard)
            );
          }
        });
      }
    });
    containerCard.append(this.cardBlock);
  }
}

class PlanetCard extends Card {
  constructor(options) {
    super(options);
    const { climate, population, terrain } = options;
    this.climate = climate;
    this.population = population;
    this.terrain = terrain;

    this.localStoragInfo = { ...options, climate, population, terrain };
  }
  render() {
    super.render();
    this.climateBlock = document.createElement("p");
    this.terrainBlock = document.createElement("p");
    this.populationBlock = document.createElement("p");
    this.climateBlock.innerText = `Climate: ${this.climate}`;
    this.terrainBlock.innerText = `Terrain: ${this.terrain}`;
    this.populationBlock.innerText = `Population: ${this.population}`;
    this.cardBlock.id = "planet";

    this.cardBlock.append(
      this.climateBlock,
      this.terrainBlock,
      this.populationBlock
    );
  }
  localSet() {
    localInfoPlanetCard.push(this.localStoragInfo);
    localStorage.setItem("PlanetCard", JSON.stringify(localInfoPlanetCard));
  }
}

class StarshipsCard extends Card {
  constructor(options) {
    super(options);
    const { model, manufacturer, max_atmosphering_speed } = options;
    this.model = model;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.localStoragInfo = { ...options, model, manufacturer, manufacturer };
  }
  render() {
    super.render();
    this.modelBlock = document.createElement("p");
    this.manufacturerBlock = document.createElement("p");
    this.max_atmosphering_speed_Block = document.createElement("p");
    this.modelBlock.innerText = `Model: ${this.model}`;
    this.manufacturerBlock.innerText = `Manufacturer: ${this.manufacturer}`;
    this.max_atmosphering_speed_Block.innerText = `Max speed: ${this.max_atmosphering_speed}`;
    this.cardBlock.id = "starships";

    this.cardBlock.append(
      this.modelBlock,
      this.manufacturerBlock,
      this.max_atmosphering_speed_Block
    );
  }
  localSet() {
    localInfoStarshipsCard.push(this.localStoragInfo);
    localStorage.setItem(
      "StarshipsCard",
      JSON.stringify(localInfoStarshipsCard)
    );
  }
}

class VehiclesCard extends Card {
  constructor(options) {
    super(options);
    const { cost_in_credits, crew, passengers } = options;
    this.cost_in_credits = cost_in_credits;
    this.crew = crew;
    this.passengers = passengers;
    this.localStoragInfo = { ...options, cost_in_credits, crew, passengers };
  }
  render() {
    super.render();
    this.cost_in_credits_Block = document.createElement("p");
    this.crewBlock = document.createElement("p");
    this.passengers_Block = document.createElement("p");
    this.cost_in_credits_Block.innerText = `Cost in credits: ${this.cost_in_credits}`;
    this.crewBlock.innerText = `Crew: ${this.crew}`;
    this.passengers_Block.innerText = `Passengers: ${this.passengers}`;
    this.cardBlock.id = "vehicles";

    this.cardBlock.append(
      this.cost_in_credits_Block,
      this.crewBlock,
      this.passengers_Block
    );
  }
  localSet() {
    localInfoVehiclesCard.push(this.localStoragInfo);
    localStorage.setItem("VehiclesCard", JSON.stringify(localInfoVehiclesCard));
  }
}

form.render(container);

document.body.append(container, containerCard);

oldCardLocalStorage();
