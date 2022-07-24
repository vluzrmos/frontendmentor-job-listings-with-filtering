<script setup>
import Badge from "@/components/Badge.vue";
import LanguageButton from "@/components/LanguageButton.vue";
import { useLanguages } from "@/composition/useLanguages";

const { languages, toggle: languageSelected } = useLanguages();

const props = defineProps({ item: Object });
</script>
<template>
  <div
    class="list__item"
    :class="{'list__item--featured' : item.featured, 'list__item--new' : item.new}"
  >
    <div class="list__item___logo__wrapper">
      <img :src="item.logo" :alt="`${item.company} logo`" class="list__item__logo" />
    </div>
    <div class="list__item__content_wrapper">
      <div class="list__item__description">
        <div class="list__item__header">
          <h1 class="list__item__company">{{item.company}}</h1>
          <div class="list__item__badges">
            <Badge v-if="item.new" variant="new">NEW!</Badge>
            <Badge v-if="item.featured" variant="featured">FEATURED</Badge>
          </div>
        </div>
        <div class="list__item__position">{{item.position}}</div>
        <div class="list__item__info">
          <div class="list__item__info__posted_at">{{item.postedAt}}</div>
          <div class="list__item__info__separator">&bullet;</div>
          <div class="list__item__info__contract">{{item.contract}}</div>
          <div class="list__item__info__separator">&bullet;</div>
          <div class="list__item__info__location">{{item.location}}</div>
        </div>
      </div>

      <div class="list__item__languages">
        <LanguageButton
          v-for="language in [item.role, item.level, ...item.languages]"
          :key="language"
          @click="languageSelected(language)"
          :active="languages.includes(language)"
        >{{language}}</LanguageButton>
      </div>
    </div>
  </div>
</template>