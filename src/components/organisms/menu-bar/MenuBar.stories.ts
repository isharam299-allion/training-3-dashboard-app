import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './MenuBar';

const meta = {
    title: 'Components/Organisms/MenuBar',
    component: MenuBar,
    parameters: {
      layout: 'centered',
      
    },
    
    tags: ['autodocs'],
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const MenuBarPanel: Story = {
    args: { 
       $isMenuOpen: false
}};