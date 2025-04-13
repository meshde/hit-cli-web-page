import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Since this is a landing page, we're only serving static content
  // and don't need any specific API routes
  
  const httpServer = createServer(app);

  return httpServer;
}
