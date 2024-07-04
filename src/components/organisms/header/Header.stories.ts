import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from './Header';

const meta = {
    title: 'Components/Organisms/Header',
    component: Header,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const HeaderBlock: Story = {
    args: { 
        onClickLogo: fn(),
        onClickUserIcon: fn()
}};