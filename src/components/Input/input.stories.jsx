/* eslint-disable no-unused-vars */
import Input from './Input';
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";


export default {
    title: 'Components/Input',
    component: Input,
    tags: ["autodocs"],

}

export const First = {
    args: {
        primary: true,
        label: "First",
    },
};


export const Secondary = {

    parametrs: {
        docs: {
            description: {
                story: 'Secondary Input documentation',
            },
        },
    },
    name: 'Secondary Input ',
    args: {
        label: "Secondary Input",
        children: "WOOw"

    },

    a11y: {
        disable: false, //otklyuchenie testov
        // Optional selector to inspect
        element: '#storybook-root',
        config: {
            rules: [
                {
                    // The autocomplete rule will not run based on the CSS selector provided
                    id: '#bttn',
                    enabled: false,
                },
                {
                    // Setting the enabled option to false will disable checks for this particular rule on all stories.
                    id: 'image-altawd',
                    enabled: false,
                },
            ],
        },
        options: {},
        manual: true,
    },




};

First.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', { name: '' });
  
    await userEvent.type(input, 'Test search');
    
    await  expect(input).toHaveValue('Test search'); };