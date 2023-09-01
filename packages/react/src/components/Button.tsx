import { ComponentProps } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$green500',

        '&:not(:disabled):hover': {
          background: '$green300',
          transition: 'background-color 0.2s'
        },

        '&:disabled': {
          background: '$gray200',
        },
      },

      secondary: {
        color: '$green300',
        border: '2px solid $green500',

        '&:not(:disabled):hover': {
          background: '$green500',
          transition: 'background-color 0.2s',
          color: '$white'
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200'
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
          transition: 'background-color 0.2s'
        },

        '&:disabled': {
          color: '$gray600',
        },
      }
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      }
    }
  },

  defaultVariants: {
    variant: "primary",
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button';