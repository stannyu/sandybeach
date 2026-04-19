import { useState } from 'react';
import { cn } from '@/lib/utils';
import { getLongestUniqueSubstringLength } from '@/lib/longestSubstring';

export function LongestSubstringWidget() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="w-full">
      {/* Top Divider */}
      <div className="border-t border-border" />

      {/* Content */}
      <div className="px-6 py-8">
        <div className="space-y-6">
          {/* Input Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Input Text
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter some text"
              className={cn(
                'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors',
                'placeholder:text-muted-foreground',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
                'disabled:cursor-not-allowed disabled:opacity-50'
              )}
            />
          </div>

          {/* Output Section */}
          <div className="space-y-2">
            <label className="text-2xl font-bold my-8 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Result
            </label>
            <div className="flex h-9 rounded-md border border-input bg-muted/50 px-3 py-1 items-center text-base">
              <span className="text-foreground font-medium">
                {getLongestUniqueSubstringLength(inputValue)}
              </span>
              <span className="text-muted-foreground ml-2 text-sm text-align-center">
                longest substring without repeating characters
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-b border-border" />
    </div>
  );
}
