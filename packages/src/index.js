import dynamic from './src/dynamic.vue'

liuButton.install = function (Vue) {
    Vue.component(dynamic.name,dynamic)
}

export default dynamic