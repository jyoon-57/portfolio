import { ProjectData } from '../types';
import { magritte } from './magritte';
import { saga } from './saga';

export * from '../types';
export const projects: ProjectData[] = [magritte, saga];
