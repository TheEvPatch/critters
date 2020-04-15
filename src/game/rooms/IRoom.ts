import { IEntityPlayer } from '@game/entities/IEntityPlayer';

/**
 * Room interface.
 * 
 * @interface
 */
export interface IRoom {
  id: string
  players: Set<IEntityPlayer>

  add(player: IEntityPlayer, x: number, y: number, r: number): void
  remove(player: IEntityPlayer): void
  broadcast(name: string, event: object): void
}

