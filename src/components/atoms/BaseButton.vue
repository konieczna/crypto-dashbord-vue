<template>
    <div>
        <button v-if="!link" :class="mode">
            <slot></slot>
        </button>
        <router-link v-else :to="to" :class="mode">
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style lang="scss" scoped>
    button, a {
        cursor: pointer;
        transition: .3s;
        font-size: 15px;
        line-height: 22px;
        display: inline-flex;
        &:not(.back) {
            border-radius: 20px;
            padding: 6px 12px;
            border: 1px solid var(--global-primary);
            background: var(--global-primary);
            color: var(--global-white);
            &:hover {
                background: transparent;
                color: var(--global-primary);
            }
        }
        &.ghost {
            background: transparent;
            color: var(--global-primary);
            &:hover {
                background: var(--global-primary);
                color: var(--global-white);
            }
        }
        &.back {
            position: relative;
            color: var(--global-primary);
            padding-left: 20px;
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%) rotate(-90deg);
                width: 14px;
                height: 14px;
                background: var(--global-primary);
                -webkit-mask: url('../../assets/icons/arrow.svg') no-repeat center;
                mask: url('../../assets/icons/arrow.svg') no-repeat center;
                transition: .3s;
            }
            &:hover {
                &::before {
                    left: -4px;
                }
            }
        }
    }
</style>