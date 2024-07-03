import type { Meta, StoryObj } from '@storybook/react';
import { ICON_TYPE, SvgIcon } from './SvgIcon';
import { SvgFlagAssests, SvgIconAssests } from '../../../assests';

const meta = {
    title: 'Components/Atoms/SvgIcon',
    component: SvgIcon,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const HomeMenuIcon: Story = {
args: { 
    type: ICON_TYPE.MENU_ICON,
    SvgComponent: SvgIconAssests.SVG_COMPONENTS.HOME_SVG
}};

export const CategoryMenuIcon: Story = {
args: { 
    type: ICON_TYPE.MENU_ICON,
    SvgComponent: SvgIconAssests.SVG_COMPONENTS.HEART_ICON_SVG
}};

export const FavoriteMenuIcon: Story = {
args: { 
    type: ICON_TYPE.MENU_ICON,
    SvgComponent: SvgIconAssests.SVG_COMPONENTS.HEART_ICON_SVG
}};

export const FolderMenuIcon: Story = {
args: { 
    type: ICON_TYPE.MENU_ICON,
    SvgComponent: SvgIconAssests.SVG_COMPONENTS.FOLDER_ICON_SVG
}};

export const SettingMenuIcon: Story = {
args: { 
    type: ICON_TYPE.MENU_ICON,
    SvgComponent: SvgIconAssests.SVG_COMPONENTS.SETTING_ICON_SVG
}};

export const HomeActiveMenuIcon: Story = {
    args: { 
        type: ICON_TYPE.MENU_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.HOME_ACTIVE_SVG
    }};
    
    export const CategoryActiveMenuIcon: Story = {
    args: { 
        type: ICON_TYPE.MENU_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.HEART_ACTIVE_ICON_SVG
    }};
    
    export const FavoriteActiveMenuIcon: Story = {
    args: { 
        type: ICON_TYPE.MENU_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.HEART_ACTIVE_ICON_SVG
    }};
    
    export const FolderActiveMenuIcon: Story = {
    args: { 
        type: ICON_TYPE.MENU_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.FOLDER_ACTIVE_ICON_SVG
    }};
    
    export const SettingActiveMenuIcon: Story = {
    args: { 
        type: ICON_TYPE.MENU_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.SETTING_ACTIVE_ICON_SVG
    }};

    export const SearchIcon: Story = {
    args: { 
        type: ICON_TYPE.SEARCH_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.SEARCH_ICON_SVG
    }};

    export const FlagIcon: Story = {
    args: { 
        type: ICON_TYPE.FLAG_ICON,
        SvgComponent: SvgFlagAssests.SVG_FLAGS.FLAG_UK_SVG
    }};

    export const NotificationIcon: Story = {
    args: { 
        type: ICON_TYPE.NOTIFICATION_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.NOTIFICATION_ICON_SVG
    }};

    export const BackIcon: Story = {
    args: { 
        type: ICON_TYPE.NEXT_BACK_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.BACK_SVG
    }};

    export const NextIcon: Story = {
    args: { 
        type: ICON_TYPE.NEXT_BACK_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.NEXT_ICON_SVG
    }};

    export const PauseIcon: Story = {
    args: { 
        type: ICON_TYPE.PLAY_PAUSE_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.PAUSE_ICON_SVG
    }};

    export const DownIcon: Story = {
    args: { 
        type: ICON_TYPE.DOWN_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.DOWN_SVG
    }};

    export const ReadBooksIcon: Story = {
    args: { 
        type: ICON_TYPE.READ_INFO_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.READ_BOOKS_ICON_SVG
    }};

    export const ReadingBooksIcon: Story = {
    args: { 
        type: ICON_TYPE.READ_INFO_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.READING_BOOKS_ICON_SVG
    }};

    export const AuthorsIcon: Story = {
    args: { 
        type: ICON_TYPE.READ_INFO_ICON,
        SvgComponent: SvgIconAssests.SVG_COMPONENTS.AUTHORS_SVG
    }};

    



  

  