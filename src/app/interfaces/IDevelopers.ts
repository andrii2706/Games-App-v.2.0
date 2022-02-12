export interface IDevelopers {
  "id": number,
  "name": string,
  "slug": string,
  "games_count": number,
  "image_background": string,
  games:[IDevGames]
}
export interface IDevelopersFull {
  count:number,
  next:string,
  previous:string,
  results:IDevelopers[]
}
export interface IDevGames{
  "id": number,
  "slug": string,
  "name": string,
  "added": number
}
export interface IDevelopersDetails {
  id: number,
  name: string,
  slug: string,
  games_count: string,
  image_background: string,
  description: string
}
