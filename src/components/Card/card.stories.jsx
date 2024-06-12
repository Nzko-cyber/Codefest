import Card from './Card'

export default {
    title: 'Card',
    component: Card,
}



export const Primary = {
    args: {
      primary: true,
      label: "Primar",
    },
  };
  
  export const Secondary = {
    args: {
      label: 'Secondary',
      
    },
    a11y: {
      // tests off,on
      disable: false,
    },
  };