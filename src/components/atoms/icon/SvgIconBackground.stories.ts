import type { Meta, StoryObj } from '@storybook/react';
import { StyledIconBackground } from './IconBackground';
import { ICON_TYPE } from './SvgIcon';

const meta = {
    title: 'Components/Atoms/SvgIconBackground',
    component: StyledIconBackground,
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'dark',
      },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StyledIconBackground>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const MenuIconBg: Story= {
args: { 
    $iconType: ICON_TYPE.MENU_ICON
}};

export const SearchIconBg: Story = {
args: { 
    $iconType: ICON_TYPE.SEARCH_ICON
}};

export const NextBackIconBg: Story = {
args: { 
    $iconType: ICON_TYPE.NEXT_BACK_ICON
}};

export const PlayPauseIconBg: Story = {
args: { 
    $iconType: ICON_TYPE.PLAY_PAUSE_ICON
}};

export const FlagIconBg: Story = {
args: { 
    $iconType: ICON_TYPE.FLAG_ICON
}};

export const ReadInfoIconBg: Story = {
args: { 
    $iconType: ICON_TYPE.READ_INFO_ICON
}};


