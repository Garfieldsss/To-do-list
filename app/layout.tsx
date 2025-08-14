import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '待办清单 - 现代化任务管理应用',
  description: '功能完整的待办事项管理应用，支持智能日期选择、任务分类、优先级管理等功能。完全中文界面，现代化设计。',
  keywords: ['待办事项', '任务管理', 'TodoList', 'Next.js', '中文界面'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
