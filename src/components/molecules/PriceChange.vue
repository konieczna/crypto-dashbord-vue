<template>
    <p :class="isNegativeOrPositive">
        {{priceChangePercent}} %
    </p>
</template>

<script>
export default {
    props: ['priceChangePercent'],
    computed: {
        isNegativeOrPositive() {
            return {
                'color-green': this.priceChangePercent > 0,
                'color-red': this.priceChangePercent < 0
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    p {
        position: relative;
        padding-left: 20px;
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 14px;
            height: 14px;
            -webkit-mask: url('../../assets/icons/arrow.svg') no-repeat center;
            mask: url('../../assets/icons/arrow.svg') no-repeat center;
        }
        &.color-red {
            &::before {
                background-color: var(--global-red);
                transform: translateY(-50%) rotate(180deg);
            }
        }
        &.color-green {
            &::before {
                background-color: var(--global-green);
            }
        }
    }
</style>