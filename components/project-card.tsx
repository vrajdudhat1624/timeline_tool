interface Milestone {
  title: string;
  date: string;
  completed: boolean;
}

interface Project {
  id: number;
  title: string;
  client: string;
  startDate: string;
  endDate: string;
  status: string;
  description: string;
  consultants: string[];
  milestones: Milestone[];
}