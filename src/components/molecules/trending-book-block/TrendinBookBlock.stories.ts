import type { Meta, StoryObj } from '@storybook/react';
import { TrendingBookBlock } from './TrendingBookBlock';

const meta = {
    title: 'Components/Molecules/TrendingBookBlock',
    component: TrendingBookBlock,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TrendingBookBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const TrendingBlock: Story = {
    args: { 
       
}};