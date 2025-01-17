import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from './SearchBox';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/Molecules/SearchBox',
    component: SearchBox,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const SearchBooksBox: Story = {
    args: { 
      setSearchBooks : fn()
}};