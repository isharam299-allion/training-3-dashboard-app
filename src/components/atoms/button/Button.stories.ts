import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';


const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ViewNowButton: Story = {
  args: { 
    title: 'VIEW NOW'
}}
