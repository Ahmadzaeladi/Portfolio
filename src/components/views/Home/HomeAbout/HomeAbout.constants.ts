import {
  Code,
  Layout,
  Server,
  Award,
  Layers,
  CheckCircle,
  FileCode,
  Globe,
  Palette,
  Terminal,
  Network,
  GitBranch,
  Zap,
  Smartphone,
  Boxes,
  Cpu,
  Database,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SkillLevel } from "@/constants/portfolioData";

export const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  Layout,
  Server,
  FileCode,
  Globe,
  Palette,
  Terminal,
  Network,
  GitBranch,
  Zap,
  Smartphone,
  Boxes,
  Cpu,
  Database,
  Lock,
  Award,
  Layers,
  CheckCircle,
};

export const LEVEL_PERCENT: Record<SkillLevel, number> = {
  Expert: 92,
  Advanced: 78,
  Intermediate: 60,
};

export const LEVEL_COLOR: Record<SkillLevel, "success" | "primary" | "secondary"> = {
  Expert: "success",
  Advanced: "primary",
  Intermediate: "secondary",
};
