import { Controller, Get, Param } from '@nestjs/common';
import products, { Product } from '../../products';

@Controller('product')
export class ProductController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }
}
