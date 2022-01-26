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
  results: IGame[]
}
