import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MenuItem } from './MenuItem';
import { SvgIconAssests } from '../../../assests';

const meta = {
    title: 'Components/Molecules/MenuItem',
    component: MenuItem,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const InactiveHomeMenuItem: Story = {
    args: { 
        isActive: false,
        content : 'Home',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.HOME_SVG,
        onClick : fn()
}};

export const ActiveHomeMenuItem: Story = {
    args: { 
        isActive: true,
        content : 'Home',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.HOME_ACTIVE_SVG,
        onClick : fn()
}};

export const InactiveFavouriteMenuItem: Story = {
    args: { 
        isActive: false,
        content : 'Favorite',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.HEART_ICON_SVG,
        onClick : fn()
}};

export const ActiveFavotiteMenuItem: Story = {
    args: { 
        isActive: true,
        content : 'Favorite',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.HEART_ACTIVE_ICON_SVG,
        onClick : fn()
}};

export const InactiveCategoryMenuItem: Story = {
    args: { 
        isActive: false,
        content : 'Categories',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.CATEGORY_SVG,
        onClick : fn()
}};

export const ActiveCategoryMenuItem: Story = {
    args: { 
        isActive: true,
        content : 'Categories',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.CATEGORY_ACTIVE_SVG,
        onClick : fn()
}};

export const InactiveFolderMenuItem: Story = {
    args: { 
        isActive: false,
        content : 'Your Library',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.FOLDER_ICON_SVG,
        onClick : fn()
}};

export const ActiveFolderMenuItem: Story = {
    args: { 
        isActive: true,
        content : 'Your Library',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.FOLDER_ACTIVE_ICON_SVG,
        onClick : fn()
}};

export const InactiveSettingMenuItem: Story = {
    args: { 
        isActive: false,
        content : 'Settings',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.SETTING_ICON_SVG,
        onClick : fn()
}};

export const ActiveSettingMenuItem: Story = {
    args: { 
        isActive: true,
        content : 'Settings',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.SETTING_ACTIVE_ICON_SVG,
        onClick : fn()
}};

export const InactiveLogoutMenuItem: Story = {
    args: { 
        isActive: false,
        content : 'Logout',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.LOGOUT_ICON_SVG,
        onClick : fn()
}};

export const ActiveLogoutMenuItem: Story = {
    args: { 
        isActive: true,
        content : 'Logout',
        MenuIconSvg : SvgIconAssests.SVG_COMPONENTS.LOGOUT_ACTIVE_ICON_SVG,
        onClick : fn()
}};


