<template>
  <div>
    <li v-if="!item.children">
      <router-link class="app-menu__item" :to="item.to">
        <i class="app-menu__icon fa" :class="item.icon"></i>
        <span class="app-menu__label">{{ item.label }}</span> 
      </router-link>
    </li>
    <li v-else class="treeview" :class="{ 'is-expanded': isExpanded }" @click="expandMenu">
      <a class="app-menu__item" href="#">
        <i class="app-menu__icon fa" :class="item.icon"></i>
        <span class="app-menu__label">{{ item.label }}</span> 
        <i v-if="item.children && item.children.length > 0" class="treeview-indicator fa fa-angle-right"></i>
      </a>
      <ul class="treeview-menu" v-if="item.children && item.children.length > 0">
        <li v-for="(child, index) in item.children" :key="index" class="">
          <router-link class="treeview-item" :to="child.to">
            <i class="icon fa fa-circle-o"></i> {{ child.label }}
          </router-link>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: ['item'],
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    expandMenu() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>
