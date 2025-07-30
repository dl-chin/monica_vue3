import {ref, reactive} from "vue";
import axios from "axios";

interface DogApiResponse {
  message: string;
  status: string;
}

let dogList = reactive<string[]>([])

export default function () {
  async function addDog() {
    try {
      let {data} = await axios.get<DogApiResponse>("https://dog.ceo/api/breeds/image/random")
      dogList.push(data.message)
    } catch (e) {
      alert("Error adding a dog")
    }
  }
  return {dogList, addDog};

}
