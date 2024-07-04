import type { Meta, StoryObj } from '@storybook/react';
import { NextBook } from './NextBook';
import { NEVER_EAT_ALONE } from '../../../utilities/Book.data';

const meta = {
    title: 'Components/Molecules/NextBook',
    component: NextBook,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NextBook>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const Next_Book: Story = {
    args: { 
        book: NEVER_EAT_ALONE
}};