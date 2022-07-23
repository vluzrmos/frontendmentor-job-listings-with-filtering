<script setup>
import JobListItem from "./JobListItem.vue";

const props = defineProps({ items: Array });

const emit = defineEmits(["language-selected"]);

const languageSelected = (language) => emit("language-selected", language);
</script>
<template>
  <div class="list">
    <JobListItem
      v-for="item in props.items"
      v-bind="{item}"
      :key="item.id"
      @language-selected="languageSelected"
    />
  </div>
</template>