export const alertTheme = {
  slots: {
    overlay: 'fixed inset-0 bg-[rgba(0,0,0,0.2)]',
    wrapper: 'fixed inset-0 flex items-center justify-center overflow-auto',
    container: 'flex flex-col min-h-[140px] min-w-[270px] bg-white rounded-[14px]',
  },
  variants: {
    transition: {
      true: {
        overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
        container: 'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]'
      }
    },
  },
}