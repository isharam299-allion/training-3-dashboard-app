import type { Meta, StoryObj } from '@storybook/react';
import { TopAuthorBlock } from './TopAuthorBlock';
import { TOP_AUTHORS } from '../../../utilities/Author.data';

const meta = {
    title: 'Components/Organisms/TopAuthorBlock',
    component: TopAuthorBlock,
    parameters: {
      layout: 'centered',  
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TopAuthorBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const TopAuthorsBlock: Story = {
    args: { 
       authorList: TOP_AUTHORS
}};