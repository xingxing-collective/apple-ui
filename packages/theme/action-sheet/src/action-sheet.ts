export const actionSheetTheme = {
    slots: {
        overlay: 'fixed inset-0 bg-[rgba(0,0,0,0.2)]',
        wrapper: 'fixed inset-0 flex items-end overflow-auto',
        container: 'w-full flex flex-col pb-[34px] p-3 break-words',
        header: 'bg-[rgba(var(--ui-color-white))] rounded-t-[14px]',
        content: 'flex w-full flex-col bg-[rgba(var(--ui-color-white))] rounded-b-[14px]',
        footer:'mt-2 h-[56px] w-full flex items-center justify-center bg-[rgba(var(--ui-color-white))] rounded-[14px] text-[rgba(var(--ui-color-blue))]'
    },
    variants: {
        transition: {
            true: {
                overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
                content: 'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]'
            }
        },
    },
}