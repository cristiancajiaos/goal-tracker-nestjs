import { PartialType } from "@nestjs/mapped-types";
import { CreateGoalDto } from "../create-goal-dto/create-goal-dto";

export class UpdateGoalDto extends PartialType(CreateGoalDto) {}
