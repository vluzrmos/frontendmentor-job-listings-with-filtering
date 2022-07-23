<script setup>
const {closeable} = defineProps({closeable: Boolean, default: false})

const emit = defineEmits(['click', 'close'])
</script>

<template>
    <div class="language_button" :class="{'language_button--closeable': closeable}">
        <a href="#" @click.prevent="emit('click')" >
            <slot/>
        </a>

        <a href="" v-if="closeable" @click.prevent="emit('close')" class="language_button__close">✖</a>
    </div>
   
</template>
