<template>
  <div class="app-title">
    <div>
      <h1><i class="fa" :class="props.icon"></i> {{ props.title }}</h1>
      <p>{{ props.description }}</p>
    </div>
    <ul class="app-breadcrumb breadcrumb">
      <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
      <li class="breadcrumb-item" v-for="(b, index) in props.breadcrumb" :key="index">
        <a href="#">{{ b }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: ['props'],
}
</script>