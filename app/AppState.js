import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car(
      {
        make: 'mazda',
        model: 'miata',
        year: 1996,
        color: 'red',
        mileage: 200000,
        imgUrl: 'https://images.unsplash.com/photo-1725199583250-9f59567ba965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYXRhfGVufDB8fDB8fHwy',
        isManualTransmission: true,
        cylinders: 4,
        price: 2000,
        fuelType: 'gas',
        listedAt: '12/12/2020',
        titleStatus: 'clean'
      }
    ),
    new Car(
      {
        make: 'vw',
        model: 'beetle',
        year: 1960,
        color: 'blue',
        mileage: 300000,
        imgUrl: 'https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnclMjBiZWV0bGV8ZW58MHx8MHx8fDI%3D',
        isManualTransmission: true,
        cylinders: 4,
        price: 40000,
        fuelType: 'gas',
        listedAt: '12/12/2010',
        titleStatus: 'rebuilt'
      }
    ),
    new Car(
      {
        make: 'bat',
        model: 'mobile',
        year: 1968,
        color: 'black',
        mileage: 2000,
        imgUrl: 'https://images.unsplash.com/photo-1671877077293-ae670e67f2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bW9iaWxlfGVufDB8fDB8fHwy',
        isManualTransmission: false,
        cylinders: 10,
        price: 4200000,
        fuelType: 'batfuel',
        listedAt: '6/8/2024'
      }
    ),
  ]


  houses = [
    new House(
      {
        year: '2001',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1400,
        price: 350000,
        description: 'Newly renovated mid-century modern home',
        imgUrl: 'https://images.unsplash.com/photo-1725202438040-2bb4ff8e01e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFudGFzeSUyMCUyQiUyMEhvdXNlfGVufDB8fDB8fHww',
        carGarage: 2,
        murder: true,
        haunted: true,
      }),
    new House({
      year: '1738',
      bedrooms: 1,
      bathrooms: 0,
      sqft: 300,
      price: 12000,
      description: 'Charming Rustic Cabin, definitely not haunted or damned',
      imgUrl: 'https://images.unsplash.com/photo-1574776491123-1cd258f63f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbnRhc3klMjAlMkIlMjBIb3VzZXxlbnwwfHwwfHx8MA%3D%3D',
      carGarage: 0,
      murder: false,
      haunted: true,
    }),
    new House({
      year: '1856',
      bedrooms: 5,
      bathrooms: 3,
      sqft: 2800,
      price: 2500000,
      description: 'Riverside Cottage with boat dock, no pollution detected',
      imgUrl: 'https://images.unsplash.com/photo-1719620131173-f5c51fe23ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFudGFzeSUyMCUyQiUyMEhvdXNlfGVufDB8fDB8fHww',
      carGarage: 2,
      murder: false,
      haunted: false,
    }),


  ]
}

export const AppState = createObservableProxy(new ObservableAppState())