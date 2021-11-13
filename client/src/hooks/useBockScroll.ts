export const useBlockScroll = () => {
  return {
    blockScroll: () => (document.body.style.overflow = 'hidden'),
    unblockScroll: () => (document.body.style.overflow = ''),
  };
};
