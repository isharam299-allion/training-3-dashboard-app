import type { Meta, StoryObj } from '@storybook/react';
import { PopularBookBlock } from './PopularBookBlock';
import { POPULAR_BOOKS } from '../../../utilities/Book.data';

const meta = {
    title: 'Components/Organisms/PopularBookBlock',
    component: PopularBookBlock,
    parameters: {
      layout: 'centered',  
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PopularBookBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const PopularBooksBlock: Story = {
    args: { 
       bookList: POPULAR_BOOKS
}};