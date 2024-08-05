import { FinderConfig } from "@/apps/Finder/finderConfig";
import { TrashConfig } from "@/apps/Trash/trashConfig";
import { AppConfig } from "@/types/app";

export const dockApps: AppConfig[] = [FinderConfig, TrashConfig];

export const trashApp: AppConfig = TrashConfig;
