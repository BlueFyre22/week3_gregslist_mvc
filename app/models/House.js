import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.carGarage = data.carGarage
  }

  get housesHTMLTemplate() {
    return `
    <div class="col-md-4 mb-3 ">
          <div class="card">
            <img src="${this.imgUrl}" class="card-img-top house-img" alt="image of a house for sale">
            <span class="text-success rounded-pill fs-2 px-2 d-inline-block house-price">$${this.price}</span>
            <div class="card-body">
              <h5 class="card-title">${this.description}</h5>
              <span>Built in ${this.year}</span>
              <p class="card-text">${this.bedrooms} bed, ${this.bathrooms} bath, ${this.carGarage} car garage, ${this.sqft} sqft</p>
            </div>
            <div class="d-flex justify-content-end p-1">
              <button class="btn btn-danger fs-5 ">🗑️</button>
            </div>
          </div>
        </div>
    `
  }

}