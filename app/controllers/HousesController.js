import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"


export class HousesController {
  constructor() {
    console.log("Houses Controller Spooling Up!")

    this.drawHouses()

  }

  drawHouses() {
    const houses = AppState.houses
    let housesHTML = ''
    houses.forEach(house => housesHTML += house.housesHTMLTemplate)
    const houseListingElem = document.getElementById("houses-section")
    houseListingElem.innerHTML = housesHTML
  }

  submitHouse() {
    event.preventDefault()
    const formElem = event.target
    const houseData = getFormData(formElem)
    console.log("House Data ->", houseData)
    housesService.createHouse(houseData)
    this.drawHouses()
  }

}