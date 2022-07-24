import { ref, watch } from "vue";

const languages = ref([]);

export const useLanguages = () => {
  const add = (language) => {
    if (languages.value.includes(language)) {
      return;
    }

    languages.value = [...languages.value, language];
  }

  const remove = (language) => {
    languages.value = [...languages.value.filter((value) =>value !== language)];
  }

  const toggle = (language) => {
    if (languages.value.includes(language)) {
      return remove(language)
    }

    return add(language)
  }

  const clear = () => {
    languages.value = [];
  }

  const changed = (f) => {
    return watch(languages, f)
  }

  return {
    languages,
    add,
    remove,
    toggle,
    clear,
    changed,
  };
};
