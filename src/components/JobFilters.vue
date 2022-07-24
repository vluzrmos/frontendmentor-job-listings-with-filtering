<script setup>
import LanguageButton from "@/components/LanguageButton.vue";
import { useLanguages } from "@/composition/useLanguages";
const { languages, clear, remove } = useLanguages();
</script>

<template>
  <div class="list_filters" v-show="languages.length">
    <div class="list_filters__languages">
      <LanguageButton
        v-for="language in languages"
        :key="language"
        :closeable="true"
        @close="remove(language)"
      >{{language}}</LanguageButton>
    </div>

    <div>
      <a href="#" @click.prevent="clear" class="list_filters__clear">Clear</a>
    </div>
  </div>
</template>