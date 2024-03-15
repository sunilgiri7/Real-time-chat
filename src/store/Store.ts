export type UserId = string;

export interface Chat {
  id: string;
  userId: UserId;
  name: string;
  message: string;
  upvote: UserId[];
}

export abstract class Store {
  constructor() {}
  initRoom(roomId: string) {}
  getChats(room: string, limit: number, offsets: number) {}
  addChat(userId: UserId, name: string, room: UserId, message: string) {}
  upvote(userId: UserId, room: string, chatId: string) {}
}