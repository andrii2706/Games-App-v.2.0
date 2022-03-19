export interface IConsoles {
  count: number,
  next: string,
  previous: string,
  results: IConsole[]
}
export interface IConsole {
  id: number,
  name: string,
  slug : string,
  image: string,
  image_background: string,
  games_count: number
}
