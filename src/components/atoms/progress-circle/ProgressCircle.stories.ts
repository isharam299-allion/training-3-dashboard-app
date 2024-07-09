import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle } from './ProgressCircle';

const meta = {
    title: 'Components/Atoms/ProgressCircle',
    component: ProgressCircle,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const HalfProgressCircle: Story = {
    args: { 
        $progressFactor : 1/2,
        size : 100,
        $strokeSize : 5
}};