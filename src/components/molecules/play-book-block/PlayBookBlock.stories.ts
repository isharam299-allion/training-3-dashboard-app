import type { Meta, StoryObj } from '@storybook/react';
import { PlayBooksBlock } from './PlayBookBlock';
import { USER_THANH_PHAM } from '../../../utilities/User.data';

const meta = {
    title: 'Components/Molecules/PlayBooksBlock',
    component: PlayBooksBlock,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PlayBooksBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const Next_Book: Story = {
    args: { 
        readingBooks: USER_THANH_PHAM.readingBooks
}};