import { Priority, Status } from "src/goals/enums";

export class CreateGoalDto {
  name: string;
  priority: Priority;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
