
// Fix: Import React to resolve the 'Cannot find namespace React' error on line 19
import React from 'react';

export interface SeasoningRecipe {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
  bestUsedWith: string[];
  // Fix: Make image optional as it is not part of the current AI generation schema
  image?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
