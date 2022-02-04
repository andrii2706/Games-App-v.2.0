export interface IAchivments {
  count: number,
  next: string,
  previous: string,
  results:[
    {
      id: number,
      name: string,
      description: string,
      image: string,
      percent: string
    }
  ]
}
