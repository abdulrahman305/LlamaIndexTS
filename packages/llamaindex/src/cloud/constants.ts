import type { ServiceContext } from "../ServiceContext.js";

export const DEFAULT_PROJECT_NAME = "Default";
export const DEFAULT_BASE_URL = "https://api.cloud.llamaindex.ai";

export type ClientParams = { apiKey?: string; baseUrl?: string };

export type CloudConstructorParams = {
  name: string;
  projectName: string;
  organizationId?: string;
  serviceContext?: ServiceContext;
} & ClientParams;
