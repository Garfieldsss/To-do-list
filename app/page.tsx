import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Calendar, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <CheckCircle2 className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">待办清单</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button variant="ghost">登录</Button>
              </Link>
              <Link href="/sign-up">
                <Button>注册</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero 区域 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            现代化的待办事项管理
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            功能完整的任务管理应用，支持智能日期选择、优先级管理、标签分类等功能。
            完全中文界面，现代化设计，让您的工作更高效。
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/sign-up">
              <Button size="lg" className="px-8">
                立即开始
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline" size="lg" className="px-8">
                现在登录
              </Button>
            </Link>
          </div>
        </div>

        {/* 功能特色 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-2" />
              <CardTitle>智能日期选择</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                今天、明天、一周后等预设选项，让日期设置更便捷
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
              <CardTitle>任务状态管理</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                待办、进行中、已完成，清晰的状态流转管理
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>优先级设置</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                高、中、低优先级分类，重要任务一目了然
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>个人专属</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                注册账号，享受个人专属的任务管理空间
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* 技术特色 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">技术特色</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-muted">
              <h3 className="font-semibold mb-2">Next.js 15</h3>
              <p className="text-sm text-muted-foreground">
                最新的 React 框架，提供卓越的性能和开发体验
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted">
              <h3 className="font-semibold mb-2">TypeScript</h3>
              <p className="text-sm text-muted-foreground">
                类型安全的开发，减少错误，提高代码质量
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted">
              <h3 className="font-semibold mb-2">现代化 UI</h3>
              <p className="text-sm text-muted-foreground">
                基于 shadcn/ui 和 Tailwind CSS 的现代化界面设计
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t py-8 text-center text-muted-foreground">
        <p>&copy; 2024 待办清单. 现代化任务管理应用.</p>
      </footer>
    </div>
  );
}
