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

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Clock, CheckCircle, AlertCircle, Users, Calendar, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  const completedMilestones = project.milestones.filter((m) => m.completed).length;
  const progress = (completedMilestones / project.milestones.length) * 100;