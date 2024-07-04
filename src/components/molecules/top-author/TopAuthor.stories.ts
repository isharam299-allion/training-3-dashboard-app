import type { Meta, StoryObj } from '@storybook/react';
import { TopAuthor } from './TopAuthor';
import { MARKUS_ZUKAS, R_J_PALACIO } from '../../../utilities/Author.data';

const meta = {
    title: 'Components/Molecules/TopAuthor',
    component: TopAuthor,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TopAuthor>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const TopAuthorRJPalacio: Story = {
    args: { 
        author: R_J_PALACIO
}};

export const TopAuthorMarkusZukus: Story = {
    args: { 
        author: MARKUS_ZUKAS
}};

