import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { House } from "@/models/House.js"

class HousesService {



  async getHouses() {
    const response = await api.get("api/houses")
    logger.log("getting houses ->", response)
    const houses = response.data.map(podjo => new House(podjo))
    AppState.houses = houses
    logger.log(houses)


    return response
  }


  // async getCars() {
  //   const response = await api.get('api/cars')
  //   logger.log('GOT CARS 🏎️🚃🚡🚓', response.data)
  //   const cars = response.data.map(pojo => new Car(pojo))
  //   AppState.cars = cars
  // }

}



export const housesService = new HousesService()