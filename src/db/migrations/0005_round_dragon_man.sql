ALTER TABLE "tasks" ALTER COLUMN "id" SET DATA TYPE uuid USING (id::uuid);--> statement-breakpoint
ALTER TABLE "tasks" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();