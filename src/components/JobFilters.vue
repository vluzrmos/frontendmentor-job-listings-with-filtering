<script setup>
import LanguageButton from "./LanguageButton.vue";

const {languages} = defineProps({ languages: Array });
defineEmits(['remove', 'clear'])

</script>

<template>
  <div class="list_filters" v-show="languages.length">
    <div class="list_filters__languages">
        <LanguageButton v-for="language in languages" :key="language" :closeable="true" @close="$emit('remove', language)">{{language}}</LanguageButton>
    </div>

    <div>
        <a href="#" @click.prevent="$emit('clear')" class="list_filters__clear">Clear</a>
    </div>
  </div>
</template>