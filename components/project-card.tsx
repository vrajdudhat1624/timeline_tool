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
    >
          <motion.div className="p-5" layout="position">
            <div className="flex justify-between items-start mb-3">
              <div>
                <motion.h3 className="font-semibold text-lg text-slate-800" layout="position">
                  {project.title}
                </motion.h3>
                <motion.p className="text-slate-500 text-sm" layout="position">
                  {project.client}
                </motion.p>
              </div>
              <StatusBadge status={project.status} />
            </div>

            <motion.div className="flex items-center text-sm text-slate-500 mb-4" layout="position">
              <Calendar className="w-4 h-4 mr-1" />
              <span>
                {startDate} - {endDate}
              </span>
            </motion.div>

            <motion.p className="text-slate-600 mb-4" layout="position">
              {project.description}
            </motion.p>

            <motion.div className="flex justify-between items-center mb-1" layout="position">
              <span className="text-sm font-medium text-slate-700">Progress</span>
              <span className="text-sm text-slate-500">
                {completedMilestones} of {project.milestones.length}
              </span>
            </motion.div>

            <motion.div layout="position" className="mb-4">
              <Progress value={progress} className="h-2" />
            </motion.div>

            <motion.div layout="position">
              <Button
                variant="ghost"
                size="sm"
                className="w-full flex items-center justify-center text-slate-600 hover:text-slate-900 mt-2"
                onClick={onToggle}
              >
                {isExpanded ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Show details</span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    }
function StatusBadge({ status }: { status: string }) {
  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    hover: { scale: 1.05 },
  };

  switch (status) {
    case "completed":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        </motion.div>
      );
    case "active":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Clock className="w-3 h-3 mr-1" />
            Active
          </Badge>
        </motion.div>
      );
    case "at-risk":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            <AlertCircle className="w-3 h-3 mr-1" />
            At Risk
          </Badge>
        </motion.div>
      );
    case "planned":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">
            <Clock className="w-3 h-3 mr-1" />
            Planned
          </Badge>
        </motion.div>
      );
    default:
      return null;
  }
}
