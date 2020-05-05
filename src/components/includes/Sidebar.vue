<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image">
      <div>
        <p class="app-sidebar__user-name">John Doe</p>
        <p class="app-sidebar__user-designation">Frontend Developer</p>
      </div>
    </div>
    <ul class="app-menu">
      <SidebarItem v-for="(item, index) in sidebarItems" :key="index" :item="item" />
    </ul>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarItems: [
        {
          to: '/dashboard',
          label: 'Dashboard',
          icon: 'fa-dashboard'
        },
        {
          to: '#',
          label: 'UI Elements',
          icon: 'fa-laptop',
          children: [
            {
              to: 'bootstrap-components',
              label: 'Bootstrap Elements'
            },
            {
              to: 'https://fontawesome.com/v4.7.0/icons/',
              label: 'Font Icons'
            },
            {
              to: 'ui-cards',
              label: 'Cards'
            },
            {
              to: 'widgets',
              label: 'Widgets'
            },
          ]
        },
        {
          to: 'charts',
          label: 'Charts',
          icon: 'fa-pie-chart'
        },
        {
          to: '#',
          label: 'Forms',
          icon: 'fa-edit',
          children: [
            {
              to: 'form-components',
              label: 'Form Components'
            },
            {
              to: 'form-custom',
              label: 'Custom Components'
            },
            {
              to: 'form-samples',
              label: 'Form Samples'
            },
            {
              to: 'form-notifications',
              label: 'Form Notifications'
            },
          ]
        },
        {
          to: '#',
          label: 'Tables',
          icon: 'fa-th-list',
          children: [
            {
              to: 'table-basic',
              label: 'Basic Tables'
            },
            {
              to: 'table-data-table',
              label: 'Data Tables'
            },
          ]
        },
        {
          to: '#',
          label: 'Pages',
          icon: 'fa-file-text',
          children: [
            {
              to: 'blank-page',
              label: 'Blank Page'
            },
            {
              to: 'page-login',
              label: 'Login Page'
            },
            {
              to: 'page-lockscreen',
              label: 'Lockscreen Page'
            },
            {
              to: 'page-user',
              label: 'User Page'
            },
            {
              to: 'page-invoice',
              label: 'Invoice Page'
            },
            {
              to: 'page-calendar',
              label: 'Calendar Page'
            },
            {
              to: 'page-mailbox',
              label: 'Mailbox Page'
            },
            {
              to: 'page-error',
              label: 'Error Page'
            },
          ]
        },
        {
          to: 'docs',
          label: 'Docs',
          icon: 'fa-file-code-o'
        }
      ]
    }
  },
  components: {
    SidebarItem
  }
}
</script>