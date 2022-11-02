<script setup lang="ts">
export interface Props {
  type: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "presentation",
});
</script>

<template>
  <div class="gap-2 is-flex is-flex-direction-column item" :class="props.type">
    <div class="is-flex">
      <div class="is-flex flex-1 gap-4 is-align-items-center">
        <svg class="h-6 w-6 icon">
          <use :xlink:href="`#${props.type}`"></use>
        </svg>

        <span class="font-bold capitalize">{{ props.type }}</span>
      </div>
      <span class="time is-flex gap-2 is-align-items-center">
        <svg class="h-3 w-3">
          <use xlink:href="#clock"></use>
        </svg>
        6:00 PM
      </span>
    </div>
    <div class="is-flex text-sm">
      <slot name="content"></slot>
    </div>
    <div class="is-flex">
      <div class="is-flex flex-1 gap-2 is-align-items-center">
        <div class="avatar w-7 h-7">U</div>
        <span class="font-semibold avatar-name">User Name</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding: 24px 16px;
  border-radius: 16px;
  color: #293246;

  .time {
    color: #8f95a3;
    font-size: 12px;
    line-height: 15px;
  }
  &.presentation {
    background: #f3fafa;
    border: 1px solid rgba(171, 217, 218, 0.38);

    .icon {
      color: #8ccecf;
    }
  }

  &.mail {
    background: #fef5f3;
    border: 1px solid rgba(247, 179, 161, 0.32);

    .icon {
      color: #fcab95;
    }
  }

  .avatar {
    background: #d9edfa;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
    color: #75a8d0;
  }
  .avatar-name {
    font-size: 14px;
    color: #8f95a3;
  }
}
</style>
