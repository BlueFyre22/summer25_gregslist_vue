export class House {
  constructor(data) {
    this.id = data.id || data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.creator = data.creator
    this.creatorId = data.creator.id || data.creatorId
    this.description = data.description
    this.price = data.price
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.year = data.year


  }
}