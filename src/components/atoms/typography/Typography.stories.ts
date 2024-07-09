import type { Meta, StoryObj } from '@storybook/react'; 
import { Heading1 } from './Typography';


const meta: Meta<typeof Heading1> = {
    component: Heading1,
  };
   
  export default meta;
  type Story = StoryObj<typeof Heading1>;
   
  // This story uses a render function to fully control how the component renders.
  export const Example: Story = {
    
  };