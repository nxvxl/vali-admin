<template>
  <div class="app-title">
    <div>
      <h1><i class="fa" :class="icon"></i> {{ title }}</h1>
      <p>{{description}}</p>
    </div>
    <ul class="app-breadcrumb breadcrumb">
      <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
      <li class="breadcrumb-item" v-for="(b, index) in breadcrumb" :key="index">
        <a href="#">{{ b }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: ['props'],
  data() {
    return {
      ...this.props
    }
  }
}
</script>