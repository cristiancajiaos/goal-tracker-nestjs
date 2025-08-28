import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('goals')
export class GoalsController {
  @Get()
  findAll() {
    return [
      {id: 1, name: 'Goal 1'},
      {id: 2, name: 'Goal 2'},
      {id: 3, name: 'Goal 3'}
    ];
  }

  @Get(":id")
  findOne(@Param("id") id) {
    return {
      id: 1, 
      name: 'Goal 1'
    };
  }

  @Post()
  create(@Body() input) {
    return input
  }

  @Patch(":id")
  update(@Param("id") id, @Body() input) {
    return input
  }
  
  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id) {}

}
