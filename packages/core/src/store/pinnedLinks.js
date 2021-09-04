import create from 'zustand';
import { persist } from 'zustand/middleware';

function defineStore(set) {
  function pinLink(link) {
    set((state) => ({
      pinnedLinks: [...state.pinnedLinks, link],
    }));
  }

  function unpinLink(link) {
    set((state) => {
      const newLinks = state.pinnedLinks.filter((existingLink) => existingLink !== link);
      return {
        pinnedLinks: newLinks,
      };
    });
  }

  return {
    pinnedLinks: [],
    pinLink,
    unpinLink,
  };
}

export const usePinnedLinksStore = create(
  persist(defineStore, {
    name: 'fad-pinned-links',
  }),
);
