import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    let order = new Order();
    order = { ...order, ...createOrderDto };
    return this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find();
  }
}
