import type { Meta, StoryObj } from '@storybook/react';
import { PopularBook } from './PopularBook';
import { NEVER_EAT_ALONE, THE_GREAT_GASBY } from '../../../utilities/Book.data';

const meta = {
    title: 'Components/Molecules/PopularBook',
    component: PopularBook,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PopularBook>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const PopularBookNeverEatAlone: Story = {
    args: { 
        book: NEVER_EAT_ALONE
}};

export const PopularBookGreatGatsby: Story = {
    args: { 
        book: THE_GREAT_GASBY
}};

