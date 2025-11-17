import { UUID } from "./typeUUID";

type BotState = 
  | 'idle'
  | 'moving'
  | 'attacking'
  | 'followingPlayer'
  | 'mining'
  | 'choppingTree';

type CurrentStatus = {
  UUID: UUID;
  state: BotState;
  targetEntityUUID?: UUID;
};

export { BotState, CurrentStatus };