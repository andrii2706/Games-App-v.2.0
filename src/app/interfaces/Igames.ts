export interface IGame {
  id: number,
  slug: string,
  name: string,
  released: string,
  background_image: string
  tba: boolean,
  rating: number,
  rating_top: number,
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
