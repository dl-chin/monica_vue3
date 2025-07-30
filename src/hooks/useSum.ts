import {ref,computed} from "vue";

let sum = ref(0);
let bigSum = computed(() => {
  return sum.value * 10
})

//functions
export default function () {
  function addOne() {
    sum.value++
  }

  return {sum, bigSum, addOne}
}

