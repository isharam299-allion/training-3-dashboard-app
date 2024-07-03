import type { Meta, StoryObj } from '@storybook/react';
import { StyledInput } from './SearchInput';

const meta = {
    title: 'Components/Atoms/Input',
    component: StyledInput,
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'dark',
      },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StyledInput>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const SearchInput: Story = {
args: { 
    placeholder: 'Search your book ...'
}};