import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // messagesRepository: MessagesRepository;
  //
  // constructor() {
  //   this.messagesRepository = new MessagesRepository();
  // }

  constructor(private readonly messagesRepository: MessagesRepository) {}
  async findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }
  async findAll() {
    return this.messagesRepository.findAll();
  }
  async create(content: string) {
    return this.messagesRepository.create(content);
  }
}
