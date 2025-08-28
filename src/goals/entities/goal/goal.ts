import { Priority, Status } from "src/goals/enums";

export class Goal {
  id: number;
  name: string;
  priority: Priority;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}
