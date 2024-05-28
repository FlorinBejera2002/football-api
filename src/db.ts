enum IPosition {
  Goalkeeper = "Goalkeeper",
  Defender = "Defender",
  Midfielder = "Midfielder",
  Forward = "Forward"
}

export type IFootballPlayer = {
  id: number,
  name: string,
  number: number,
  team: string,
  age: number,
  position: IPosition,
}

export const players: IFootballPlayer[] = [
  { id: 1, name: 'Lionel Messi', number: 10, team: 'Paris Saint-Germain', age: 34, position: IPosition.Forward },
  { id: 2, name: 'Cristiano Ronaldo', number: 7, team: 'Manchester United', age: 36, position: IPosition.Forward },
  { id: 3, name: 'Neymar Jr.', number: 10, team: 'Paris Saint-Germain', age: 29, position: IPosition.Forward },
  { id: 4, name: 'Robert Lewandowski', number: 9, team: 'Bayern Munich', age: 33, position: IPosition.Forward },
  { id: 5, name: 'Kevin De Bruyne', number: 17, team: 'Manchester City', age: 30, position: IPosition.Midfielder },
  { id: 6, name: 'Virgil van Dijk', number: 4, team: 'Liverpool', age: 30, position: IPosition.Defender },
  { id: 7, name: 'Manuel Neuer', number: 1, team: 'Bayern Munich', age: 35, position: IPosition.Goalkeeper },
]
