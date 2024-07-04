import type { Meta, StoryObj } from '@storybook/react';
import { WeekReadBooksBlock } from './WeekReadBook';

const meta = {
    title: 'Components/Molecules/WeekReadBooksBlock',
    component: WeekReadBooksBlock,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof WeekReadBooksBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const WeekReadBooksSummaryBlock: Story = {
    args: { 
        readCount: 3,
        readingCount: 5
}};