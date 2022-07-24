<script setup>
const {closeable, active} = defineProps({closeable: Boolean, active: Boolean})

const emit = defineEmits(['click', 'close'])
</script>

<template>
    <div class="language_button" :class="{'language_button--closeable': closeable, 'active': active}">
        <a href="#" @click.prevent="emit('click')" >
            <slot/>
        </a>

        <a href="" v-if="closeable" @click.prevent="emit('close')" class="language_button__close">✖</a>
    </div>
   
</template>
