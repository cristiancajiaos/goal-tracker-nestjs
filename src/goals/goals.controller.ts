import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('goals')
export class GoalsController {
  @Get()
  findAll() {}

  @Get()
  findOne() {}

  @Post()
  create() {}

  @Patch()
  update() {}
  
  @Delete()
  remove() {}

}
