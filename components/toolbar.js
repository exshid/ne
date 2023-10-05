'use client';
import { useEffect, useState } from "react";
import { MinusSquare, Moon, PlusSquare, Search, Sun, Type } from 'lucide-react';
import { Tooltip } from '@/components/tooltip';
import { cn } from '@/lib/utils';

export function Toolbar() {
  



  return (
    <div
      className={cn(
        'flex h-8 w-fit flex-row items-center justify-end space-x-1',
        className,
      )}
    >
    </div>
  );
}
