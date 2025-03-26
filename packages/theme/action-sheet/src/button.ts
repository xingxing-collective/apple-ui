export const buttonTheme = {
  slots: {
    wrapper: 'flex items-center justify-center',
    container: 'w-full border-[rgba(128,128,128,0.55)] border-b-[0.33px]  h-[56px]',
    text: 'text-[17px] leading-[54px]'
  },
  variants: {
    color: {
      destructive: {
        text: 'text-[rgba(var(--ui-color-red))]'
      },
      disabled: {
        text: 'text-[rgba(128,128,128,0.55)]'
      },
      default: {
        text: 'text-[rgba(var(--ui-color-blue))]'
      }
    }
  }
}