<template>
    <span :class="mode">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
    }
}
</script>

<style scoped>
    span {
        text-transform: uppercase;
        font-size: 13px;
        color: var(--global-light-gray);
    }
    .d-block {
        display: block;
    }
</style>