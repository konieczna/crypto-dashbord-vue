<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
    div {
        position: relative;
        margin-bottom: 20px;
        background: var(--global-light-gray-2);
        padding: 8px 12px;
        border-radius: 8px;
        max-width: 100%;
    }
</style>