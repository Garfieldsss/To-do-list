import { sql } from 'drizzle-orm';
import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core';

// 用户表
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  name: text('name'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
  deletedAt: text('deleted_at'),
});

// 任务表
export const tasks = sqliteTable('tasks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => users.id),
  title: text('title').notNull(),
  description: text('description'),
  status: text('status').notNull().default('todo'), // 'todo', 'in_progress', 'completed'
  priority: text('priority').notNull().default('medium'), // 'low', 'medium', 'high'
  tags: text('tags'), // JSON string
  dueDate: text('due_date'), // ISO date string
  completedAt: text('completed_at'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

// 活动日志表
export const activityLogs = sqliteTable('activity_logs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => users.id),
  action: text('action').notNull(), // 'SIGN_UP', 'SIGN_IN', 'TASK_CREATED', etc.
  ipAddress: text('ip_address'),
  metadata: text('metadata'), // JSON string
  timestamp: text('timestamp').default(sql`CURRENT_TIMESTAMP`),
});

// TypeScript 类型定义
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Task = typeof tasks.$inferSelect & { tags: string[] };
export type NewTask = typeof tasks.$inferInsert;
export type ActivityLog = typeof activityLogs.$inferSelect;
export type NewActivityLog = typeof activityLogs.$inferInsert;

// 枚举类型
export const TaskStatus = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress', 
  COMPLETED: 'completed'
} as const;

export const TaskPriority = {
  LOW: 'low',
  MEDIUM: 'medium', 
  HIGH: 'high'
} as const;

export const ActivityType = {
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  TASK_CREATED: 'TASK_CREATED',
  TASK_UPDATED: 'TASK_UPDATED',
  TASK_DELETED: 'TASK_DELETED',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED'
} as const;
