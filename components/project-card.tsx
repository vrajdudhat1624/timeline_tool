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
  const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    const startDate = formatDate(project.startDate);
    const endDate = formatDate(project.endDate);

    return (
      <motion.div
        layout
        className={cn(
          "rounded-xl overflow-hidden transition-all duration-300",
          "border border-slate-200 bg-white",
          isExpanded ? "shadow-lg" : "shadow-sm hover:shadow-md",
          project.status === "completed" ? "opacity-75" : "opacity-100",
          project.status === "active" ? "ring-2 ring-primary/20" : "",
        )}
        initial={false}
        animate={{
          y: isExpanded ? -5 : 0,
          scale: isExpanded ? 1.02 : 1,
          zIndex: isExpanded ? 10 : 0,
        }}
        whileHover={{ y: -3 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}