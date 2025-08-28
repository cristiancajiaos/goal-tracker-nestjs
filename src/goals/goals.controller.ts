import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CreateGoalDto, UpdateGoalDto } from './dtos/index';
import { Goal } from './entities/goal/goal';
import { Priority, Status } from './enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('goals')
export class GoalsController {

  constructor (
    @InjectRepository(Goal) private readonly repository: Repository<Goal>
  ){}
  

  @Get()
  async findAll() {
    const goals = await this.repository.find();

    return {success: true, count: goals.length, data: goals};
  }

  @Get(":id")
  async findOne(@Param("id") id) {
    const goal = await this.repository.findOneBy({id});

    if (!goal) {
      throw new NotFoundException();
    }

    return {success: true, data: goal};
  }

  @Post()
  async create(@Body() input: CreateGoalDto) {
    const goal = await this.repository.save({
      ...input,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {success: true, data: goal};
  }

  @Patch(":id")
  async update(@Param("id") id, @Body() input: UpdateGoalDto) {
    const goal = await this.repository.findOneBy({id});

    if (!goal) {
      throw new NotFoundException();
    }

    const data = await this.repository.save({
      ...goal,
      ...input,
      createdAt: input.createdAt ?? goal.createdAt,
      updatedAt: input.updatedAt ?? goal.updatedAt
    });
    
    return {success: true, data};
  }
  
  @Delete(":id")
  @HttpCode(204)
  async remove(@Param("id") id) {
    const goal = await this.repository.findOneBy({id});

    if (!goal) {
      throw new NotFoundException();
    }

    await this.repository.remove(goal);
  }

}
