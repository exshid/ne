'use client';
import React from 'react';
import { Button } from 'antd';
import Drawer from '../components/drawer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Button type="primary">Button</Button>
<Drawer/>
    </main>
  )
}
