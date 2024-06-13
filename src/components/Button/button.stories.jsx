/* eslint-disable no-unused-vars */
import Button from './Button';
import './Button.css';
import {within, userEvent} from "@storybook/testing-library";
import {expect} from "@storybook/jest";


export default {
    title: 'Components/Button',
    component: Button,
    tags: ["autodocs"],
    
}

export const Primary = {
    args: {
      primary: true,
      label: "Primary",
    },
  };

  Primary.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(button).toHaveTextContent('button');
    await expect(button).toHaveStyle('background-color:#40d395f')

  };
  // Default.play = async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const input = canvas.getByRole('textbox');
  //   await userEvent.type(input, 'Hello, World!');
  //   expect(input).toHaveValue('Hello, World!');
  //   expect(canvas.getByText('Hello, World!')).toBeInTheDocument();
  // };









  
  export const Secondary = {

    parametrs:{
      docs:{
        description:{
          story:'Secondary Button documentation',
        },
      },
    },
    name: 'Secondary Button Title',
    args: {
      label: "Secondary Butt\n",
      children:"WOOw"
      
    },

    a11y: {
      disable:false, //otklyuchenie testov
      // Optional selector to inspect
      element: '#storybook-root',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: '#bttn',
            enabled:false,
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