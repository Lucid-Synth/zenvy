import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/app/drizzle/db/drizzle";
import * as schema from '@/app/drizzle/schema/auth-schema'

export const auth = betterAuth({
  database: drizzleAdapter(db, { 
    provider: "pg",
    schema
  },), 
  emailAndPassword: {    
        enabled: true
    } 
});