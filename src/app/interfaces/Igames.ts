export interface IGame {
  id: number,
  slug: string,
  name: string,
  released: string,
  background_image: string
  tba: boolean,
  rating: number,
  rating_top: number,
  metacritic: number
}
export interface IGames {
  count: number,
  next: string,
  previous: string,
  results: IGame[],
  seo_title: string,
  seo_h1: string,
  filters:{
    years:[
      Years[]
    ]
  }
}
interface Years {
  from: number,
  to: number,
  filter: string,
  decade: number,
  years:{
    year:number,
    count:number,
    noFollow: false
  }
}
export interface IGamesDetails {
  id: number,
  slug: string,
  name: string,
  name_original: string,
  description: string,
  metacritic: number,
  metacritic_platforms:[{
    metascore:number,
    url: string,
    platform:{
      name: string
    }

  }],
  "released": string,
  "tba": false,
  "updated": string,
  "background_image": string,
  "background_image_additional": string,
  "website": string,
  "rating": number,
  "rating_top": number,
  "ratings":[
    {
      "id": number,
      "title": string,
      "count": number,
      "percent": number
    }
  ],
  "reactions": {
    "1": number,
    "2": number,
    "3": number,
    "4": number,
    "5": number,
    "6": number,
    "7": number,
    "8": number,
    "9": number,
    "10": number,
    "11": number,
    "12": number,
    "14": number,
    "15": number,
    "16": number,
    "18": number,
    "20": number,
    "21": number
  },
}
export interface IScreenShots {
  "count": number,
  "next": null,
  "previous": null,
  results:[
    {
      "id":number,
      "image": string,
      "is_deleted":boolean
    }
  ]
}
export interface IScreenShot {
  "id":number,
  "image": string,
  "is_deleted":boolean
}
export interface IGameTrailers {
  count: number,
  next: null,
  previous: null,
  results: [
    {
      id:number,
      name: string,
      preview: string,
      date: {
        480: string,
        max:string,
      }
    }
  ]
}
export interface IGameTrailer {
  id:number,
  name: string,
  preview: string,
  date: object
}
