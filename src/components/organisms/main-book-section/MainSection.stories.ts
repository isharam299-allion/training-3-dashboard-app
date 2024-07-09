import type { Meta, StoryObj } from '@storybook/react';
import { MainBookSection } from './MainBookSection';

const meta = {
    title: 'Components/Organisms/MainBookSection',
    component: MainBookSection,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MainBookSection>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const MainSection: Story = {
    args: { 
       $isMenuOpen: false,
       $isUserSectionOpen: false
}};